import { rapidity, category } from "../types"

const recipes = [
    // TODO ajouter recettes below
    // Dahl de lentilles
    // Galette oeuf fromage
    // Omelette
    // Omelette au champignon
    // Penne bolo lentlle
    // burito riz pesto rosso
    // enchiladas
    // Risotto coquillettes fromage
    // Riz froid radis fromage
    // Hachis parmentier de kefta (pomme de terre, carotte)
    // Cake à la pomme de terre (+ emmental)
    {
        name: "Salade à la vinaigrette moutardée",
        category: category.SALAD,
        ingredients: [
            {
                name: "Laitue",
                amount: 1,
                unit: "p",
            },
            {
                name: "Échalote",
                amount: 1,
                unit: "p",
            },
            {
                name: "Moutarde",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Laver la salade", "Préparer l'échalote et la trancher"],
        steps: ["Mélanger moutarde, huile, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Ajouter sel et l'échalote"],
    },
    {
        name: "Tomates feta",
        category: category.SALAD,
        ingredients: [
            {
                name: "Tomate",
                amount: 4,
                unit: "p",
            },
            {
                name: "Feta",
                amount: 500,
                unit: "g",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
            {
                name: "Moutarde",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Préparer la tomate et la trancher", "Trancher la feta", "Couper l'ail"],
        steps: ["Mélanger moutarde, huile, ail, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Poivrer"],
    },
    {
        name: "Rouleau de betterave",
        category: category.WRAP,
        ingredients: [
            {
                name: "Mâche",
                amount: 1,
                unit: "p",
            },
            {
                name: "Betterave",
                amount: 1,
                unit: "p",
            },
            {
                name: "Comté",
                amount: 25,
                unit: "g",
            },
            {
                name: "Noix",
                amount: 1,
                unit: "p",
            },
            {
                name: "Galette de riz",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Laver la salade", "Préparer la betterave et la trancher", "Trancher le comté", "Émietter la noix"],
        steps: ["Mouiller la galette", "Disposer sur le diamètre de la galette les tranches de betterave et de comté", "Ajouter une feuille de salade, un filer d'huile et les miettes de noix", "Rouler la galette"],
    },
    {
        name: "Salade de thon",
        category: category.SALAD,
        ingredients: [
            {
                name: "Laitue",
                amount: 1,
                unit: "p",
            },
            {
                name: "Thon",
                amount: 250,
                unit: "g",
            },
            {
                name: "Roquefort",
                amount: 250,
                unit: "g",
            },
            {
                name: "Maïs",
                amount: 50,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Laver la salade", "Trancher le thon et le roquefort"],
        steps: ["Mélanger le thon, le roquefort et le maïs avec la salade"],
    },
    {
        name: "Burger",
        category: category.BURGER,
        ingredients: [
            {
                name: "Pain burger",
                amount: 4,
                unit: "p",
            },
            {
                name: "Oignon rouge",
                amount: 1,
                unit: "p",
            },
            {
                name: "Tomate",
                amount: 1,
                unit: "p",
            },
            {
                name: category.SALAD,
                amount: 1,
                unit: "p",
            },
            {
                name: "Champignon",
                amount: 4,
                unit: "p",
            },
            {
                name: "Tomme",
                amount: 25,
                unit: "g",
            },
            {
                name: "Oeuf",
                amount: 4,
                unit: "p",
            },
            {
                name: "Moutarde",
                amount: 5,
                unit: "g",
            },
            {
                name: "Ketchup",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Laver la salade", "Préparer l'oignon, les champignons et les trancher", "Trancher la tomme, la tomate et arracher une feuille de salade"],
        steps: ["Faire revenir les champignons à la poêle", "Cuire l'oeuf à la poêle et y ajouter du poivre", "Griller les pains au grille-pain", "Assembler moutarde, champignon, salade, fromage, tomate, oignon, oeuf et ketchup dans les pains"],
    },
    {
        name: "Riz à la sauce curry",
        category: category.DAHL,
        ingredients: [
            {
                name: "Riz",
                amount: 250,
                unit: "g",
            },
            {
                name: "Sauce curry",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: [],
        steps: ["Cuire le riz", "Disposer le riz avec la sauce curry"],
    },
    {
        name: "Riz aux légumes",
        category: category.DAHL,
        ingredients: [
            {
                name: "Riz",
                amount: 250,
                unit: "g",
            },
            {
                name: "Sauce curry",
                amount: 1,
                unit: "p",
            },
            {
                name: "Petits pois",
                amount: 200,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: [],
        steps: ["Cuire le riz", "Disposer le riz, la sauce curry et les petits pois"],
    },
    {
        name: "Quinoa à la pastèque",
        category: category.TABBOULEH,
        ingredients: [
            {
                name: "Quinoa",
                amount: 250,
                unit: "g",
            },
            {
                name: "Pastèque",
                amount: 0.25,
                unit: "p",
            },
            {
                name: "Menthe",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Trancher la pastèque en dés", "Couper la menthe"],
        steps: ["Cuire le quinoa", "Mélanger la pastèque et la menthe avec le quinoa et laisser refroidir"],
    },
    {
        name: "Fajita au maïs",
        category: category.WRAP,
        ingredients: [
            {
                name: "Tomate cerise",
                amount: 50,
                unit: "g",
            },
            {
                name: "Emmental",
                amount: 25,
                unit: "g",
            },
            {
                name: "Maïs",
                amount: 50,
                unit: "g",
            },
            {
                name: "Galette de blé",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.FAST,
        preparation: ["Préparer les tomates et les trancher"],
        steps: ["Pré-chauffer les galettes au micro-ondes", "Disposer les tomates, le maïs et l'emmental dans la galette et la rouler"],
    },
    {
        name: "Fajita",
        category: category.WRAP,
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
            {
                name: "Galette de blé",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer l'oignon, les champignons et les carottes et les trancher", "Émietter les falafels"],
        steps: ["Pré-cuire les carottes dans une casserole", "Faire revenir l'oignon et les champignons à la poêle", "Ajouter les falafels à la poêle avec les carottes", "Épicer le mélange", "Ajouter la sauce salsa", "Chauffer les galettes au micro-ondes", "Disposer le mélange dans la galette et la rouler"],
    },
    {
        name: "Salade de lentilles",
        category: category.SALAD,
        ingredients: [
            {
                name: "Lentilles",
                amount: 250,
                unit: "g",
            },
            {
                name: "Radis",
                amount: 10,
                unit: "p",
            },
            {
                name: "Myrtille",
                amount: 50,
                unit: "g",
            },
            {
                name: "Roquette",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Laver la salade, les radis et les myrtilles", "Trancher les radis"],
        steps: ["Cuire les lentilles", "Mélanger la salade, les radis et les myrtilles avec les lentilles"],
    },
    {
        name: "Salade de pâtes au fenouil",
        category: category.SALAD,
        ingredients: [
            {
                name: "Pâtes",
                amount: 250,
                unit: "g",
            },
            {
                name: "Fenouil",
                amount: 1,
                unit: "p",
            },
            {
                name: "Tapenade",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Laver ler fenouil et le trancher"],
        steps: ["Pré-cuire les pâtes dans une casserole", "Mélanger les pâtes froides avec le fenouil et la tapenade"],
    },
    {
        name: "Ravioles au bleu",
        category: category.PASTA,
        ingredients: [
            {
                name: "Ravioles",
                amount: 500,
                unit: "g",
            },
            {
                name: "Bleu",
                amount: 250,
                unit: "g",
            },
            {
                name: "Noix",
                amount: 5,
                unit: "p",
            },
            {
                name: "Ciboulette",
                amount: 10,
                unit: "g",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Couper la ciboulette et le fromage", "Émietter les noix"],
        steps: ["Cuire les ravioles", "Ajouter les ravioles dans la poêle avec le bleu", "Disposer la noix et la ciboulette"],
    },
    {
        name: "Galette de fondue de poireaux",
        category: category.GALETTE,
        ingredients: [
            {
                name: "Galette de sarrasin",
                amount: 1,
                unit: "p",
            },
            {
                name: "Champignon",
                amount: 6,
                unit: "p",
            },
            {
                name: "Oignon",
                amount: 1,
                unit: "p",
            },
            {
                name: "Échalote",
                amount: 1,
                unit: "p",
            },
            {
                name: "Crème",
                amount: 250,
                unit: "g",
            },
            {
                name: "Poireau",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer l'oignon, l'échalote, les champignons et le poireau et les trancher"],
        steps: ["Faire revenir l'oignon et les champignons à la poêle", "Ajouter l'échalote et le poireau à la poêle", "Ajouter la crème et mélanger", "Faire griller la galette et y ajoutant la fondue de poireaux"],
    },
    {
        name: "Muffins aux tomates et aux olives",
        category: category.CAKE,
        ingredients: [
            {
                name: "Oeuf",
                amount: 3,
                unit: "p",
            },
            {
                name: "Tomates",
                amount: 4,
                unit: "p",
            },
            {
                name: "Farine",
                amount: 150,
                unit: "g",
            },
            {
                name: "Levure",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer la tomate et la trancher"],
        steps: ["Mélanger les oeufs avec la farine et la levure", "Ajouter la tomate", "Epicer, poivrer et saler", "Verser le mélange dans des moules", "Cuire au four"],
    },
    {
        name: "Gnocchi à la crème",
        category: category.PASTA,
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
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer les champignons et les trancher"],
        steps: ["Faire revenir les gnocchis dans du beurre à la poêle", "Retirer les gnocchis et faire revenir la crème et les champignons à la poêle"],
    },
    {
        name: "Champignons farcis",
        category: category.STUFFED,
        ingredients: [
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
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer les champignons et retirer leur pied"],
        steps: ["Farcir les champignons de crème et ajouter des épices", "Cuir les champignons au four"]
    },
    {
        name: "Salade césar",
        category: category.SALAD,
        ingredients: [
            {
                name: category.SALAD,
                amount: 1,
                unit: "p",
            },
            {
                name: "Tomate cerise",
                amount: 10,
                unit: "p",
            },
            {
                name: "Avocat",
                amount: 1,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
            {
                name: "Tofu",
                amount: 250,
                unit: "g",
            },
            {
                name: "Mayonnaise",
                amount: 25,
                unit: "g",
            },
            {
                name: "Oeuf",
                amount: 1,
                unit: "p",
            },
            {
                name: "Citron",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Laver la salade", "Couper les tomates cerises en deux", "Préparer l'ail et l'écraser"],
        steps: ["Faire revenir le tofu à la poêle", "Remuer l'oeuf avec la mayonnaise, l'huile, le jus de citron et du poivre", "Remuer la salade avec les tomates, l'ail, le tofu et le mélange"],
    },
    {
        name: "Omelette à la pomme de terre",
        category: category.OMELETTE,
        ingredients: [
            {
                name: "Oeuf",
                amount: 4,
                unit: "p",
            },
            {
                name: "Pomme de terre",
                amount: 6,
                unit: "p",
            },
            {
                name: "Ciboulette",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: rapidity.MEDIUM,
        preparation: ["Préparer les pommes de terre et les trancher"],
        steps: ["Faire revenir les pommes de terre à la poêle et les épicer", "Remuer les oeufs avec la ciboulette", "TODO"],
    },
    {
        name: "Dahl de lentilles de corail",
        category: category.DAHL,
        ingredients: [
            {
                name: "Lentilles de corail",
                amount: 250,
                unit: "g",
            },
            {
                name: "Pulpe de tomate",
                amount: 400,
                unit: "ml",
            },
            {
                name: "Lait de coco",
                amount: 400,
                unit: "ml",
            },
            {
                name: "Oignon",
                amount: 1,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 2,
                unit: "p",
            },
            {
                name: "Huile de coco",
                amount: 5,
                unit: "cl",
            },
            {
                name: "Gingembre",
                amount: 10,
                unit: "g",
            },
        ],
        rapidity: rapidity.LONG,
        preparation: ["Préparer l'oignon, l'ail, le gingembre et les trancher"],
        steps: ["Faire cuire l'oignon dans l'huile de coco", "Ajouter l'ail et le gingembre, épicer et mélanger", "Ajouter les lentilles de corail et mélanger", "Ajouter la pulpe de tomate avec de l'eau et mélanger", "Ajouter le lait de coco et mélanger", "Ajouter de la coriandre"],
    },
    {
        name: "Risotto",
        category: category.RICE,
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
        rapidity: rapidity.LONG,
        preparation: ["Préparer les champignons, l'oignon, l'ail et les trancher"],
        steps: ["Faire revenir l'ail et l'oignon à la poêle", "Ajouter les champignons à la poêle", "Ajouter le riz avec le vin blanc", "Ajouter régulièrement le bouillon jusqu'à épuisement", "Ajouter le parmesan"],
    },
    {
        name: "Tagliatelles aux coques",
        category: category.PASTA,
        ingredients: [
            {
                name: "Coques",
                amount: 500,
                unit: "g",
            },
            {
                name: "Tagliatelles",
                amount: 250,
                unit: "g",
            },
            {
                name: "Oignon",
                amount: 1,
                unit: "p",
            },
            {
                name: "Vin blanc",
                amount: 25,
                unit: "cl",
            },
            {
                name: "Crème",
                amount: 50,
                unit: "g",
            },
        ],
        rapidity: rapidity.LONG,
        preparation: ["Préparer les coques", "Préparer l'oignon et le trancher"],
        steps: ["Faire bouillir l'eau avec l'oignon et le vin blanc", "Verser les coques dans l'eau", "Cuire les tagliatelles", "Mélanger les coques et les tagliatelles avec la crème"],
    },
]

export default recipes
