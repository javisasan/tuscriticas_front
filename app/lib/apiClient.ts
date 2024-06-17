'use server'

export async function getLatestMovies() {
    const movies = await fetch('http://192.168.1.91:8080/latest', {cache: "no-store"}).then((res) => res.json());
    
    return movies.map((movie, i) => ({
        slug: movie.slug,
        title: movie.title,
        thumb: movie.rawImage
    }));
}

export async function getMovie(slug: string) {
  const res = await fetch(`http://192.168.1.91:8080/movie/${slug}`, {cache: "no-store"})
console.log(res);
  return res.json()
}

export async function searchMoviesFromProvider(query: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  //const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  //return res.json()

    if (query == '') {
        return null;
    }

    const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${query}`, {mode: 'no-cors'}).then((res) => res.json());

    return res.data.map((movie) => ({
        id: movie.external_id,
        title: movie.title,
        originalTitle: movie.original_title,
        image: movie.image,
        published: movie.release_date
    }));
}
