<script setup lang="ts">
import { Ingredient } from '../types'

const props = defineProps<{
    ingredient: Ingredient,
}>()
</script>

<template>
    <dl class="ingredient">
        <dt>{{props.ingredient.name}}</dt>
        <dd>&nbsp;({{props.ingredient.amount}}{{props.ingredient.unit !== "p" ? props.ingredient.unit : ""}})</dd>
    </dl>
</template>

<style lang="scss">
.ingredient {
    display: ruby;
}
</style>
