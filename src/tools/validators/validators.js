export const isNumber = value => {
    const valueType = typeof value;
    if(valueType !== 'number' && valueType !== 'string') return false 
    
    const valueToNumber = Number(value);
    const isNumber = typeof valueToNumber === 'number';
    const isNaN = Number.isNaN(valueToNumber);

    if(!isNaN && isNumber ) return true
    return false
}

export const maxSumValidator = (value, max) => value <= max ? true : false
export const minSumValidator = (value, min) => value >= min ? true : false

export const isValidIndicatorValue = (value, min = 0, max = Infinity) => {
        const isValueNumber = isNumber(value)
        if(isValueNumber) {
            const valueToNumber = Number(value)
            const isValidValueAmount = maxSumValidator(valueToNumber, max) &&
                                       minSumValidator(valueToNumber, min)
            if(isValidValueAmount) return true
        }
        
        return false
}

export const required = value => {
    return value ? undefined : {name: 'Required', message: 'This field is required!'}
};
export const minLength = value => {
    return
    // return  value && value.length < 10 ? {name: 'Too short', message: 'Must be 10 characters or more'} : undefined
}

export const onlyNumbers = value => isNumber(value) ? undefined : {name: 'Require numbers', message: 'Require only numbers!'}


export const objectsValidator = (targetObject, callback) => {
    const result = []
    for(let key in targetObject) {
        const validationResult = callback(key, targetObject[key])
        if(validationResult) {
            result.push(validationResult)
        }
    }
    return result
}