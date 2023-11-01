// // import type { asisten } from '$lib/stores/store.js';
// import { apiUrl } from './api';

// const asisten = ()=>{
//     const handleSend = async () => {
//         const fetchUpdatedData = async () => {
//             const res = await fetch(`${apiUrl}/main.php`);
    
//             const data = await res.json();
    
//             return data;
//         };

// 		const response = await fetch(`${apiUrl}/main.php`, {
// 			method: 'POST',
// 			body: JSON.stringify({
// 				nama: nama,
// 				nim: nim,
// 				prodi: prodi
// 			})
// 		});

// 		if (!response.ok) {
// 			throw new Error(`HTTP error! Status: ${response.status}`);
// 		}

// 		console.log(response);

// 		const responseData = await response.json();

// 		console.log(responseData);

// 		const x = await fetchUpdatedData();

// 		asisten.set(x);

// 		nama = '';
// 		nim = '';
// 		prodi = '';
// 	};
// }