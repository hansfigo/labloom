import { auth } from '$lib/utils/auth';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
    if (locals.username) {
        throw redirect(302, '/')
    }
}) satisfies PageServerLoad;


import type { Actions } from './$types';
export const actions = {
    register: async ({ request }) => {

        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        console.log(username, password);

        if (!username && !password) {
            return fail(400, { missing: true, message: "Username dan Password belum di isi !" })
        }

        if (!password) {
            return fail(400, { missing: true, message: "Password belum di isi !" })
        }

        if (!username) {
            return fail(400, { missing: true, message: "Username belum di isi !" })
        }

        const register = auth.register(username.toString(), password.toString())

        const res = (await register).response

        if (!res.ok) {
            const errorMsg = await res.json()
            return fail(400, { invalid: true, message: errorMsg.message })
        }

        throw redirect(300, '/login')

    }
} satisfies Actions;