import { Breakpoint } from "../types"

export function shortenMonthName(value: string, mq: Breakpoint) {
    const mapper = {
        xs: 10,
        sm: 1,
        md: 4,
        lg: 4,
    }
    if (mq === 'sm') {
        return value.slice(0, 1)
    }
    return value.length <= mapper[mq] ? value : `${value.slice(0, 3)}.`
}
