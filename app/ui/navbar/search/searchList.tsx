'use client'

import SearchItem from './searchItem';

export default function SearchList(props) {
    if (!props.movies) {
        return (
            <div id="searchlist"></div>
        );
    }

    return (
        <div id="searchlist">
            {props.movies.map((movie) => {
                    return (
                <SearchItem movie={movie} />
                           )
            })}
            <div>
                <a href={`/search?query=${props.term}`}>Search</a>
            </div>
        </div>
    );
}
