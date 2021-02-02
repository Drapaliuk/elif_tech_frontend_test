import { isNumber, isValidIndicatorValue } from '../'

export const decrement = (initialSum, step, min, funcForSaveValue) => () => {
    const decrementedSum = initialSum - step
    if(isNumber(decrementedSum) && decrementedSum <= 0) return funcForSaveValue(0)

    const isValidValue = isValidIndicatorValue(decrementedSum, min)
    if(isValidValue) return funcForSaveValue(decrementedSum)
}

export const amountYearsCalculator = (value) => {
    if(value < 12) return {years: 0, months: value}
    const result = {
        years: +(value / 12).toFixed(),
        months: value % 12
    }
    return result
}