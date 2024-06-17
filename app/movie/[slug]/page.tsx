import Link from 'next/link';

/*
export async function blabla(slug: string) {
    const posts = await fetch('http://192.168.1.91:8080/movie/' + slug).then((res) => res.json());

    return posts.map((post) => ({
        slug: post.slug,
        overview: post.overview
    }));
}
*/

async function getMovie(slug: string) {
  const res = await fetch(`http://192.168.1.91:8080/movie/${slug}`, {cache: "no-store"})
console.log(res);
  return res.json()
}

export default async function Prueba({ params }: { params: { slug: string } }) {

    const movieData = getMovie(params.slug);

    const [movie] = await Promise.all([movieData]);

    return (
        <div>
            <Link href="/">&lt; Back</Link>
            <br />
            <h2>{movie.title}</h2>
            <h4><i>{movie.originalTitle} ({movie.releaseDate.substring(0, 4)})</i></h4>
            <img src={movie.profileImage} />
            <p>{movie.overview}</p>
        </div>
    );
}
