export function transformArray(input: any, chunkSize: any) {
    const output = [];
    for (let i = 0; i < input.length; i += chunkSize) {
        const chunk = input.slice(i, i + chunkSize);
        output.push(chunk);
    }
    return output;
}

// export function transformArray(arr: any, chunkSize: any) {
//     const output = [];
//     for (let i = 0; i < input.length; i += chunkSize) {
//         const chunk = input.slice(i, i + chunkSize);
//         output.push(chunk);
//     }
//     return output;
// }
