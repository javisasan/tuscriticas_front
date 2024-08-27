'use server'

import { Movie } from '@/app/lib/definitions';

export async function getLatestMovies() {
    const serverHost = process.env.SERVER_API_HOST;

    const movies = await fetch(`${serverHost}/latest`, {cache: "no-store"}).then((res) => res.json());
    
    /*
    return movies.map((movie, i) => ({
        slug: movie.slug,
        title: movie.title,
        thumb: movie.profileImage
    }));
   */
    return movies.map((movie: {slug: string, title: string, profileImage: string}) => (<Movie>{
        slug: movie.slug,
        title: movie.title,
        profileImage: movie.profileImage
    }));
}

export async function searchMovies(query: string) {
    const serverHost = process.env.SERVER_API_HOST;

    if (query == '') {
        return [];
    }

    const res = await fetch(`${serverHost}/search?title=${query}`, {cache: "no-store", mode: 'no-cors'}).then((res) => res.json());

    return res.map((movie) => ({
        slug: movie.slug,
        title: movie.title,
        year: movie.year,
        profileImage: `${serverHost}/${movie.image}`,
        averageRate: movie.averageRate,
    }));
}

export async function getMovie(slug: string) {
    const serverHost = process.env.SERVER_API_HOST;

    const res = await fetch(`${serverHost}/movie/${slug}`, {cache: "no-store"})
    return res.json()
}

export async function searchMoviesFromProvider(query: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  //const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  //return res.json()
    const serverHost = process.env.SERVER_API_HOST;

    if (query == '') {
        return null;
    }

    const res = await fetch(`${serverHost}/search/provider?title=${query}`, {cache: "no-store", mode: 'no-cors'}).then((res) => res.json());

    return res.data.map((movie) => ({
        id: movie.external_id,
        title: movie.title,
        originalTitle: movie.original_title,
        image: movie.image,
        published: movie.release_date
    }));
}

export async function importMovieFromProvider(providerId: string) {
    const serverHost = process.env.SERVER_API_HOST;

    const res = await fetch(`${serverHost}/importmovie?id=${providerId}`, {cache: "no-store"})
    return res.json()
}
