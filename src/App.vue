<script setup>
import fruits from "./data/fruits"
import recipes from "./data/recipes"
import vegetables from "./data/vegetables"
import Accordion from "./components/Accordion.vue"
import Recipe from "./components/Recipe.vue"
import Table from "./components/Table.vue"
</script>

<template>
    <main class="app">
        <h2 class="title--2">Fruits et légumes</h2>
        <section class="app__section">
            <Accordion title="Tableau des saisons">
                <div class="app__tables">
                    <Table :edibles="fruits" />
                    <Table :edibles="vegetables" />
                </div>
            </Accordion>
        </section>
        <h2 class="title--2">Recettes</h2>
        <section class="app__section">
            <ul>
                <li v-for="recipe in recipes" :key="recipe.name">
                    <Accordion :title="recipe.name">
                        <Recipe :recipe="recipe" />
                    </Accordion>
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
export default {
    components: {
        Accordion,
        Recipe,
        Table,
    },
}
</script>


<style lang="scss">
@import './assets/styles/basics/reset.scss';
@import './assets/styles/basics/colors.scss';
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
    }
}
</style>
