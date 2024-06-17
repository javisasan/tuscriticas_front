'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useCallback} from 'react'
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { searchMovies } from '@/lib/apiClient';
import SearchMovieList from './searchMovieList';

/*
async function searchMovies(title: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  return res.json()
}
*/

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default function SearchMovieForm() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    //const pepe = fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {cache: "no-store"}).then((res) => res.json())


    //const results = searchMovies('akira');
    
    const results = [
        {
            key: 'asdf',
            title: "Akira 1",
            originalTitle: 'Akirakun',
            image: '/vjPt8HYymLOkRv82x9JwVO7M2a5.jpg',
            published: '2022-12-05'
        },
        {
            key: 'fdfdf',
            title: "Akira 2",
            originalTitle: 'Otra Akira',
            image: '/jU0gw5z6JrazhGOh4UfULKqt268.jpg',
            published: '2024-08-12'
        }
    ];

    //const content = document.getElementById("content");
    //const root = createRoot(content);

/*
    root.render(<SearchMovieItem
        title='Akiraka'
        originalTitle='Akirakun'
        image='/vjPt8HYymLOkRv82x9JwVO7M2a5.jpg'
        published='2021-12-05'
    />);
*/

    //root.render(<SearchMovieList movieList={results} />);
    /*
    results.map((item) => {
        console.log(item);
    });
    */

/*
    return [
        {title: "Akira"},
        {title: "Pepe"},
    ]
*/
  }, [])

    // https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const searchParams = useSearchParams()
    let title = '';
    if (searchParams.has('title')) {
        title = searchParams.get('title')
    }

/*
    if (title?.length > 3) {
        const moviesData = searchMovies(title);
    }
*/

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" defaultValue={title} />
                <button type="submit">Submit</button>
            </form>
            <div id="content"></div>
            <Suspense>
                <SearchMovieList data={results} />
            </Suspense>
        </div>
    );
}
