export const numbersValidator = value => {
    const valueType = typeof value;
    console.log('valueType', valueType)
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
        const isValueNumber = numbersValidator(value)
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