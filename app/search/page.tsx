import Link from 'next/link';
import Search from './search';
import SearchMovieList from './searchMovieList';
//import SearchMovieTable from './searchMovieTable';
import { searchMovies } from '@/app/lib/apiClient';
import { Suspense } from 'react';

/*
async function searchMovies(title: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  return res.json()
}
*/

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const movieList = await searchMovies(query);

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
