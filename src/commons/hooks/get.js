export const get = async (params) => {
    const url = `${import.meta.env.VITE_ARTIST_API}${params}`;
    const resp = await fetch(url);
    const data = resp.json();
    return data;
}
