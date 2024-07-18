import { ApiMovie } from "src/models/apiMovie";
import { Movie } from "src/models/Movie";


export function formatMovie (apiMovieExample: ApiMovie): Movie {
    return {
        id: apiMovieExample.id,
        title: apiMovieExample.original_title,
        releaseDate: apiMovieExample.release_date,
        posterUrl: apiMovieExample.poster_path
    }
    
}