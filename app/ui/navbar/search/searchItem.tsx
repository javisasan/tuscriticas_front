'use client'

import Link from 'next/link';

export default function SearchItem(props) {
    const movieSelected = function() {
        const input = document.getElementById("searchbox");
        input.value = '';
        const list = document.getElementById("searchlist");
        list.style.display = "none";
    }

    return (
        <Link href={`/movie/${props.movie.slug}`} onClick={movieSelected}>
            <div className="searchBoxItem">
                <div className="float-left">
                    <img src={props.movie.profileImage} className="searchBoxThumb" />
                </div>
                <div className="float-left">{props.movie.title}</div>
            </div>
        </Link>
    );
}
