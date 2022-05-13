<script setup>
import Ingredient from "./Ingredient.vue"
</script>

<template>
    <div class="recipe">
        <div class="recipe__category">
            <div class="recipe__category__icon">⏱️</div>
            {{recipe.rapidity}}
        </div>
        <div class="recipe__category">
            <div class="recipe__category__icon">🧆</div>
            <ul class="recipe__ingredients">
                <li v-for="ingredient in recipe.ingredients" :key="ingredient" class="recipe__ingredients__item">
                    <Ingredient :ingredient="ingredient" />
                </li>
            </ul>
        </div>
        <div class="recipe__category">
            <div class="recipe__category__icon">🍲</div>
            <ol>
                <li v-for="step in recipe.steps" :key="step">{{step}}</li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Ingredient,
    },
    props: {
        recipe: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.recipe {
    &__category {
        display: flex;

        &:not(:first-child) {
            margin-top: 14px;
        }

        &__icon {
            margin-right: 12px;
        }
    }

    &__ingredients {
        display: flex;

        &__item {
            display: inline list-item;

            &:not(:first-child) {
                margin-left: 26px;
            }
        }
    }
}
</style>
