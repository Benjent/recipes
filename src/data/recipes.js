const recipes = [
    // TODO Dahl lentilles
    // Burger végé
    // galettes
    // hachi végé kefta pdt
    // cake patates emmental
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
        steps: ["Préparer le navet", "Trancher le navet en lamelles"]
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
        steps: ["Trancher le pain", "Griller les tranches au grille-pain", "Tartiner les tranches avec le pesto"]
    },
    {
        name: "Salade à la vinaigrette moutardée",
        ingredients: [
            {
                name: "Laitue",
                amount: 1,
                unit: "p",
            },
            {
                name: "Échalotte",
                amount: 1,
                unit: "p",
            },
            {
                name: "Moutarde",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: "Rapide",
        steps: ["Laver la salade", "Préparer l'échalotte et la trancher", "Mélanger moutarde, huile, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Ajouter sel et l'échalotte"]
    },
    {
        name: "Fajita",
        ingredients: [
            {
                name: "Falafel",
                amount: 250,
                unit: "g",
            },
            {
                name: "Champignon",
                amount: 6,
                unit: "p",
            },
            {
                name: "Oignon rouge",
                amount: 6,
                unit: "p",
            },
            {
                name: "Carotte",
                amount: 2,
                unit: "p",
            },
            {
                name: "Sauce salsa",
                amount: 500,
                unit: "g",
            },
        ],
        rapidity: "Moyen",
        steps: ["Préparer l'oignon, les champignons et les carottes et les trancher", "Pré-cuire les carottes dans une casserole", "Faire revenir l'oignon et les champignons à la poêle", "Émietter les falafels et les ajouter à la poêle avec les carottes", "Épicer le mélange", "Ajouter la sauce salsa", "Chauffer les galettes au micro-ondes"]
    },
    {
        name: "Gnocchi à la crème",
        ingredients: [
            {
                name: "Gnocchi",
                amount: 300,
                unit: "g",
            },
            {
                name: "Champignon",
                amount: 10,
                unit: "p",
            },
            {
                name: "Crème",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: "Moyen",
        steps: ["Préparer les champignons et les trancher", "Faire revenir les gnocchis dans du beurre à la poêle", "Retirer les gnocchis et faire revenir la crème et les champignons à la poêle"]
    },
    {
        name: "Risotto",
        ingredients: [
            {
                name: "Riz",
                amount: 500,
                unit: "g",
            },
            {
                name: "Champignon",
                amount: 20,
                unit: "p",
            },
            {
                name: "Oignon",
                amount: 1,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
            {
                name: "Parmesan",
                amount: 250,
                unit: "g",
            },
            {
                name: "Vin blanc",
                amount: 25,
                unit: "cl",
            },
            {
                name: "Bouillon",
                amount: 1,
                unit: "l",
            },
        ],
        rapidity: "Long",
        steps: ["Préparer les champignons, l'oignon, l'ail et les trancher", "Faire bouillir le bouillon à la casserole", "Faire revenir l'ail et l'oignon à la poêle", "Ajouter les champignons à la poêle", "Ajouter le riz avec le vin blanc", "Ajouter régulièrement le bouillon jusqu'à épuisement", "Ajouter le parmesan"]
    },
]

export default recipes
