import { auth } from '$lib/utils/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


import { apiUrl } from '$lib/utils/url';
import type { Actions } from './$types';

export const actions = {
    post: async ({ request }) => {
        const data = await request.formData();

        const nim = data.get('nim')!;
        const nama = data.get('nama')!;
        const prodi = data.get('prodi')!;
        const gambar = data.get('gambar')!

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nim', nim);
        formData.append('prodi', prodi);
        formData.append('gambar', gambar);


        const response = await fetch(`${apiUrl}/asisten`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        

        console.log(responseData);
    },
} satisfies Actions;