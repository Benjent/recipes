import { Category, Rapidity } from "../types"

const recipes = [
    // TODO ajouter recettes below
    // Désserts - banane flambée
    // Omelette au champignon
    // Taboulé : 200g de semoule fine (cuire semoule avant...), équivalent d'eau bouillante (bouilloire), verser dans un plat avec raisins secs et tomates cerises, attendre 10 minute couvercle)
    // Penne bolo lentlle
    // burito riz pesto rosso
    // Riz froid radis fromage
    // Hachis parmentier de kefta (pomme de terre, carotte)
    // Cake à la pomme de terre (+ emmental)
    // Pancakes
    {
        name: "Oeufs brouillés",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Oeuf",
                amount: 4,
                unit: "p",
            },
        ],
        rapidity: Rapidity.FAST,
        steps: ["Brouiller les oeufs", "Epicer"],
    },
    {
        name: "Salade à la vinaigrette moutardée",
        category: Category.SALAD,
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
        rapidity: Rapidity.FAST,
        preparation: ["Laver la salade", "Préparer l'échalote et la trancher"],
        steps: ["Mélanger moutarde, huile, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Ajouter sel et l'échalote"],
    },
    {
        name: "Concombre à la feta",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Concombre",
                amount: 1,
                unit: "p",
            },
            {
                name: "Feta",
                amount: 500,
                unit: "g",
            },
            {
                name: "Basilique",
                amount: 5,
                unit: "g",
            },
            {
                name: "Olive verte",
                amount: 250,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Préparer concombre et le trancher", "Trancher la feta, le basilique et les olives"],
        steps: ["Mélanger le tout"],
    },
    {
        name: "Risotto de betterave",
        category: Category.RICE,
        ingredients: [
            {
                name: "Bouillon de légumes",
                amount: 100,
                unit: "cl",
            },
            {
                name: "Betterave",
                amount: 2,
                unit: "p",
            },
            {
                name: "Riz",
                amount: 300,
                unit: "g",
            },
            {
                name: "Parmesan",
                amount: 50,
                unit: "g",
            },
            {
                name: "Herbes",
                amount: 10,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Trancher les betteraves"],
        steps: ["Mélanger betteraves et riz dans une cocotte avec le bouillon", "Ajouter le fromage et épicer", "Saler et poivrer"],
    },
    {
        name: "Gratin de tortellinis",
        category: Category.GRATIN,
        ingredients: [
            {
                name: "Tortellinis",
                amount: 250,
                unit: "g",
            },
            {
                name: "Gaspacho",
                amount: 50,
                unit: "cl",
            },
        ],
        rapidity: Rapidity.FAST,
        steps: ["Baigner les tortellinis dans un plat avec le gaspacho", "Ajouter poivre et herbes", "Enfourner une quarantaine de minutes"],
    },
    {
        name: "Butternut rôti",
        category: Category.VEGETABLE,
        ingredients: [
            {
                name: "Butternut",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Préparer le butternut et le trancher"],
        steps: ["Huiler les tranches, saler, poivrer", "Enfourner une quarantaine de minutes"],
    },
    {
        name: "Tomates feta",
        category: Category.SALAD,
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
        rapidity: Rapidity.FAST,
        preparation: ["Préparer la tomate et la trancher", "Trancher la feta", "Couper l'ail"],
        steps: ["Mélanger moutarde, huile, ail, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Poivrer"],
    },
    {
        name: "Betterave feta",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Betterave",
                amount: 1,
                unit: "p",
            },
            {
                name: "Feta",
                amount: 500,
                unit: "g",
            },
            {
                name: "Moutarde",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Trancher la betterave", "Trancher la feta"],
        steps: ["Mélanger moutarde, huile, un peu d'eau et ajouter le vinaigre pour obtenir un mélange homogène", "Poivrer"],
    },
    {
        name: "Rouleau de betterave",
        category: Category.WRAP,
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
        rapidity: Rapidity.FAST,
        preparation: ["Laver la salade", "Préparer la betterave et la trancher", "Trancher le comté", "Émietter la noix"],
        steps: ["Mouiller la galette", "Disposer sur le diamètre de la galette les tranches de betterave et de comté", "Ajouter une feuille de salade, un filer d'huile et les miettes de noix", "Rouler la galette"],
    },
    {
        name: "Salade de thon",
        category: Category.SALAD,
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
        rapidity: Rapidity.FAST,
        preparation: ["Laver la salade", "Trancher le thon et le roquefort"],
        steps: ["Mélanger le thon, le roquefort et le maïs avec la salade"],
    },
    {
        name: "Pommes de terre sautées",
        category: Category.VEGETABLE,
        ingredients: [
            {
                name: "Pomme de terre",
                amount: 10,
                unit: "p",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Préparer les pommes de terre et les trancher", "Huiler le plat"],
        steps: ["Verser les pommes de terre dans le plat huilé", "Saler, poivrer et épicer"],
    },
    {
        name: "Burger",
        category: Category.BURGER,
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
                name: Category.SALAD,
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
        rapidity: Rapidity.FAST,
        preparation: ["Laver la salade", "Préparer l'oignon, les champignons et les trancher", "Trancher la tomme, la tomate et arracher une feuille de salade"],
        steps: ["Faire revenir les champignons à la poêle", "Cuire l'oeuf à la poêle et y ajouter du poivre", "Griller les pains au grille-pain", "Assembler moutarde, champignon, salade, fromage, tomate, oignon, oeuf et ketchup dans les pains"],
    },
    {
        name: "Riz à la sauce curry",
        category: Category.DAHL,
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
        rapidity: Rapidity.FAST,
        preparation: [],
        steps: ["Cuire le riz", "Disposer le riz avec la sauce curry"],
    },
    {
        name: "Wrap frais",
        category: Category.WRAP,
        ingredients: [
            {
                name: "Galette de blé",
                amount: 1,
                unit: "p",
            },
            {
                name: "Avocat",
                amount: 1,
                unit: "p",
            },
            {
                name: "Carotte",
                amount: 1,
                unit: "p",
            },
            {
                name: "Olive noire",
                amount: 5,
                unit: "p",
            },
            {
                name: "Tofu",
                amount: 250,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Râper la carotte", "Trancher les olives"],
        steps: ["Poêler le tofu", "Disposer le tofu, l'avocat, la carotte et les olives dans la galette"],
    },
    {
        name: "Riz aux légumes",
        category: Category.DAHL,
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
        rapidity: Rapidity.FAST,
        preparation: [],
        steps: ["Cuire le riz", "Disposer le riz, la sauce curry et les petits pois"],
    },
    {
        name: "Quinoa à la pastèque",
        category: Category.TABBOULEH,
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
        rapidity: Rapidity.FAST,
        preparation: ["Trancher la pastèque en dés", "Couper la menthe"],
        steps: ["Cuire le quinoa", "Mélanger la pastèque et la menthe avec le quinoa et laisser refroidir"],
    },
    {
        name: "Fajita au maïs",
        category: Category.WRAP,
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
        rapidity: Rapidity.FAST,
        preparation: ["Préparer les tomates et les trancher"],
        steps: ["Pré-chauffer les galettes au micro-ondes", "Disposer les tomates, le maïs et l'emmental dans la galette et la rouler"],
    },
    {
        name: "Omelette aux tomates cerise",
        category: Category.OMELETTE,
        ingredients: [
            {
                name: "Oeuf",
                amount: 4,
                unit: "p",
            },
            {
                name: "Tomates cerises",
                amount: 6,
                unit: "p",
            },
            {
                name: "Ciboulette",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Laver les tomates et les trancher"],
        steps: ["Mélanger les oeufs", "Ajouter les tomates et la ciboulette, saler, poivrer", "Cuire le mélange à la poêle"],
    },
    {
        name: "Salade de pois chiches",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Roquette",
                amount: 1,
                unit: "p",
            },
            {
                name: "Oignon rouge",
                amount: 1,
                unit: "p",
            },
            {
                name: "Orange",
                amount: 1,
                unit: "p",
            },
            {
                name: "Pois chiche",
                amount: 500,
                unit: "g",
            },
            {
                name: "Cumin",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        preparation: ["Laver la salade", "Préparer l'oignon et le trancher", "Rincer les pois chiche"],
        steps: ["Mélanger dans un saladier salade, pois chiche, oignon", "Ajouter cumin, huile d'olive et presser l'orange sur le mélange"],
    },
    {
        name: "Riz à la sauce tomate",
        category: Category.RICE,
        ingredients: [
            {
                name: "Riz",
                amount: 100,
                unit: "g",
            },
            {
                name: "Sauce tomate",
                amount: 100,
                unit: "ml",
            },
            {
                name: "Noix de cajou",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        steps: ["Cuire le riz", "Chauffer la sauce tomate", "Mélanger le tout avec la noix de cajou et poivrer"],
    },
    {
        name: "Galette saucisse",
        category: Category.GALETTE,
        ingredients: [
            {
                name: "Galette de sarrasin",
                amount: 1,
                unit: "p",
            },
            {
                name: "Saucisse végé",
                amount: 1,
                unit: "p",
            },
            {
                name: "Moutarde",
                amount: 5,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        steps: ["Pré-cuire la saucisse à la poêle", "Cuire la galette à la poêle avec la saucisse et la moutarde"],
    },
    {
        name: "Galette oeuf fromage",
        category: Category.GALETTE,
        ingredients: [
            {
                name: "Galette de sarrasin",
                amount: 1,
                unit: "p",
            },
            {
                name: "Oeuf",
                amount: 1,
                unit: "p",
            },
            {
                name: "Fromage",
                amount: 50,
                unit: "g",
            },
        ],
        rapidity: Rapidity.FAST,
        steps: ["Cuire la galette à la poêle avec l'oeuf et le fromage"],
    },
    {
        name: "Fajita",
        category: Category.WRAP,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer l'oignon, les champignons et les carottes et les trancher", "Émietter les falafels"],
        steps: ["Pré-cuire les carottes dans une casserole", "Faire revenir l'oignon et les champignons à la poêle", "Ajouter les falafels à la poêle avec les carottes", "Épicer le mélange", "Ajouter la sauce salsa", "Chauffer les galettes au micro-ondes", "Disposer le mélange dans la galette et la rouler"],
    },
    {
        name: "Spaghetti coco",
        category: Category.PASTA,
        ingredients: [
            {
                name: "Spaghetti",
                amount: 250,
                unit: "g",
            },
            {
                name: "Carotte",
                amount: 4,
                unit: "p",
            },
            {
                name: "Gingembre",
                amount: 1,
                unit: "p",
            },
            {
                name: "Crème de coco",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer et râper le gingembre et les carottes"],
        steps: ["Cuire les spaghettis", "Faire revenir les carottes et le gingembre à la poêle", "Ajouter la crème de coco aux carottes", "Mélanger le tout"],
    },
    {
        name: "Gratin de haricots rouges",
        category: Category.GRATIN,
        ingredients: [
            {
                name: "Haricots rouges",
                amount: 1000,
                unit: "g",
            },
            {
                name: "Bûche de chèvre",
                amount: 1,
                unit: "p",
            },
            {
                name: "Coulis de tomate",
                amount: 30,
                unit: "cl",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer l'ail", "Trancher la bûche"],
        steps: ["Pré-chauffer le four", "Mélanger les haricots avec le coulis et l'ail", "Epicer, poivrer le mélange et déposer les tranches de chèvre", "Enfourner une trentaine de minutes"],
    },
    {
        name: "Spaghetti bolognaise",
        category: Category.PASTA,
        ingredients: [
            {
                name: "Spaghetti",
                amount: 250,
                unit: "g",
            },
            {
                name: "Falafel",
                amount: 10,
                unit: "p",
            },
            {
                name: "Gingembre",
                amount: 1,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 1,
                unit: "p",
            },
            {
                name: "Sauce tomate",
                amount: 50,
                unit: "cl",
            },
            {
                name: "Vin rouge",
                amount: 50,
                unit: "cl",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer ail et gingembre"],
        steps: ["Faire revenir l'ail et le gingembre avec les falafels à la poêle", "Ajouter le vin", "Ajouter la sauce tomate et mélanger", "Cuire les spaghettis", "Mélanger le tout"],
    },
    {
        name: "Salade de lentilles",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Lentilles",
                amount: 250,
                unit: "g",
            },
            {
                name: "Feta",
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Laver la salade, les radis et les myrtilles", "Trancher les radis et la feta"],
        steps: ["Cuire les lentilles", "Mélanger la salade, la feta, les radis et les myrtilles avec les lentilles"],
    },
    {
        name: "Pizza aux champignons base crème",
        category: Category.PIZZA,
        ingredients: [
            {
                name: "Pâte à pizza",
                amount: 1,
                unit: "p",
            },
            {
                name: "Champignons",
                amount: 10,
                unit: "p",
            },
            {
                name: "Emmental",
                amount: 25,
                unit: "g",
            },
            {
                name: "Yaourt à la grecque",
                amount: 125,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer les champignons et les trancher", "Dérouler la pâte et répandre le yaourt et les champignons"],
        steps: ["Arroser d'huile la pizza", "Répandre l'emmental", "Enfourner la pizza une trentaine de minutes"],
    },
    {
        name: "Salade de pâtes au fenouil",
        category: Category.SALAD,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Laver ler fenouil et le trancher"],
        steps: ["Pré-cuire les pâtes dans une casserole", "Mélanger les pâtes froides avec le fenouil et la tapenade"],
    },
    {
        name: "Ravioles au bleu",
        category: Category.PASTA,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Couper la ciboulette et le fromage", "Émietter les noix"],
        steps: ["Cuire les ravioles", "Ajouter les ravioles dans la poêle avec le bleu", "Disposer la noix et la ciboulette"],
    },
    {
        name: "Galette de fondue de poireaux",
        category: Category.GALETTE,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer l'oignon, l'échalote, les champignons et le poireau et les trancher"],
        steps: ["Faire revenir l'oignon et les champignons à la poêle", "Ajouter l'échalote et le poireau à la poêle", "Ajouter la crème et mélanger", "Faire griller la galette et y ajoutant la fondue de poireaux"],
    },
    {
        name: "Grenailles au parmesan",
        category: Category.GRATIN,
        ingredients: [
            {
                name: "Grenailles",
                amount: 20,
                unit: "p",
            },
            {
                name: "Persil",
                amount: 50,
                unit: "g",
            },
            {
                name: "Parmesan",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer les grenailles"],
        steps: ["Arroser d'huile d'olive et enfourner les grenailles une trentaine de minutes", "Ajouter parmesan et persil"],
    },
    {
        name: "Muffins aux tomates et aux olives",
        category: Category.CAKE,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer la tomate et la trancher"],
        steps: ["Mélanger les oeufs avec la farine et la levure", "Ajouter la tomate", "Epicer, poivrer et saler", "Verser le mélange dans des moules", "Cuire au four"],
    },
    {
        name: "Gnocchi à la crème",
        category: Category.PASTA,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer les champignons et les trancher"],
        steps: ["Faire revenir les gnocchis dans du beurre à la poêle", "Retirer les gnocchis et faire revenir la crème et les champignons à la poêle"],
    },
    {
        name: "Champignons farcis",
        category: Category.STUFFED,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer les champignons et retirer leur pied"],
        steps: ["Farcir les champignons de crème et ajouter des épices", "Cuir les champignons au four"]
    },
    {
        name: "Tarte aux épinards",
        category: Category.PIE,
        ingredients: [
            {
                name: "Pâte feuilletée",
                amount: 250,
                unit: "g",
            },
            {
                name: "Epinards",
                amount: 500,
                unit: "g",
            },
            {
                name: "Oeuf",
                amount: 1,
                unit: "p",
            },
            {
                name: "Crème",
                amount: 20,
                unit: "cl",
            },
            {
                name: "Fromage de chèvre",
                amount: 50,
                unit: "g",
            },
            {
                name: "Noix de muscade",
                amount: 10,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Trouer la pâte feuilletée", "Préparer les épinards"],
        steps: ["Précuire la pâte au four", "Cuire les épinards", "Mélanger l'oeuf avec la crème et la noix de muscade", "Disposer les épinards et le chèvre sur la tarte et y verser le mélange", "Cuire la tarte"]
    },
    {
        name: "Pissaladière aux oignons",
        category: Category.PIE,
        ingredients: [
            {
                name: "Pâte feuilletée",
                amount: 250,
                unit: "g",
            },
            {
                name: "Oignons",
                amount: 4,
                unit: "p",
            },
            {
                name: "Câpres",
                amount: 10,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Trouer la pâte feuilletée", "Préparer les oignons et les trancher"],
        steps: ["Précuire la pâte au four", "Faire revenir les oignons avec curry et muscade", "Disposer les oignons sur la tarte", "Cuire la tarte"]
    },
    {
        name: "Salade césar",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Salade",
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Laver la salade", "Couper les tomates cerises en deux", "Préparer l'ail et l'écraser"],
        steps: ["Faire revenir le tofu à la poêle", "Remuer l'oeuf avec la mayonnaise, l'huile, le jus de citron et du poivre", "Remuer la salade avec les tomates, l'ail, le tofu et le mélange"],
    },
    {
        name: "Salade d'endive",
        category: Category.SALAD,
        ingredients: [
            {
                name: "Endive",
                amount: 4,
                unit: "p",
            },
            {
                name: "Pomme",
                amount: 2,
                unit: "p",
            },
            {
                name: "Concombre",
                amount: 1,
                unit: "p",
            },
            {
                name: "Tomate",
                amount: 2,
                unit: "p",
            },
            {
                name: "Carotte",
                amount: 1,
                unit: "g",
            },
            {
                name: "Comté",
                amount: 250,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Laver la salade", "Préparer et trancher les pommes, le concombre, les tomates, la carotte et le comté"],
        steps: ["Mélanger le tout"],
    },
    {
        name: "Risotto de coquillettes",
        category: Category.PASTA,
        ingredients: [
            {
                name: "Bouillon de légumes",
                amount: 100,
                unit: "cl",
            },
            {
                name: "Coquillettes",
                amount: 300,
                unit: "g",
            },
            {
                name: "Petits poids",
                amount: 300,
                unit: "g",
            },
            {
                name: "Fromage ail et fines herbes",
                amount: 200,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        steps: ["Mélanger coquillettes et petits pois dans une cocotte avec le bouillon", "Ajouter le fromage avec un peu d'huile au mélange", "Saler et poivrer"],
    },
    {
        name: "Risotto de shitakés",
        category: Category.RICE,
        ingredients: [
            {
                name: "Bouillon de légumes",
                amount: 100,
                unit: "cl",
            },
            {
                name: "Sauce soja",
                amount: 5,
                unit: "cl",
            },
            {
                name: "Riz",
                amount: 300,
                unit: "g",
            },
            {
                name: "Shitakés",
                amount: 20,
                unit: "p",
            },
            {
                name: "Ail",
                amount: 4,
                unit: "p",
            },
            {
                name: "Ciboulette",
                amount: 20,
                unit: "g",
            },
        ],
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer l'ail, les champignons et les trancher"],
        steps: ["Cuire l'ail dans une cocotte avec un peu d'huile", "Ajouter les champignons avec le bouillon", "Ajouter le riz avec la sauce soja et la ciboulette et réduire à feu doux", "Poivrer"],
    },
    {
        name: "Omelette à la pomme de terre",
        category: Category.OMELETTE,
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
        rapidity: Rapidity.MEDIUM,
        preparation: ["Préparer les pommes de terre et les trancher"],
        steps: ["Faire revenir les pommes de terre à la poêle et les épicer", "Remuer les oeufs avec la ciboulette", "Cuire le mélange à la poêle"],
    },
    {
        name: "Dahl de lentilles de corail",
        category: Category.DAHL,
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
        rapidity: Rapidity.LONG,
        preparation: ["Préparer l'oignon, l'ail, le gingembre et les trancher"],
        steps: ["Faire cuire l'oignon dans l'huile de coco", "Ajouter l'ail et le gingembre, épicer et mélanger", "Ajouter les lentilles de corail et mélanger", "Ajouter la pulpe de tomate avec de l'eau et mélanger", "Ajouter le lait de coco et mélanger", "Ajouter de la coriandre"],
    },
    {
        name: "Risotto",
        category: Category.RICE,
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
        rapidity: Rapidity.LONG,
        preparation: ["Préparer les champignons, l'oignon, l'ail et les trancher"],
        steps: ["Faire revenir l'ail et l'oignon à la poêle", "Ajouter les champignons à la poêle", "Ajouter le riz avec le vin blanc", "Ajouter régulièrement le bouillon jusqu'à épuisement", "Ajouter le parmesan"],
    },
    {
        name: "Paëlla",
        category: Category.RICE,
        ingredients: [
            {
                name: "Riz",
                amount: 500,
                unit: "g",
            },
            {
                name: "Poivron",
                amount: 2,
                unit: "p",
            },
            {
                name: "Petit pois",
                amount: 400,
                unit: "g",
            },
            {
                name: "Saucisse végé",
                amount: 4,
                unit: "p",
            },
            {
                name: "Safran",
                amount: 5,
                unit: "g",
            },
            {
                name: "Curcuma",
                amount: 10,
                unit: "g",
            },
            {
                name: "Bouillon",
                amount: 1,
                unit: "l",
            },
        ],
        rapidity: Rapidity.LONG,
        preparation: ["Préparer les poivrons et les trancher", "Trancher les saucisses"],
        steps: ["Mélanger poivrons, saucisses, petits pois avec le riz et les épices", "Ajouter le bouillon", "Enfourner une quanrantaine de minutes"],
    },
    {
        name: "Enchiladas",
        category: Category.GRATIN,
        ingredients: [
            {
                name: "Sauce tomate",
                amount: 350,
                unit: "g",
            },
            {
                name: "Haricot rouge",
                amount: 350,
                unit: "g",
            },
            {
                name: "Oignon rouge",
                amount: 2,
                unit: "p",
            },
            {
                name: "Pomme de terre",
                amount: 12,
                unit: "p",
            },
            {
                name: "Emmental",
                amount: 50,
                unit: "g",
            },
            {
                name: "Galette de blé",
                amount: 6,
                unit: "p",
            },
            {
                name: "Cumin",
                amount: 10,
                unit: "g",
            },
            {
                name: "Paprika",
                amount: 10,
                unit: "g",
            },
            {
                name: "Piment",
                amount: 10,
                unit: "g",
            },
            {
                name: "Guacamole",
                amount: 25,
                unit: "g",
            },
        ],
        rapidity: Rapidity.LONG,
        preparation: ["Préparer les oignons, les pommes de terre et les trancher"],
        steps: ["Pré-cuire les oignons avec les pommes de terre une trentaine de minutes au four avec un filet d'huile et les épices", "Répandre la sauce tomate dans un plat avec sel et poivre", "Répartir les oignons, pommes de terre et haricots dans les galettes avec un peu d'emmental", "Rouler et déposer les galettes dans le plat de sauce tomate", "Recouvrir les rouleaux d'emmental", "Enfourner une dizaine de minutes", "Ajouter du guacamole"],
    },
    {
        name: "Tagliatelles aux coques",
        category: Category.PASTA,
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
        rapidity: Rapidity.LONG,
        preparation: ["Préparer les coques", "Préparer l'oignon et le trancher"],
        steps: ["Faire bouillir l'eau avec l'oignon et le vin blanc", "Verser les coques dans l'eau", "Cuire les tagliatelles", "Mélanger les coques et les tagliatelles avec la crème"],
    },
]

export default recipes
