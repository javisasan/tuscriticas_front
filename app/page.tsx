import Image from "next/image";
import Link from 'next/link';

async function getLatestMovies() {
    const movies = await fetch('http://192.168.1.91:8080/latest', {cache: "no-store"}).then((res) => res.json());
    
    return movies.map((movie, i) => ({
        slug: movie.slug,
        title: movie.title,
        thumb: movie.rawImage
    }));
}

export default async function Home() {
    const latestMoviesData = getLatestMovies();
    const [latestMovies] = await Promise.all([latestMoviesData]);

  return (
    <div>
        <div><Link href="/search">Search</Link></div>
        <h2>Movie List: {latestMovies.length} movies</h2>
        <ul>
            {latestMovies.map((movie) => {
                return (
                    <li>
                        <Link href={`/movie/${movie.slug}`}>
                            {movie.title}
                            <br/>
                            <img src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2/${movie.thumb}`} />
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
