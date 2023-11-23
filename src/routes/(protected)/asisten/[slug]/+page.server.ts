import type { Asisten } from '$lib/types/types';
import { apiUrl } from '$lib/utils/url';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const nim = params.slug

    const url = `${apiUrl}/asisten/${nim}`

    const res = await fetch(url)

    const asisten: Asisten = await res.json()

    console.log("ASIS", asisten);

    return { asisten };

}) satisfies PageServerLoad;

export const actions = {
    updateNama: async ({ request, params }) => {

        console.log("Update");

        const data = await request.formData();
        const nama = data.get('nama')!;
        const nim = params.slug

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nim', nim);

        const response = await fetch(`${apiUrl}/asisten/update`, {
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

        const response = await fetch(`${apiUrl}/asisten/update`, {
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

        const response = await fetch(`${apiUrl}/asisten/update`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        console.log(responseData);

    },

    post: async ({ request }) => {
        const data = await request.formData();

        const nim = data.get('nim')!;
        const nama = data.get('nama') || "";
        const prodi = data.get('prodi') || "";
        const gambar = data.get('gambar') || "";

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nim', nim);
        formData.append('prodi', prodi);
        formData.append('gambar', gambar);


        const response = await fetch(`${apiUrl}/asisten/update`, {
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
