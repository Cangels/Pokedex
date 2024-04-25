import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonDetails, Stat } from './interfaces';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemonName: string = '';
  pokemonNumber: number | null = null;
  pokemonImage: string | null = null;
  currentPokemon: number = 1;
  searchTerm: string = '';
  loading: boolean = false;
  pokemonList: any[] = [];
  pokemonDetails: PokemonDetails | null = null;
  detailsVisible: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
    this.loadPokemon(this.currentPokemon);
  }

  getPokemonList() {
    this.pokemonService.fetchPokemonList().subscribe(
      (response) => {
        this.pokemonList = response.results;
      },
      (error) => {
        console.error('Erro ao buscar a lista de Pokémons:', error);
      }
    );
  }

  loadPokemon(pokemon: number | string, updateDatails: boolean = false) {
    this.loading = true;
    this.pokemonService.fetchPokemon(pokemon).subscribe(
      (data: PokemonDetails) => {
        this.pokemonImage =
          data.sprites.versions['generation-v'][
            'black-white'
          ].animated.front_default;
        this.pokemonName = data.name;
        this.pokemonNumber = data.id;
        this.currentPokemon = data.id;
        this.pokemonDetails = null;
        this.loading = false;
        if (updateDatails) {
          this.showDetails();
        }
      },
      (error) => {
        this.updateNotFoundState();
        this.loading = false;
      }
    );
  }

  handleSearch() {
    const searchTerm = this.searchTerm.trim().toLowerCase();
    this.searchTerm = '';

    this.loading = true;

    if (!isNaN(+searchTerm) && +searchTerm >= 1 && +searchTerm <= 151) {
      this.currentPokemon = +searchTerm;
      this.loadPokemon(this.currentPokemon);
    } else if (searchTerm) {
      this.pokemonService.fetchPokemonByName(searchTerm).subscribe(
        (pokemon) => {
          if (pokemon) {
            const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
            if (pokemonId) {
              this.currentPokemon = +pokemonId;
              this.loadPokemon(this.currentPokemon);
              if (!this.loading) {
                this.showDetails();
              }
            } else {
              this.loading = false;
              this.updateNotFoundState();
            }
          } else {
            this.loading = false;
            this.updateNotFoundState();
          }
        },
        (error) => {
          this.loading = false;
          console.error('Erro ao buscar o Pokémon:', error);
          this.updateNotFoundState();
        }
      );
    } else {
      this.loading = false;
      this.updateNotFoundState();
    }
    this.detailsVisible = !this.detailsVisible;
  }

  updateNotFoundState() {
    this.pokemonName = 'Pokemon Fugiu!';
    this.pokemonNumber = null;
    this.pokemonImage = null;
  }

  navigate(direction: 'prev' | 'next') {
    if (direction === 'prev' && this.currentPokemon > 1) {
      this.currentPokemon -= 1;
    } else if (direction === 'next' && this.currentPokemon < 151) {
      this.currentPokemon += 1;
    }
    this.loadPokemon(this.currentPokemon);
    if (this.detailsVisible) {
      this.showDetails();
    }
  }

  showDetails() {
    if (
      this.currentPokemon &&
      (!this.pokemonDetails || this.pokemonDetails.id !== this.currentPokemon)
    ) {
      this.loading = true;
      this.pokemonService.fetchPokemon(this.currentPokemon).subscribe(
        (data: PokemonDetails) => {
          this.detailsVisible = true;
          this.pokemonDetails = data;
          this.loading = false;
        },
        (error) => {
          console.error('Erro ao buscar detalhes do Pokémon:', error);
          this.loading = false;
          this.pokemonDetails = null;
        }
      );
    }
  }

  toggleDetailsVisibility() {
    this.detailsVisible = !this.detailsVisible;

    if (this.detailsVisible) {
      this.showDetails();
    }
  }

  getTypeNames(types?: { type: { name: string } }[]): string {
    return types?.map((t) => t.type.name).join(', ') || '';
  }

  getStat(stats: Stat[] | undefined, statName: string): number | undefined {
    if (!stats) {
      return undefined;
    }
    const stat = stats.find((s) => s.stat.name === statName);
    return stat ? stat.base_stat : undefined;
  }

  getTotalStats(): number {
    return (
      this.pokemonDetails?.stats?.reduce(
        (total, stat) => total + stat.base_stat,
        0
      ) || 0
    );
  }
}
