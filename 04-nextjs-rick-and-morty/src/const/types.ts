export type Path = {
    name: string;
    path: string;
    icon?: React.ReactNode;
};

export interface IconProps  {
    color: string;
    size: string;
    className?: string;
    fill?: boolean;
}

export interface Place {
    name: string
    url: string
  }

export type MultipleCharacterResponse = {
  info: { count:number, pages: number, next: string, prev: string | null},
  results: Character[]
}

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Place
    location: Place
    image: string
    episode: string[]
    url: string
    created: string
  }

export interface Episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}

export interface Location {
    id: number
    name: string
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}