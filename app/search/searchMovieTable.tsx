import { searchMovies } from '@/app/lib/apiClient';
import SearchMovieList from './searchMovieList';

export default async function SearchMovieTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
console.log("==="+query);
    const movieList = await searchMovies(query, currentPage);
console.log(movieList);

    return (
        <>
        <SearchMovieList data={movieList} />
        </>
    );
}
