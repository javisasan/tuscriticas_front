import Image from "next/image";
import Link from 'next/link';
import { getLatestMovies } from "./lib/apiClient";

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
