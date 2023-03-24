import { rapidity } from "../types"

const appetizers = [
    {
        name: "Chips de navet",
        ingredients: [
            {
                name: "Navet",
                amount: 1,
                unit: "p"
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Préparer le navet", "Trancher le navet en lamelles"],
        steps: [],
    },
    {
        name: "Tapenade de thon",
        ingredients: [
            {
                name: "Thon",
                amount: 250,
                unit: "g"
            },
            {
                name: "Fromage à tartiner",
                amount: 250,
                unit: "g"
            },
        ],
        rapidity: rapidity.FAST,
        preparation: [],
        steps: ["Mélanger le thon avec le fromage"],
    },
    {
        name: "Tartine de pesto",
        ingredients: [
            {
                name: "Pain",
                amount: 25,
                unit: "g",
            },
            {
                name: "Pesto",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Trancher le pain"],
        steps: ["Griller les tranches au grille-pain", "Tartiner les tranches avec le pesto"],
    },
    {
        name: "Pain croquant tartiné",
        ingredients: [
            {
                name: "Pain croquant",
                amount: 5,
                unit: "p",
            },
            {
                name: "Tomate",
                amount: 1,
                unit: "p",
            },
            {
                name: "Fromage à tartiner",
                amount: 125,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Préparer la tomate et la trancher"],
        steps: ["Tartiner le pain de fromage", "Disposer la tomate sur la tartine"],
    },
    {
        name: "Houmous",
        ingredients: [
            {
                name: "Pois chiche",
                amount: 350,
                unit: "g",
            },
            {
                name: "Tahin",
                amount: 100,
                unit: "g",
            },
            {
                name: "Citron",
                amount: 1,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Egouter les pois chiche", "Préparer l'ail et l'écraser"],
        steps: ["Mixer les pois chiche avec le tahin, le citron et l'ail"],
    },
]

export default appetizers
