<script setup lang="ts">
import { inject, onBeforeMount, ref } from "vue"
import { Category } from "./types"
import { getRandomNumbers } from "./utils/array"
import categoryEmoji from "./assets/emojis/category"
import appetizers from "./data/appetizers"
import desserts from "./data/desserts"
import fruits from "./data/fruits"
import juices from "./data/juices"
import recipes from "./data/recipes"
import vegetables from "./data/vegetables"
import Accordion from "./components/Accordion.vue"
import Recipe from "./components/Recipe.vue"
import Table from "./components/Table.vue"

const mq = inject("mq")

const categories = Object.entries(Category).filter((category) => ![Category.CANAPE, Category.SNACK, Category.SPREAD].includes(category[1]))

const weeklyPlanning = ref([])
const groceries = ref([])

const generateWeeklyPlanning = () => {
    const DAYS_TO_COOK_FOR = 4
    weeklyPlanning.value = []
    groceries.value = []
    const randomIndexes = getRandomNumbers(recipes.length).slice(0, DAYS_TO_COOK_FOR)
    weeklyPlanning.value = randomIndexes.map((i) => recipes[i])
    groceries.value = weeklyPlanning.value.reduce((accumulator, current) => {
        return [...accumulator, ...current.ingredients]
    }, [])
}

onBeforeMount(() => generateWeeklyPlanning())
</script>

<template>
    <main class="app">
        <h2 class="title--2">Planning</h2>
        <section class="app__section">
            <Accordion title="Pour la semaine">
                
                <h3 class="title--3 app__section__header">
                    Recettes
                    <button class="button" @click="generateWeeklyPlanning">Regénérer le planning</button>
                </h3>
                <ul class="app__item">
                    <li v-for="recipe in weeklyPlanning" :key="recipe.name">
                        {{ recipe.name }}
                    </li>
                </ul>
                <h3 class="title--3">Courses</h3>
                <ul>
                    <li v-for="ingredient in groceries" :key="ingredient.name">
                        {{ ingredient.name }} ({{ ingredient.amount }}{{ ingredient.unit }})
                    </li>
                </ul>
            </Accordion>
        </section>

        <h2 class="title--2">Fruits et légumes</h2>
        <section class="app__section">
            <Accordion title="Tableau des saisons">
                <div class="app__tables">
                    <h4 v-if="mq.current !== 'lg'" class="app__tables__title title--4">Fruits</h4>
                    <Table :edibles="fruits" />
                    <h4 v-if="mq.current !== 'lg'" class="app__tables__title title--4">Légumes</h4>
                    <Table :edibles="vegetables" />
                </div>
            </Accordion>
        </section>

        <h2 class="title--2">Recettes</h2>
        <section class="app__section">
            <div v-for="category in categories" :key="category[0]" class="app__category">
                <h3 class="title title--3">{{categoryEmoji[category[1]]}} {{category[1]}}</h3>
                <ul>
                    <li v-for="recipe in recipes.filter((r) => r.category === category[1])" :key="recipe.name">
                        <Accordion :title="recipe.name">
                            <Recipe :recipe="recipe" />
                        </Accordion>
                    </li>
                </ul>
            </div>
        </section>

        <h2 class="title--2">Apéro</h2>
        <section class="app__section">
            <ul>
                <li v-for="appetizer in appetizers" :key="appetizer.name">
                    <Accordion :title="appetizer.name">
                        <Recipe :recipe="appetizer" />
                    </Accordion>
                </li>
            </ul>
        </section>

        <h2 class="title--2">Dessert</h2>
        <section class="app__section">
            <ul>
                <li v-for="dessert in desserts" :key="dessert.name">
                    <Accordion :title="dessert.name">
                        <Recipe :recipe="dessert" />
                    </Accordion>
                </li>
            </ul>
        </section>

        <h2 class="title--2">Jus</h2>
        <section class="app__section">
            <ul>
                <li v-for="juice in juices" :key="juice.ingredients.join('_')">
                    <h3 class="title--3">{{juice.ingredients.join(', ')}}</h3>
                </li>
            </ul>
        </section>
    </main>
</template>

<style lang="scss">
@import './assets/styles/basics/reset.scss';
@import './assets/styles/basics/breakpoints.scss';
@import './assets/styles/basics/colors.scss';
@import './assets/styles/modules/button.scss';
@import './assets/styles/modules/title.scss';

body {
    min-height: 100vh;
    color: var(--text);
    background: var(--background);
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    &__tables {
        display: flex;

        .table {
            width: 100%;
            margin: 0 20px;
        }
    }

    &__section {
        padding: 0 2rem;
        margin-bottom: 60px;

        &--columnar {
            column-count: 2;
            column-gap: 10px;

            .app__category {
                display: inline-block;
                width: 100%;
            }
        }

        &__header {
            display: flex;
            gap: 1rem;
            align-items: center;
        }
    }

    &__item {
        margin-bottom: 20px;
    }

    &__category {
        margin-bottom: 40px;

        .title {
            padding-bottom: 16px;
            border-bottom: solid 1px var(--background-ultralight);
            border-radius: 10%;
        }
    }
}

@media (max-width: $md) {
    .app {
        &__tables {
            display: block;

            &__title {
                &:not(:first-child) {
                    margin-top: 20px;
                }
            }

            .table {
                margin: 0;
            }
        }

        &__section {
            &--columnar {
                column-count: 1;
            }
        }
    }
}

@media (max-width: $sm) {
    .app {
        padding: 1rem;

        &__section {
            padding: 0;
        }
    }
}
</style>
