<script setup>
import months from "../data/months"
import formatting from "../utils/formatting"
import sorting from "../utils/sorting"
</script>

<template>
    <table class="table">
        <thead class="table__head">
            <td :colspan="edibleColSpan" class="table__head__cell"></td>
            <th scope="col" v-for="month in months" :key="getMonthName(month)" :class="{ 'table__head__cell': true, 'table__head__cell--highlight': month === this.currentMonth }">{{getMonthName(month)}}</th>
        </thead>
        <tbody class="table__body">
            <tr v-for="edible, index in currentMonthEdibles" :key="edible.name" :class="[ 'table__body__row', 'table__body__row--current', { 'table__body__row--bordered': index === currentMonthEdibles.length - 1 }]">
                <th :colspan="edibleColSpan" scope="row" class="table__body__cell--head">{{edible.name}}</th>
                <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :style="{ 'background': edible.months.includes(month) && edible.color }">
                    <img v-if="edible.months.includes(month) && edible.image" :src="edible.image"/>
                </td>
            </tr>
            <tr v-for="edible in edibles.filter((f) => !f.months.includes(this.currentMonth))" :key="edible.name">
                <th :colspan="edibleColSpan" scope="row" class="table__body__cell--head">{{edible.name}}</th>
                <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :style="{ 'background': edible.months.includes(month) && edible.color }">
                    <img v-if="edible.months.includes(month) && edible.image" :src="edible.image"/>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        edibles: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentMonth: new Date().getMonth() + 1,
            edibleColSpan: 4,
        }
    },
    computed: {
        currentMonthEdibles() {
            return sorting.sortByName(this.edibles.filter((e) => e.months.includes(this.currentMonth)))
        },
    },
    methods: {
        getMonthName(month) {
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
            return formatting.shortenMonthName(mapper[month])
        },
    },
}
</script>

<style lang="scss">
.table {
    table-layout: fixed;
    text-transform: capitalize;

    &__head {
        &__cell {
            &--highlight {
                color: var(--primary);
                font-weight: bold;
            }
        }
    }

    &__body {
        &__row {
            &--bordered {
                border-bottom: solid 1px var(--text);
            }
        }
        &__cell {
            &--head {
                text-align: left;
            }
        }
    }
}
</style>
