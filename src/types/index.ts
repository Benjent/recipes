export enum Rapidity {
    FAST = "Rapide",
    MEDIUM = "Moyen",
    LONG = "Long",
}

export enum Category {
    BURGER = "Burger",
    CAKE = "Gâteau",
    CANAPE = "Canapé",
    DAHL = "Dahl",
    DESSERT = "Dessert",
    GALETTE = "Galette",
    GRATIN = "Gratin",
    OMELETTE = "Omelette",
    PASTA = "Pâtes",
    PIE = "Tarte",
    PIZZA = "Pizza",
    RICE = "Riz",
    SALAD = "Salade",
    SNACK = "Snack",
    SPREAD = "Tartinade",
    STUFFED = "Légume farcis",
    TABBOULEH = "Taboulé",
    VEGETABLE = "Légume",
    WRAP = "Wrap",
}

export type Breakpoint = "xs" | "sm" | "md" | "lg"

export type Unit = "p" | "g" | "kg" | "cl"

export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type HexColor = `#${string}`

export type Edible = {
    name: string,
    months: Month[],
    color: HexColor,
}

export type Ingredient = {
    name: Edible["name"],
    amount: number,
    unit: Unit,
}

export type Recipe = {
    name: string,
    category: Category,
    ingredients: Ingredient[],
    rapidity: Rapidity,
    preparation?: string[],
    steps?: string[],
}

