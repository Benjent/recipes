<template>
    <dl class="ingredient">
        <dt>{{ingredient.name}}</dt>
        <dd>&nbsp;({{ingredient.amount}}{{ingredient.unit !== "p" ? ingredient.unit : ""}})</dd>
    </dl>
</template>

<script>
export default {
    props: {
        ingredient: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.ingredient {
    display: flex;
}
</style>
