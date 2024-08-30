import Image from "next/image";
import Link from 'next/link';
import { getLatestMovies } from "./lib/apiClient";

export default async function Home() {
    const serverHost = process.env.SERVER_API_HOST;
    const latestMoviesData = getLatestMovies();
    const [latestMovies] = await Promise.all([latestMoviesData]);

  return (
    <div>
        <h1>Movie List: {latestMovies.length} movies</h1>
        <br/>
        <ul>
            {latestMovies.map((movie) => {
                return (
                    <li>
                        <Link href={`/movie/${movie.slug}`}>
                            {movie.title}
                            <br/>
                            <img src={`${serverHost}/${movie.profileImage}`} width="94" height="141" />
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  );
}
