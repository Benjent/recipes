import sorting from "../utils/sorting"

let fruits = [
    {
        name: "Pomme",
        type: "fruit",
        months: [1, 2, 3, 4, 8, 9, 10, 11, 12],
        color: "#f1e6b2",
    },
    {
        name: "Abricot",
        type: "fruit",
        months: [6, 7, 8],
        color: "#e28b13",
    },
    {
        name: "Avocat",
        type: "fruit",
        months: [1, 2, 3, 4],
        color: "#c5cf75",
    },
    {
        name: "Mûre",
        type: "fruit",
        months: [8, 9],
        color: "#41353f",
    },
    {
        name: "Cassis",
        type: "fruit",
        months: [6, 7, 8],
        color: "#212a46",
    },
    {
        name: "Myrtille",
        type: "fruit",
        months: [7, 8, 9],
        color: "#508ab4",
    },
    {
        name: "Cerise",
        type: "fruit",
        months: [6, 7, 8],
        color: "#911032",
    },
    {
        name: "Chataîgne",
        type: "fruit",
        months: [10, 11],
        color: "#b66e5c",
    },
    {
        name: "Clémentine",
        type: "fruit",
        months: [1, 2, 11, 12],
        color: "#e68c32",
    },
    {
        name: "Quetsche",
        type: "fruit",
        months: [8, 9, 10],
        color: "#d29b39",
    },
    {
        name: "Raisin",
        type: "fruit",
        months: [9, 10],
        color: "#a850b3",
    },
    {
        name: "Pamplemousse",
        type: "fruit",
        months: [2, 3, 4, 5, 6],
        color: "#ee9386",
    },
    {
        name: "Reine-claude",
        type: "fruit",
        months: [9],
        color: "#d6c126",
    },
    {
        name: "Figue",
        type: "fruit",
        months: [7, 8, 9, 10],
        color: "#d55e54",
    },
    {
        name: "Noisette",
        type: "fruit",
        months: [9, 10, 11],
        color: "#bb603e",
    },
    {
        name: "Kiwi",
        type: "fruit",
        months: [1, 2, 3, 11, 12],
        color: "#a4af57",
    },
    {
        name: "Citron",
        type: "fruit",
        months: [1, 2, 12],
        color: "#e8d331",
    },
    {
        name: "Mandarine",
        type: "fruit",
        months: [1, 2, 11, 12],
        color: "#eaa536",
    },
    {
        name: "Mangue",
        type: "fruit",
        months: [1, 2, 3, 4, 5, 11, 12],
        color: "#efac00",
    },
    {
        name: "Melon",
        type: "fruit",
        months: [6, 7, 8, 9],
        color: "#e9ad64",
    },
    {
        name: "Mirabelle",
        type: "fruit",
        months: [8, 9],
        color: "#c0b043",
    },
    {
        name: "Nectarine",
        type: "fruit",
        months: [7, 8],
        color: "#ead9a6",
    },
    {
        name: "Orange",
        type: "fruit",
        months: [1, 2, 3, 12],
        color: "#f09c00",
    },
    {
        name: "Pêche",
        type: "fruit",
        months: [6, 7, 8, 9],
        color: "#edc05f",
    },
    {
        name: "Poire",
        type: "fruit",
        months: [1, 2, 3, 8, 9, 10, 11, 12],
        color: "#e9decd",
    },
    {
        name: "Kaki",
        type: "fruit",
        months: [1, 10, 11, 12],
        color: "#e75b00",
    },
    {
        name: "Ananas",
        type: "fruit",
        months: [1],
        color: "#f0e284",
    },
    {
        name: "Prune",
        type: "fruit",
        months: [7, 8, 9],
        color: "#c9a94c",
    },
    {
        name: "Grenade",
        type: "fruit",
        months: [1, 2, 11, 12],
        color: "#a6001c",
    },
    {
        name: "Coing",
        type: "fruit",
        months: [9, 10],
        color: "#e2d0a8",
    },
    {
        name: "Framboise",
        type: "fruit",
        months: [6, 7, 8],
        color: "#c94155",
    },
    {
        name: "Groseille",
        type: "fruit",
        months: [6, 7, 8],
        color: "#f10f0f",
    },
    {
        name: "Rhubarbe",
        type: "fruit",
        months: [4, 5, 6],
        color: "#e8b96b",
    },
    {
        name: "Fraise",
        type: "fruit",
        months: [5, 6, 7],
        color: "#e32c31",
    },
    {
        name: "Noix",
        type: "fruit",
        months: [9, 10],
        color: "#ad7e46",
    },
    {
        name: "Pastèque",
        type: "fruit",
        months: [6, 7, 8],
        color: "#f2675c",
    },
]

fruits = sorting.sortByName(fruits)

export default fruits
