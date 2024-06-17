'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { useCallback} from 'react'

/*
export async function blabla(slug: string) {
    const posts = await fetch('http://192.168.1.91:8080/movie/' + slug).then((res) => res.json());

    return posts.map((post) => ({
        slug: post.slug,
        overview: post.overview
    }));
}
*/

async function searchMovies(title: string) {
  const res = await fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`)
    const movies = await fetch(`http://192.168.1.91:8080/getmovietest?title=akira`, {cache: "no-store"}).then((res) => res.json());
  return res.json()
}

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination
export default function Search() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
 
    //fetch(`http://192.168.1.91:8080/getmovietest?title=${title}`, {cache: "no-store"}).then((res) => res.json())

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
        </div>
    );
}
