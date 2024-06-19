'use client'

import Image from "next/image";
import Link from 'next/link';

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
            <div className="align-right">
<input type="text" placeholder="Search..." class="searchbox" />
            </div>
        </div>
    );
}
