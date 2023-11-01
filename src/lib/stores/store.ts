import type { Asisten } from "$lib/types/types";
import { writable } from "svelte/store";

interface isError {
    isError : boolean,
    message : string
}

export const asisten = writable<Asisten[]>([])
export const isAdd = writable<Boolean>(false);
export const isEdit = writable<Boolean>(false);
export const currrentEditedData = writable<Asisten>({});
export const isNative = writable<boolean>(false)
export const isError = writable<isError>(
    {
        isError : false,
        message : ""
    }
)