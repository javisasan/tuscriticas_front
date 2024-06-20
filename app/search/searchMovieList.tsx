'use client'

import Link from 'next/link';

/// image={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2/${movie.image}`}
export default function SearchMovieList(props) {
    console.log(props);
    return (
        <ul>
            {props?.data?.map((movie) => {
                return (
                     <SearchMovieItem
                        id = {movie.id}
                        title = {movie.title}
                        originalTitle = {movie.originalTitle}
                        image = {movie.image}
                        published = {movie.published}
                    />
               )}
            )}
        </ul>
    );
}

export function SearchMovieItem({
    id,
    title,
    originalTitle,
    published,
    image
}: {
    id: string
    title: string
    originalTitle: string
    published: string
    image: string
}) {
    const imageUrl = `https://media.themoviedb.org/t/p/w94_and_h141_bestv2${image}`;
    const publishYear = published?.substring(0,4);

    return (
        <div>
            <Link href={`/search/import/${id}`}>
                <img src={imageUrl} />
            </Link>
            <div>
                <b>{title}</b>
                <br/>
                <small><i>{originalTitle} ({publishYear})</i></small>
            </div>
        </div>
    );
}
