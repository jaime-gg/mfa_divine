export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function removeUnderscore(string) {
    return string.replace(/_/g, "");
}