import { get, writable } from "svelte/store";

const nama = writable('')
const nim = writable('')
const prodi = writable('')
const isEditingTitle = writable<boolean>(true);
const isEditingNim = writable<boolean>(true);
const isEditingProdi = writable<boolean>(true);


let files: any;

const clearInputValue = () => {
    nama.set('')
    nim.set('')
    prodi.set('')
}

const toggleIsEditing = (input: string) => {
    if (input === 'nama') {
        isEditingTitle.set(!get(isEditingTitle));
    } else if (input === 'nim') {
        isEditingNim.set(!get(isEditingNim));
    }
};
export { nama, nim, prodi, clearInputValue, files, isEditingTitle, isEditingNim, toggleIsEditing }

