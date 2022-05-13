const shortenMonthName = (value) => {
    return value.length <= 4 ? value : `${value.slice(0, 3)}.`
}

export default {
    shortenMonthName,
}
