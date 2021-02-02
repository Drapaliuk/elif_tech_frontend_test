import { StatisticsByMonthAccurateValue, StatisticsByMonthRoundedValue } from '../'

const calculateMonthPayment = (loan, interestPayment, months) => {
    const interestRateByMonth = (interestPayment / 100) / 12
    const numerator = loan * interestRateByMonth * (Math.pow((1 + interestRateByMonth), months))
    const denominator = (Math.pow((1 + interestRateByMonth), months)) - 1
    return +(numerator / denominator).toFixed(2)
}  

const calculateInterestPayment = (loan, interestPayment) => {
    const interestRateByMonth = (interestPayment / 100) / 12
    return loan * interestRateByMonth
}

const calculateCleanMonthPayment = (fullLoan, loanTerm) => fullLoan / loanTerm

export const mortgageCalculator = (bankInfo, subtractDownPayment, roundCalculatedNumbers) => {
    const isValidLoanSum = subtractDownPayment && bankInfo.loanSum <= bankInfo.minimumDownPayment;
    const isValidLoanTerm = bankInfo.loanTerm === 0;

    if(isValidLoanSum || isValidLoanTerm) return []

    let loanSubtractedDownPayment;
    let equity;
    if(subtractDownPayment) {
        loanSubtractedDownPayment = bankInfo.loanSum - bankInfo.minimumDownPayment
        equity = bankInfo.minimumDownPayment
    } else {
        loanSubtractedDownPayment = bankInfo.loanSum 
        equity = 0

    }

    const monthPayment = calculateMonthPayment(loanSubtractedDownPayment, bankInfo.interestRate, bankInfo.loanTerm) // 125.17
    const cleanMonthPayment = calculateCleanMonthPayment(loanSubtractedDownPayment, bankInfo.loanTerm)
    let loanBalanceDraft = loanSubtractedDownPayment

    const result = [];

    for(let i = 0; i < bankInfo.loanTerm; i++) {
        const currentInterestPayment = calculateInterestPayment(loanBalanceDraft, bankInfo.interestRate);
        loanBalanceDraft -= cleanMonthPayment
        equity += cleanMonthPayment
        if(roundCalculatedNumbers) {
            result.push(new StatisticsByMonthRoundedValue((i + 1), monthPayment, currentInterestPayment, loanBalanceDraft, equity))
        } else {
            result.push(new StatisticsByMonthAccurateValue((i + 1), monthPayment, currentInterestPayment, loanBalanceDraft, equity))
        }
    }
    return result
}