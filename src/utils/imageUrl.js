export function getImageUrl(name) {
    return new URL(`../assets/images/${name}`, import.meta.url).href
}