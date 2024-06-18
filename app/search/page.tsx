import Link from 'next/link';
import Search from './search';
import SearchMovieList from './searchMovieList';
import { searchMoviesFromProvider } from '@/app/lib/apiClient';
import { Suspense } from 'react';

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default async function Page({
    searchParams
}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const movieList = await searchMoviesFromProvider(query);

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>Search Movie</h2>
            <Search placeholder="hola hola"/>
            <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
                <SearchMovieList data={movieList} />
            </Suspense>
        </div>
    );
}
