import type { Asisten } from '$lib/types/types';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { apiUrl } from '$lib/utils/url';

export const load = (async ({ params }) => {
    const nim = params.slug

    const url = `${apiUrl}/asisten/info.php?nim=${nim}`

    const res = await fetch(url)

    const asisten: Asisten = await res.json()

    return { asisten };

}) satisfies PageServerLoad;

export const actions = {
    update: async ({ request, params }) => {

        console.log("Update");


        const data = await request.formData();
        const nama = data.get('nama')!;
        const nim = params.slug

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nim', nim);

        const response = await fetch(`${apiUrl}//update/nama.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        return { isEditingName: false }

    },

    updateNim: async ({ request, params }) => {

        console.log("Update");


        const data = await request.formData();
        const newNim = data.get('nim')!;
        const nim = params.slug

        const formData = new FormData();
        formData.append('newNim', newNim);
        formData.append('nim', nim);

        const response = await fetch(`${apiUrl}//update/nim.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        console.log(responseData);

        throw redirect(302, '/asisten/' + newNim)


        return { isEditingNim: false }

    },

    updateImage: async ({ request, params }) => {
        console.log("Update");


        const data = await request.formData();

        const gambar = data.get('gambar')!

        console.log("GG", gambar);

        const nim = params.slug

        const formData = new FormData();
        formData.append('gambar', gambar);
        formData.append('nim', nim);

        const response = await fetch(`${apiUrl}//update/image.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        console.log(responseData);

    }
} satisfies Actions;
