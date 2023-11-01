import { apiUrl } from '$lib/utils/url';
import type { PageServerLoad } from './$types';

export let ssr = true

export const load = (async ({ locals }) => {
    const url = `${apiUrl}/main.php`

    const res = await fetch(url)

    const data = await res.json()

    console.log("DATA ADMINNN",data);
    
    return { data, user: locals.username.username };
}) satisfies PageServerLoad;


/** @type {import('./$types').Actions} */
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


        const response = await fetch(`${apiUrl}/main.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        console.log(responseData);

    },
    update: async ({ request }) => {
        const data = await request.formData();

        const nim = data.get('nim')!;
        const nama = data.get('nama')!;
        const prodi = data.get('prodi')!;
        const gambar = data.get('gambar')!

        console.log(nama);
        

        const formData = new FormData();
        formData.append('nama', nama);
        formData.append('nim', nim);
        formData.append('prodi', prodi);
        formData.append('gambar', gambar);

        const response = await fetch(`${apiUrl}/update.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();

        console.log(responseData);

    }
};


