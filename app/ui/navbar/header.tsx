'use client'

import Image from "next/image";
import Link from 'next/link';
import SearchBox from './search/searchBox';

export default function Header() {
    return (
        <div className="navbar">
            <div>
                <Link href='/'>
                    <Image
                      src="/img/tc-logo.gif"
                      alt="Tus Criticas"
                      className="content-start"
                      width={133}
                      height={20}
                      priority
                    />
                </Link>
            </div>
            <SearchBox />
        </div>
    );
}
