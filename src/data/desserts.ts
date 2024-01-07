import { Category, Rapidity, Recipe } from "../types"

const desserts: Recipe[] = [
    {
        name: "Bananes flambées",
        category: Category.DESSERT,
        ingredients: [
            {
                name: "Banane",
                amount: 2,
                unit: "p"
            },
            {
                name: "Rhum",
                amount: 10,
                unit: "cl"
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Eplucher et couper les bananes"],
        steps: ["Faire revenir les bananes à la poêle avec beurre et sucre", "Ajouter du rhum et le faire flamber"],
    },
]

export default desserts
