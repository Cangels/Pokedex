export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonDetails {
  name: string;
  id: number;
  weight: number;
  height: number;
  types: {
    type: {
      name: string;
    };
  }[];
  stats: Stat[];
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
