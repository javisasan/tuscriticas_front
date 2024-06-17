import Link from 'next/link';
import { getMovie } from '@/lib/apiClient';

export default async function Prueba({ params }: { params: { slug: string } }) {

    const movieData = getMovie(params.slug);

    const [movie] = await Promise.all([movieData]);

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>{movie.title}</h2>
            <h4><i>{movie.originalTitle} ({movie.releaseDate.substring(0, 4)})</i></h4>
            <img src={movie.profileImage} />
            <p>{movie.overview}</p>
        </div>
    );
}
