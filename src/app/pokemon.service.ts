import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  fetchPokemon(pokemon: string | number) {
    return this.http.get(`${this.baseUrl}/${pokemon}`);
  }
}
