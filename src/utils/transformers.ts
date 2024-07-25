import { ApiMovie } from "src/models/apiMovie";
import { Movie } from "src/models/Movie";

const apiMovieExample = {
    id: 1022789,
    original_title: "Inside Out 2",
    poster_path: "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    release_date: "2024-06-11"
}

export function formatMovie (apiMovieExample: ApiMovie): Movie {
    return {
        id: apiMovieExample.id,
        title: apiMovieExample.original_title,
        releaseDate: apiMovieExample.release_date,
        posterUrl: apiMovieExample.poster_path
    }  
}

const movie: Movie = formatMovie(apiMovieExample);
console.log(movie);