import MovieBreadcrumb from './movieBreadcrumb';
import { getMovie } from '@/lib/apiClient';

export default async function Prueba({ params }: { params: { slug: string } }) {
    const serverHost = process.env.SERVER_API_HOST;
    const movieData = getMovie(params.slug);
    const [movie] = await Promise.all([movieData]);

    const releaseDate = movie.releaseDate ? `(${movie.releaseDate.substring(0, 4)})` : '';

    return (
        <div>
            <MovieBreadcrumb title={movie.title}></MovieBreadcrumb>
            <h2>{movie.title}</h2>
            <h4><i>{movie.originalTitle} {releaseDate}</i></h4>
            <img src={`${serverHost}/${movie.profileImage}`} />
            <p>{movie.overview}</p>
        </div>
    );
}
