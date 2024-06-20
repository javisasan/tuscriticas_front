'use client'

import Link from 'next/link';

export default function SearchBox() {
    return (
        <div className="float-right">
            <input type="text" placeholder="Search..." class="searchbox" />
            <div>
                <div className="searchBoxItem">
                    <div className="float-left">
                        <img src='http://192.168.1.91:8080/images/movie/profile/s/rK7LafXBhHKjALYOT3jRUTlFdpk.jpg' className="searchBoxThumb" />
                    </div>
                    <div className="float-left">
                        Una peli cualquiera para ver
                    </div>
                </div>
            </div>
        </div>
    );
}
