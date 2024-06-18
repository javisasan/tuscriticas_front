import { importMovieFromProvider } from "@/app/lib/apiClient";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function importMovie(providerId: slug) {
    const result = await importMovieFromProvider(providerId);
    
    revalidatePath('/');
    redirect(`/movie/${result.slug}`);
}

export default async function Page({
    params
}: { 
    params: { 
        providerId: string
    }
}) {
    await importMovie(params.providerId);

    return (
        <>Importing movie, please wait...</>
    );
}
