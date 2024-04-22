import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemonName: string = '';
  pokemonNumber: number | null = null;
  pokemonImage: string = '';
  searchPokemon: number = 1;
  loading: boolean = false;


  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.loadPokemon(this.searchPokemon);
  }

  async loadPokemon(pokemon: number | string) {
    this.loading = true;

    this.pokemonService.fetchPokemon(pokemon).subscribe(
      (data: any) => {
        this.pokemonImage = data.sprites.versions['generation-v']['black-white'].animated.front_default;
        this.pokemonName = data.name;
        this.pokemonNumber = data.id;
        this.loading = false;
      },
      (error) => {
        this.pokemonName = 'Not found :c';
        this.pokemonNumber = null;
        this.loading = false;
      }
    );
  }

  handleSearch(searchTerm: string) {
    this.loadPokemon(searchTerm.toLowerCase());
  }

  navigate(direction: string) {
    if (direction === 'prev' && this.searchPokemon > 1) {
      this.searchPokemon -= 1;
    } else if (direction === 'next') {
      this.searchPokemon += 1;
    }

    this.loadPokemon(this.searchPokemon);
  }
}
