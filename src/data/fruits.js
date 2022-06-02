import sorting from "../utils/sorting"

let fruits = [
    {
        name: "Pomme",
        months: [1, 2, 3, 4, 8, 9, 10, 11, 12],
        color: "#f1e6b2",
    },
    {
        name: "Abricot",
        months: [6, 7, 8],
        color: "#e28b13",
    },
    {
        name: "Avocat",
        months: [1, 2, 3, 4],
        color: "#c5cf75",
    },
    {
        name: "Mûre",
        months: [8, 9],
        color: "#41353f",
    },
    {
        name: "Cassis",
        months: [6, 7, 8],
        color: "#212a46",
    },
    {
        name: "Myrtille",
        months: [7, 8, 9],
        color: "#508ab4",
    },
    {
        name: "Cerise",
        months: [6, 7, 8],
        color: "#911032",
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
        name: "Quetsche",
        months: [8, 9, 10],
        color: "#d29b39",
    },
    {
        name: "Raisin",
        months: [9, 10],
        color: "#a850b3",
    },
    {
        name: "Pamplemousse",
        months: [2, 3, 4, 5, 6],
        color: "#ee9386",
    },
    {
        name: "Reine-claude",
        months: [9],
        color: "#d6c126",
    },
    {
        name: "Figue",
        months: [7, 8, 9, 10],
        color: "#d55e54",
    },
    {
        name: "Noisette",
        months: [9, 10, 11],
        color: "#bb603e",
    },
    {
        name: "Kiwi",
        months: [1, 2, 3, 11, 12],
        color: "#a4af57",
    },
    {
        name: "Citron",
        months: [1, 2, 12],
        color: "#e8d331",
    },
    {
        name: "Mandarine",
        months: [1, 2, 11, 12],
        color: "#eaa536",
    },
    {
        name: "Mangue",
        months: [1, 2, 3, 4, 5, 11, 12],
        color: "#efac00",
    },
    {
        name: "Melon",
        months: [6, 7, 8, 9],
        color: "#e9ad64",
    },
    {
        name: "Mirabelle",
        months: [8, 9],
        color: "#c0b043",
    },
    {
        name: "Nectarine",
        months: [7, 8],
        color: "#ead9a6",
    },
    {
        name: "Orange",
        months: [1, 2, 3, 12],
        color: "#f09c00",
    },
    {
        name: "Pêche",
        months: [6, 7, 8, 9],
        color: "#edc05f",
    },
    {
        name: "Poire",
        months: [1, 2, 3, 8, 9, 10, 11, 12],
        color: "#e9decd",
    },
    {
        name: "Kaki",
        months: [1, 10, 11, 12],
        color: "#e75b00",
    },
    {
        name: "Ananas",
        months: [1],
        color: "#f0e284",
    },
    {
        name: "Prune",
        months: [7, 8, 9],
        color: "#c9a94c",
    },
    {
        name: "Grenade",
        months: [1, 2, 11, 12],
        color: "#a6001c",
    },
    {
        name: "Coing",
        months: [9, 10],
        color: "#e2d0a8",
    },
    {
        name: "Framboise",
        months: [6, 7, 8],
        color: "#c94155",
    },
    {
        name: "Groseille",
        months: [6, 7, 8],
        color: "#f10f0f",
    },
    {
        name: "Rhubarbe",
        months: [4, 5, 6],
        color: "#e8b96b",
    },
    {
        name: "Fraise",
        months: [5, 6, 7],
        color: "#e32c31",
    },
    {
        name: "Noix",
        months: [9, 10],
        color: "#ad7e46",
    },
    {
        name: "Pastèque",
        months: [6, 7, 8],
        color: "#f2675c",
    },
]

fruits = sorting.sortByName(fruits)

export default fruits
