import { auth } from '$lib/utils/auth';
import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ resolve, event }) => {

    const cookies = event.cookies.get('session')
    console.log(cookies);

    if (!cookies) {
        return await resolve(event)
    }

    const username = await auth.getUserDataFromCookies(cookies)

    if (username) {
        event.locals.username = {
            username : username.responseData
        }
    }
    
    return await resolve(event)
};