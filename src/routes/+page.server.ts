import { apiUrl } from '$lib/utils/url';
import type { PageServerLoad } from './$types';

export let ssr = true

export const load = (async ({ locals }) => {
    // const url = `${apiUrl}/main.php`
	const url = `${apiUrl}/asisten`

	console.log(url);
	

	const res = await fetch(url)

	const data = await res.json()

	let username = null
	if (locals.username) {
		username = locals.username.username
	}

	return { data, username: username };
}) satisfies PageServerLoad;

