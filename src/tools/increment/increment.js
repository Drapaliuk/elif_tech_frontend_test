import { isNumber, isValidIndicatorValue } from '../'

export const increment = (initialSum, step, max, funcForSaveValue) => () => {
    const incrementedSum = initialSum + step
    if(isNumber(incrementedSum) && incrementedSum >= max) return funcForSaveValue(max)

    const isValidValue = isValidIndicatorValue(incrementedSum, 0, max)
    if(isValidValue) return funcForSaveValue(incrementedSum)
}