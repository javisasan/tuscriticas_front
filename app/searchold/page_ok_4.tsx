'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useCallback} from 'react'
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

export function SearchMovieList(query: string) {
    console.log(query);
}

export async function SearchMovieItem({
    title,
    originalTitle,
    published,
    image
}: {
    title: string
    originalTitle: string
    published: string
    image: string
}) {
    const imageUrl = `https://media.themoviedb.org/t/p/w94_and_h141_bestv2${image}`;
    const publishYear = published?.substring(0,4);
    const lista = await searchMovies(title);

    return (
        <div>
            <img src={imageUrl} />
            <div>
                <b>{title}</b>
                <br/>
                <small><i>{originalTitle} ({publishYear})</i></small>
            </div>
        </div>
    );
}

async function searchMovies(title: string) {
  // https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch
  const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {mode: 'no-cors'});
  return res.json()
}



// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default function Search() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
 
    //fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {cache: "no-store"}).then((res) => res.json())
    
    const content = document.getElementById("content");
    const root = createRoot(content);

    root.render(<SearchMovieItem
        title='Akiraka'
        originalTitle='Akirakun'
        image='/vjPt8HYymLOkRv82x9JwVO7M2a5.jpg'
        published='2021-12-05'
    />);

    return [
        {title: "Akira"},
        {title: "Pepe"},
    ]
  }, [])

    // https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const searchParams = useSearchParams()
    const title = searchParams.get('title')

/*
    if (title?.length > 3) {
        const moviesData = searchMovies(title);
    }
*/

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>Search Movie</h2>
            <form onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <input type="text" name="title" value={title} />
                <button type="submit">Submit</button>
            </form>
            <div id="content"></div>
        </div>
    );
}
