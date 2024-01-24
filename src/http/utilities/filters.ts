export const filterByString = (haystack: string, needle: string): boolean => {
    return haystack.toLowerCase() === needle.toLowerCase();
}

export const filterByStringArray = (haystack: string, needles: string[]): boolean => {
    return needles.some((needle: string) => {
        return filterByString(haystack, needle);
    });
}
