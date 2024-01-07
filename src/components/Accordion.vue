<script setup lang="ts">
import { ref } from "vue"

const props = defineProps<{
    title: string,
}>()

const isOpen = ref(false)
</script>

<template>
    <div class="accordion">
        <h3 :class="['title--3', 'accordion__title', { 'accordion__title--open': isOpen }]" @click="isOpen = !isOpen">{{props.title}}</h3>
        <div v-if="isOpen" class="accordion__body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.accordion {
    border-radius: 4px;
    overflow: hidden;

    & &__title {
        cursor: pointer;
        user-select: none;
        background: var(--background);
        padding: 16px 22px;
        margin-bottom: 0;

        &:hover {
            background: var(--cta);
        }

        &--open {
            background: var(--background-light);
        }
    }

    &__body {
        background: var(--background-light);
        padding: 16px 22px;
    }
}
</style>
