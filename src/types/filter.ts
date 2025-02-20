import { PosteType, UniteType } from "./types";

export interface FilterType {
  poste?: PosteType | "";
  unite?: UniteType | "";
}

export interface FilterProps {
  filter?: string;
  handleClick: (type: "poste" | "unite", filterValue: string) => void;
}
