'use server'

import { searchMovies } from '@/app/lib/apiClient';

export async function search(title: string) {
    const result = await searchMovies(title);
    return result;
}
