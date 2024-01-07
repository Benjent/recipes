import { Edible } from "../types"

export function sortByName(array: Edible[]) {
    return array.sort((a, b) => a.name.localeCompare(b.name))
}

export function getRandomNumbers(length: number) {
    return Array(length).fill(0).map((_, index) => index + 1).sort(() => Math.random() - 0.5)
}
