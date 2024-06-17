'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

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
  return res.json()
}

export default function Search() {

    //const movieData = getMovie(params.slug);
    //const [movie] = await Promise.all([movieData]);

    // https://nextjs.org/docs/app/api-reference/functions/use-search-params
    const searchParams = useSearchParams()
    const title = searchParams.get('title')

    if (title?.length > 3) {
        const moviesData = searchMovies(title);
    }

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>Search Movie</h2>
            <form>
                <label for="title">Title</label>
                <input type="text" name="title" value={title} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
