import { auth } from '$lib/utils/auth';
import { fail, redirect } from '@sveltejs/kit';
import { v4 as uuidv4 } from 'uuid';
import type { PageServerLoad } from './$types';


export const load = (async ({ locals }) => {
    if (locals.username) {
        console.log("Sudah Login");
        throw redirect(302, '/')
    }
}) satisfies PageServerLoad;

import type { Actions } from './$types';

export const actions = {
    login: async ({ request, cookies }) => {

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

        const login = auth.login(username.toString(), password.toString())

        const res = (await login).response

        if (!res.ok) {
            const errorMsg = await res.json()
            return fail(400, { invalid: true, message: errorMsg.message })
        }

        const token = uuidv4()

        auth.createCookies(username.toString(), token)

        cookies.set('session', token)

        throw redirect(300, '/admin')

    }
} satisfies Actions;