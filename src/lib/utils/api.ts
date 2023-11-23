import { clearInputValue, nama, nim, prodi } from "$lib/input";
import { asisten, isEdit, isError, isNative } from "$lib/stores/store";
import { apiUrl } from "$lib/utils/url";
import { get } from "svelte/store";


const resetIsError = () => {
    isError.set(
        {
            isError: false,
            message: ""
        }
    )
}

const fetchUpdatedData = async () => {
    const res = await fetch(`${apiUrl}/main.php`);

    const data = await res.json();

    return data;
};

const handleSend = async (files: any) => {
    if (get(nama) === '' || get(nim) === '' || get(prodi) === '' || !files) {
        isError.set({
            isError: true,
            message: "Input Kosong atau File Gambar tidak dipilih"
        });
        return;
    }

    console.log(get(nama));

    const formData = new FormData();
    formData.append('nama', get(nama));
    formData.append('nim', get(nim));
    formData.append('prodi', get(prodi));
    formData.append('gambar', files);

    try {
        const response = await fetch(`${apiUrl}/main.php`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.text();



        console.log(responseData);

    } catch (error) {
        console.error("Error:", error);
    }
};


const deleteData = async (targetNim: string) => {
    const url = `${apiUrl}/asisten/delete`
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ nim: nim })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(response);

    const x = await fetchUpdatedData();

    asisten.set(x);
};


const updateData = async (targetNim: string) => {
    if (get(nama) === '' || get(nim) === '' || get(prodi) === '') {
        isError.set(
            {
                isError: true,
                message: "Input Kosong"
            }
        )
        return
    }

    const response = await fetch(`${apiUrl}/main.php?nim=${targetNim}`, {
        method: 'PUT',
        body: JSON.stringify({
            nama: get(nama),
            nim: get(nim),
            prodi: get(prodi)
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const x = await fetchUpdatedData();

    resetIsError()

    asisten.set(x);

    clearInputValue();

    isEdit.set(!get(isEdit));
};

export { deleteData, fetchUpdatedData, handleSend, updateData };

