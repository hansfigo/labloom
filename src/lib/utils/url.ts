import { env } from '$env/dynamic/public';

export const apiUrl = env.PUBLIC_PROD === 'true' ? 'http://labloom.rf.gd' : 'http://localhost:8000';


console.log(apiUrl);

