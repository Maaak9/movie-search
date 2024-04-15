import { atom } from "nanostores";
import { Movie, MovieDetails } from "../types";

export const $movies = atom<Movie[]>([]);
export const $totalMovieResults = atom<number>(0);
export const $searchTerm = atom<string>('');

export const $movieDetailsData = atom<MovieDetails | null>(null);