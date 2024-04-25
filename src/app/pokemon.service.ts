import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonListResponse {
  results: PokemonListItem[];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  fetchPokemon(pokemon: string | number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${pokemon}`);
  }

  fetchPokemonList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.baseUrl}?limit=151`);
  }

  fetchPokemonByName(
    pokemonName: string
  ): Observable<PokemonListItem | undefined> {
    return this.fetchPokemonList().pipe(
      map((response) =>
        response.results.find((pokemon) => pokemon.name === pokemonName)
      )
    );
  }
}
