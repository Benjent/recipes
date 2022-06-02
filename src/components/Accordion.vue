<template>
    <div class="accordion">
        <h3 :class="['title--3', 'accordion__title', { 'accordion__title--open': isOpen }]" @click="isOpen = !isOpen">{{title}}</h3>
        <div v-if="isOpen" class="accordion__body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>

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
