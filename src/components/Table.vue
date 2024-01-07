<script setup lang="ts">
import { computed, inject } from "vue"
import { Edible, Month } from "../types"
import months from "../data/months"
import { shortenMonthName } from "../utils/formatting"

const mq = inject("mq")
const props = defineProps<{
    edibles: Edible[],
}>()

const currentMonth = new Date().getMonth() + 1 as Month
const edibleColSpan = 4

const currentMonthEdibles = computed(() => {
    return props.edibles.filter((e) => e.months.includes(currentMonth))
})

function getMonthName(month: Month) {
    const mapper = {
        1: "janvier",
        2: "février",
        3: "mars",
        4: "avril",
        5: "mai",
        6: "juin",
        7: "juillet",
        8: "août",
        9: "septembre",
        10: "octobre",
        11: "novembre",
        12: "décembre",
    }
    return shortenMonthName(mapper[month], mq.current)
}

function getEdiblePeriod(edible: Edible) {
    const start = [4, 8, 10].includes(edible.months[0]) ? "d'": "de "
    const from = getMonthName(edible.months[0])
    const to = getMonthName(edible.months[edible.months.length - 1])
    return `${start}${from} à ${to}`
}
</script>

<template>
    <table class="table">
        <template v-if="mq.current === 'xs'">
            <ul>
                <li v-for="edible, index in currentMonthEdibles" :key="edible.name" :class="[ 'table__body__row', 'table__body__row--current', { 'table__body__row--bordered': index === currentMonthEdibles.length - 1 }]">
                    <span class="table__body__cell--head table__cell--highlight">{{edible.name}}&nbsp;:&nbsp;</span>
                    <span>{{getEdiblePeriod(edible)}}</span>
                </li>
                <li v-for="edible in edibles.filter((f) => !f.months.includes(currentMonth))" :key="edible.name">
                    <span class="table__body__cell--head">{{edible.name}}&nbsp;:&nbsp;</span>
                    <span>{{getEdiblePeriod(edible)}}</span>
                </li>
            </ul>
        </template>
        <template v-else>
            <thead class="table__head">
                <td :colspan="edibleColSpan" class="table__head__cell"></td>
                <th scope="col" v-for="month in months" :key="getMonthName(month)" :class="{ 'table__head__cell': true, 'table__cell--highlight': month === currentMonth }">{{getMonthName(month)}}</th>
            </thead>
            <tbody class="table__body">
                <tr v-for="edible, index in currentMonthEdibles" :key="edible.name" :class="[ 'table__body__row', 'table__body__row--current', { 'table__body__row--bordered': index === currentMonthEdibles.length - 1 }]">
                    <th :colspan="edibleColSpan" scope="row" class="table__body__cell--head table__cell--highlight">{{edible.name}}</th>
                    <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :class="{ 'table__cell--highlight-border': month === currentMonth }" :style="{ 'background': edible.months.includes(month) && edible.color }"></td>
                </tr>
                <tr v-for="edible in edibles.filter((f) => !f.months.includes(currentMonth))" :key="edible.name">
                    <th :colspan="edibleColSpan" scope="row" class="table__body__cell--head">{{edible.name}}</th>
                    <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :class="{ 'table__cell--highlight-border': month === currentMonth }" :style="{ 'background': edible.months.includes(month) && edible.color }"></td>
                </tr>
            </tbody>
        </template>
    </table>
</template>

<style lang="scss">
.table {
    table-layout: fixed;

    &__head {
        text-transform: capitalize;
    }

    &__body {
        &__row {
            &--bordered {
                border-bottom: solid 1px var(--primary);
            }
        }

        &__cell {
            &--head {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;
            }
        }
    }

    &__cell {
        &--highlight {
            color: var(--primary);
        }

        &--highlight-border {
            border: solid 1px var(--primary);
        }
    }
}
</style>
