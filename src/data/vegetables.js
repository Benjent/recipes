import sorting from "../utils/sorting"

let vegetables = [
    {
        name: "Artichaut",
        months: [5, 6, 7, 8, 9],
        color: "#94824e",
    },
    {
        name: "Asperge",
        months: [4, 5, 6],
        color: "#e1e2bc",
    },
    {
        name: "Aubergine",
        months: [6, 7, 8, 9],
        color: "#342a39",
    },
    {
        name: "Haricot",
        months: [7, 8, 9, 10],
        color: "#a8b15c",
    },
    {
        name: "Betterave",
        months: [1, 2, 3, 10, 11, 12],
        color: "#851b41",
    },
    {
        name: "Brocoli",
        months: [9, 10, 11],
        color: "#3d6d36",
    },
    {
        name: "Chou",
        months: [1, 2, 3, 10, 11, 12],
        color: "#d2db9f",
    },
    {
        name: "Carotte",
        months: [1, 2, 3, 9, 10, 11, 12],
        color: "#ea9052",
    },
    {
        name: "Chou-fleur",
        months: [1, 2, 3, 9, 10, 11, 12],
        color: "#e7e2c4",
    },
    {
        name: "Céleri",
        months: [1, 2, 3, 10, 11, 12],
        color: "#cbd080",
    },
    {
        name: "Blette",
        months: [6, 7, 8, 9, 10],
        color: "#689445",
    },
    {
        name: "Endive",
        months: [1, 2, 3, 4, 10, 11, 12],
        color: "#efe4ac",
    },
    {
        name: "Pois chiche",
        months: [7, 8, 9, 10],
        color: "#e8c793",
    },
    {
        name: "Maïs",
        months: [7, 8, 9],
        color: "#ecc861",
    },
    {
        name: "Courgette",
        months: [5, 6, 7, 8, 9, 10],
        color: "#3e661c",
    },
    {
        name: "Concombre",
        months: [5, 6, 7, 8, 9, 10],
        color: "#d9ebae",
    },
    {
        name: "Fenouil",
        months: [4],
        color: "#d4d89a",
    },
    {
        name: "Ail",
        months: [7, 8, 9, 10, 11, 12],
        color: "#f1e6b8",
    },
    {
        name: "Taupinambour",
        months: [1, 2, 11, 12],
        color: "#ebd9a6",
    },
    {
        name: "Mâche",
        months: [1, 2, 10, 11, 12],
        color: "#55983a",
    },
    {
        name: "Poireau",
        months: [1, 2, 3, 4, 9, 10, 11, 12],
        color: "#869868",
    },
    {
        name: "Laitue",
        months: [4, 5, 6, 7, 8, 9],
        color: "#a4da38",
    },
    {
        name: "Courge",
        months: [1, 9, 10, 11, 12],
        color: "#efc151",
    },
    {
        name: "Champignon",
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        color: "#d0a07f",
    },
    {
        name: "Oignon",
        months: [1, 2, 3, 4, 9, 10, 11, 12],
        color: "#e6e7c7",
    },
    {
        name: "Panais",
        months: [1, 2, 3, 10, 11, 12],
        color: "#ecd7b9",
    },
    {
        name: "Pois",
        months: [5, 6, 7],
        color: "#7ab31c",
    },
    {
        name: "Poivron",
        months: [6, 7, 8, 9],
        color: "#cc2f1c",
    },
    {
        name: "Potiron",
        months: [1, 11, 12],
        color: "#e98430",
    },
    {
        name: "Radis",
        months: [3, 4, 5, 6],
        color: "#f1d4d9",
    },
    {
        name: "Salsifis",
        months: [1, 2, 11, 12],
        color: "#efd2a7",
    },
    {
        name: "Échalotte",
        months: [10, 11, 12],
        color: "#d3c4c4",
    },
    {
        name: "Épinard",
        months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
        color: "#4f7b05",
    },
    {
        name: "Chou de Bruxelles",
        months: [1, 2, 3, 10, 11, 12],
        color: "#7e8f44",
    },
    {
        name: "Tomate",
        months: [6, 7, 8, 9],
        color: "#d84027",
    },
    {
        name: "Navet",
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        color: "#edece9",
    },
    {
        name: "Cresson",
        months: [1, 2, 3, 4, 5, 10, 11, 12],
        color: "#dad6bc",
    },
]

vegetables = sorting.sortByName(vegetables)

export default vegetables
