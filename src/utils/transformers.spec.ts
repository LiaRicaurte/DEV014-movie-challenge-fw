import { formatMovie } from "./transformers"

describe('casos de prueba de formatMovie', () => {
    it('formatMovie transformacion exitosa', () => {
        //1. preparar
        const apiMovieExample = {
            "id": 1022789,
            "original_title": "Inside Out 2",
            "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            "release_date": "2024-06-11"
        }
        //2. accionar (ejecutamos funcion a probar)
        const newMovie = formatMovie(apiMovieExample)

        //3. confirmar
        expect(newMovie.title).toEqual(apiMovieExample.original_title)
    })
})