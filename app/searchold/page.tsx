import Link from 'next/link';
import SearchMovieFromProvider from './searchMovieFromProvider';

async function searchMovies(title: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  return res.json()
}

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default async function SearchMovie({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>Search Movie</h2>
            <SearchMovieFromProvider />
        </div>
    );
}
