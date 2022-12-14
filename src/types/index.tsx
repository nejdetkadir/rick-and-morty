export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  results: Array<T>
}

export interface ApiErrorResponse {
  error: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatusEnum;
  type: string;
  gender: CharacterGenderEnum;
  origin: {
    name: string;
    url: string;
  }
  location: {
    name: string;
    url: string;
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

export enum CharacterStatusEnum {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "Unknown"
}

export enum CharacterGenderEnum {
  MALE = "Male",
  FEMALE = "Female",
  UNKNOWN = "Unknown"
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<string>;
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<string>;
  url: string;
  created: string;
}
