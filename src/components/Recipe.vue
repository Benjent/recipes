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
        <div v-if="recipe.preparation.length > 0" class="recipe__category">
            <div class="recipe__category__icon">🔪</div>
            <ol  class="recipe__preparation">
                <li v-for="preparation in recipe.preparation" :key="preparation">{{preparation}}</li>
            </ol>
        </div>
        <div v-if="recipe.steps.length > 0" class="recipe__category">
            <div class="recipe__category__icon">🍲</div>
            <ol  class="recipe__steps">
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
@import '../assets/styles/basics/breakpoints.scss';

.recipe {
    &__category {
        display: flex;

        &:not(:first-child) {
            margin-top: 20px;
        }

        &__icon {
            margin-right: 12px;
        }
    }

    &__ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 0px 40px;
    }
}

@media (max-width: $sm) {
    .recipe {
        &__category {
            display: block;
            text-align: center;

            &__icon {
                margin-right: 0;
            }
        }

        &__preparation, &__steps {
            text-align: left;
        }
    }
}
</style>
