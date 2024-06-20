'use client'

import Link from 'next/link';

export default function MovieBreadcrumb(props) {
    return (
        <ol className="breadcrumb-custom">
            <li className="bcHome">
                <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                        </svg>
                </Link>
            </li>
            <li className="bcTitle">{props.title}</li>
            <li className="bcComments">
                <a href="#comentarios">0</a>
                <div className="breadcrumb-comment"></div>
            </li>
        </ol>
    );
}
