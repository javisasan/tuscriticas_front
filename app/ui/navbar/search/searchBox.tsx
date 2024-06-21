'use client'

import SearchList from './searchList';
import { useDebouncedCallback } from 'use-debounce';
import { search } from './actions/search';
import React, { useState } from 'react';

export default function SearchBox() {
    const [movies, setMovies] = React.useState(0);
    const [term, setTerm] = React.useState(0);
    let searchTerm = '';

    const handleSearch = useDebouncedCallback(async (term) => {
        setTerm(term);
        const list = document.getElementById("searchlist");
        if (term.length > 0) {
            const result = await search(term);
            setMovies(result);
            list.style.display = "block";
        } else {
            list.style.display = "none";
        }
    }, 300);

    return (
        <div className="float-right">
            <input
                type="text"
                placeholder="Search..."
                className="searchbox"
                id="searchbox"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
            <SearchList movies={movies} term={term} />
        </div>
    );
}
