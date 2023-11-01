import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
    if (!locals.username) {
        throw redirect(302, '/login')
    }
}) satisfies LayoutServerLoad;