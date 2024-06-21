'use client'

import Link from 'next/link';

export default function SearchList(props) {
    console.log(props);
    const movieSelected = function() {
        const input = document.getElementById("searchbox");
        input.value = '';
        const list = document.getElementById("searchlist");
        list.style.display = "none";
    }

    if (!props.movies) {
        return (
            <div id="searchlist"></div>
        );
    }

    return (
        <div id="searchlist">
            {props.movies.map((movie) => {
                return (
                    <Link href={`/movie/${movie.slug}`} onClick={movieSelected}>
                        <div className="searchBoxItem">
                            <div className="float-left">
                                <img src={movie.image} className="searchBoxThumb" />
                            </div>
                            <div className="float-left">{movie.title}</div>
                        </div>
                    </Link>
                )
            })}
            <div>
                <a href={`/search?query=${props.term}`}>Search</a>
            </div>
        </div>
    );
}
