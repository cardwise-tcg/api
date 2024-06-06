export const filterByString = (haystack: string | string[], needle: string): boolean => {
    if (Array.isArray(haystack)) {
        return haystack.some((hay: string) => {
            return filterByString(hay, needle);
        });
    }
    return haystack.toLowerCase().includes(needle.toLowerCase());
}

export const filterByStringArray = (haystack: string | string[], needles: string[]): boolean => {
    return needles.some((needle: string) => {
        return filterByString(haystack, needle);
    });
}
