<script setup>
import months from "../data/months"
import formatting from "../utils/formatting"
</script>

<template>
    <table class="table">
        <template v-if="mq.current === 'xs'">
            <ul>
                <li v-for="edible, index in currentMonthEdibles" :key="edible.name" :class="[ 'table__body__row', 'table__body__row--current', { 'table__body__row--bordered': index === currentMonthEdibles.length - 1 }]">
                    <div class="table__body__cell--head table__cell--highlight">{{edible.name}}</div>
                    <div>{{getEdiblePeriod(edible)}}</div>
                </li>
                <li v-for="edible in edibles.filter((f) => !f.months.includes(currentMonth))" :key="edible.name">
                    <div class="table__body__cell--head">{{edible.name}}</div>
                    <div>{{getEdiblePeriod(edible)}}</div>
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
                    <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :style="{ 'background': edible.months.includes(month) && edible.color }"></td>
                </tr>
                <tr v-for="edible in edibles.filter((f) => !f.months.includes(currentMonth))" :key="edible.name">
                    <th :colspan="edibleColSpan" scope="row" class="table__body__cell--head">{{edible.name}}</th>
                    <td v-for="month in months" :key="`${edible.name}_${getMonthName(month)}`" :style="{ 'background': edible.months.includes(month) && edible.color }"></td>
                </tr>
            </tbody>
        </template>
    </table>
</template>

<script>
export default {
    inject: ["mq"],
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
            return this.edibles.filter((e) => e.months.includes(this.currentMonth))
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
            return formatting.shortenMonthName(mapper[month], this.mq.current)
        },
        getEdiblePeriod(edible) {
            const start = [4, 8, 10].includes(edible.months[0]) ? "D'": "De "
            const from = this.getMonthName(edible.months[0])
            const to = this.getMonthName(edible.months[edible.months.length - 1])
            return `${start}${from} à ${to}`
        }
    },
}
</script>

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
    }
}
</style>
