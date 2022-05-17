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
        rapidity: "Rapide",
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
        rapidity: "Rapide",
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
        rapidity: "Rapide",
        preparation: ["Trancher le pain"],
        steps: ["Griller les tranches au grille-pain", "Tartiner les tranches avec le pesto"],
    },
]

export default appetizers
