import { atom } from "nanostores";
import { Movie } from "../types";

export const $movies = atom<Movie[]>([])