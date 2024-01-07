import { Edible } from "../types"
import { sortByName } from "../utils/array"

let vegetables: Edible[] = [
    {
        name: "Ail",
        months: [1, 2, 7, 8, 9, 10, 11, 12],
        color: "#f1e6b8",
    },
    {
        name: "Artichaut",
        months: [5, 6, 7, 8, 9, 10, 11],
        color: "#94824e",
    },
    {
        name: "Asperge",
        months: [3, 4, 5, 6],
        color: "#e1e2bc",
    },
    {
        name: "Aubergine",
        months: [6, 7, 8, 9, 10],
        color: "#342a39",
    },
    {
        name: "Betterave",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#851b41",
    },
    {
        name: "Blette",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#689445",
    },
    {
        name: "Brocoli",
        months: [6, 7, 8, 9, 10, 11, 12],
        color: "#3d6d36",
    },
    {
        name: "Carotte",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#ea9052",
    },
    {
        name: "Céleri",
        months: [1, 2, 3, 8, 10, 11, 12],
        color: "#cbd080",
    },
    {
        name: "Céleri-rave",
        months: [1, 2, 3, 12],
        color: "#e8d5a5",
    },
    {
        name: "Champignon",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#d0a07f",
    },
    {
        name: "Chou",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#d2db9f",
    },
    {
        name: "Chou-fleur",
        months: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
        color: "#e7e2c4",
    },
    {
        name: "Chou de Bruxelles",
        months: [1, 2, 3, 10, 11, 12],
        color: "#7e8f44",
    },
    {
        name: "Chou frisé",
        months: [1, 2, 3, 10, 11, 12],
        color: "#8cab36",
    },
    {
        name: "Chou rouge",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#5a1455",
    },
    {
        name: "Concombre",
        months: [6, 7, 8, 9, 10],
        color: "#d9ebae",
    },
    {
        name: "Courge",
        months: [1, 9, 10, 11, 12],
        color: "#efc151",
    },
    {
        name: "Courgette",
        months: [5, 6, 7, 8, 9, 10],
        color: "#3e661c",
    },
    {
        name: "Cresson",
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        color: "#dad6bc",
    },
    {
        name: "Crosne",
        months: [1, 12],
        color: "#dac4a1",
    },
    {
        name: "Échalote",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#d3c4c4",
    },
    {
        name: "Endive",
        months: [1, 2, 3, 4, 10, 11, 12],
        color: "#efe4ac",
    },
    {
        name: "Épinard",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#4f7b05",
    },
    {
        name: "Fenouil",
        months: [4, 5, 6, 7, 8, 9, 10],
        color: "#d4d89a",
    },
    {
        name: "Fève",
        months: [4, 5, 6, 7, 8],
        color: "#bcbd7f",
    },
    {
        name: "Frisée",
        months: [3, 4],
        color: "#66931f",
    },
    {
        name: "Haricot",
        months: [5, 6, 7, 8, 9, 10],
        color: "#a8b15c",
    },
    {
        name: "Laitue",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#a4da38",
    },
    {
        name: "Mâche",
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        color: "#55983a",
    },
    {
        name: "Maïs",
        months: [7, 8, 9],
        color: "#ecc861",
    },
    {
        name: "Navet",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#edece9",
    },
    {
        name: "Oignon",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#e6e7c7",
    },
    {
        name: "Panais",
        months: [1, 2, 3, 10, 11, 12],
        color: "#ecd7b9",
    },
    {
        name: "Patate douce",
        months: [1, 10, 11],
        color: "#ea8500",
    },
    {
        name: "Pâtisson",
        months: [7, 8, 9, 10],
        color: "#f2b550",
    },
    {
        name: "Poireau",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#869868",
    },
    {
        name: "Pois",
        months: [4, 5, 6, 7],
        color: "#7ab31c",
    },
    {
        name: "Pois chiche",
        months: [7, 8, 9, 10],
        color: "#e8c793",
    },
    {
        name: "Poivron",
        months: [7, 8, 9, 10],
        color: "#cc2f1c",
    },
    {
        name: "Pomme de terre",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#d5a955",
    },
    {
        name: "Potimarron",
        months: [1, 9, 10, 11, 12],
        color: "#c9512a",
    },
    {
        name: "Potiron",
        months: [1, 9, 10, 11, 12],
        color: "#e98430",
    },
    {
        name: "Radis",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#f1d4d9",
    },
    {
        name: "Radis noir",
        months: [1, 2, 10, 11, 12],
        color: "#635f6d",
    },
    {
        name: "Rutabaga",
        months: [1, 2],
        color: "#5b454d",
    },
    {
        name: "Salsifis",
        months: [1, 2, 3, 4, 11, 12],
        color: "#efd2a7",
    },
    {
        name: "Tomate",
        months: [6, 7, 8, 9, 10, 11],
        color: "#d84027",
    },
    {
        name: "Topinambour",
        months: [1, 2, 3, 11, 12],
        color: "#ebd9a6",
    },
]

vegetables = sortByName(vegetables)

export default vegetables
