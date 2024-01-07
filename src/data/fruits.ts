import { Edible } from "../types"
import { sortByName } from "../utils/array"

let fruits: Edible[] = [
    {
        name: "Abricot",
        months: [6, 7, 8],
        color: "#e28b13",
    },
    {
        name: "Ananas*",
        months: [1, 12],
        color: "#f0e284",
    },
    {
        name: "Avocat*",
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        color: "#c5cf75",
    },
    {
        name: "Banane*",
        months: [1, 2, 3, 4, 5, 6],
        color: "#e6c731",
    },
    {
        name: "Cassis",
        months: [6, 7, 8],
        color: "#212a46",
    },
    {
        name: "Cerise",
        months: [5, 6, 7, 8],
        color: "#911032",
    },
    {
        name: "Citron",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#e8d331",
    },
    {
        name: "Citron cavier",
        months: [12],
        color: "#ca573e",
    },
    {
        name: "Chataîgne",
        months: [10, 11],
        color: "#b66e5c",
    },
    {
        name: "Clémentine",
        months: [1, 2, 11, 12],
        color: "#e68c32",
    },
    {
        name: "Coing",
        months: [9, 10],
        color: "#e2d0a8",
    },
    {
        name: "Figue",
        months: [7, 8, 9, 10],
        color: "#d55e54",
    },
    {
        name: "Fraise",
        months: [5, 6, 7, 8, 9],
        color: "#e32c31",
    },
    {
        name: "Framboise",
        months: [5, 6, 7, 8, 9],
        color: "#c94155",
    },
    {
        name: "Fruit de la passion*",
        months: [1, 2, 3, 4, 10, 11, 12],
        color: "#933e58",
    },
    {
        name: "Goyave*",
        months: [5],
        color: "#b8ca4a",
    },
    {
        name: "Grenade",
        months: [1, 2, 11, 12],
        color: "#a6001c",
    },
    {
        name: "Groseille",
        months: [6, 7, 8, 9],
        color: "#f10f0f",
    },
    {
        name: "Kaki",
        months: [1, 10, 11, 12],
        color: "#e75b00",
    },
    {
        name: "Kiwano",
        months: [8, 9, 10],
        color: "#de9d3b",
    },
    {
        name: "Kiwi",
        months: [1, 2, 3, 4, 11, 12],
        color: "#a4af57",
    },
    {
        name: "Litchi*",
        months: [1],
        color: "#de3036",
    },
    {
        name: "Mandarine",
        months: [1, 2, 11, 12],
        color: "#eaa536",
    },
    {
        name: "Mangue*",
        months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
        color: "#efac00",
    },
    {
        name: "Melon",
        months: [6, 7, 8, 9, 10],
        color: "#e9ad64",
    },
    {
        name: "Mirabelle",
        months: [8, 9],
        color: "#c0b043",
    },
    {
        name: "Mûre",
        months: [8, 9],
        color: "#41353f",
    },
    {
        name: "Myrtille",
        months: [7, 8, 9],
        color: "#508ab4",
    },
    {
        name: "Nectarine",
        months: [7, 8, 9],
        color: "#ead9a6",
    },
    {
        name: "Nèfle",
        months: [5, 6, 7],
        color: "#dfa150",
    },
    {
        name: "Noisette",
        months: [1, 9, 10, 11, 12],
        color: "#bb603e",
    },
    {
        name: "Noix",
        months: [1, 9, 10],
        color: "#ad7e46",
    },
    {
        name: "Orange",
        months: [1, 2, 3, 11, 12],
        color: "#f09c00",
    },
    {
        name: "Pamplemousse",
        months: [1, 2, 3, 4, 5, 6],
        color: "#ee9386",
    },
    {
        name: "Pastèque",
        months: [6, 7, 8, 9],
        color: "#f2675c",
    },
    {
        name: "Pêche",
        months: [6, 7, 8, 9],
        color: "#edc05f",
    },
    {
        name: "Physalis",
        months: [12],
        color: "#edaa47",
    },
    {
        name: "Poire",
        months: [1, 2, 3, 8, 9, 10, 11, 12],
        color: "#e9decd",
    },
    {
        name: "Pomelo",
        months: [1, 2, 3, 4, 10, 11, 12],
        color: "#dad56c",
    },
    {
        name: "Pomme",
        months: [1, 2, 3, 4, 8, 9, 10, 11, 12],
        color: "#f1e6b2",
    },
    {
        name: "Prune",
        months: [6, 7, 8, 9, 10],
        color: "#c9a94c",
    },
    {
        name: "Quetsche",
        months: [8, 9, 10],
        color: "#d29b39",
    },
    {
        name: "Raisin",
        months: [8, 9, 10, 11],
        color: "#a850b3",
    },
    {
        name: "Reine-claude",
        months: [9],
        color: "#d6c126",
    },
    {
        name: "Rhubarbe",
        months: [4, 5, 6, 7],
        color: "#e8b96b",
    },
]

fruits = sortByName(fruits)

export default fruits
