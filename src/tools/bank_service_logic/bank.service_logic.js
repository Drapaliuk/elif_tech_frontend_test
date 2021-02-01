const interestPaymentCalculator = (loanBalance, interestRate) => {
    const yearMonthAmount = 12
    return (loanBalance * (interestRate / 100)) / yearMonthAmount
}

const StatisticsByMonth = function(month, totalPayment, interestPayment, loanBalance, equity) {
    this.month =  Math.round(month)
    this.totalPayment =  Math.round(totalPayment)
    this.interestPayment =  Math.round(interestPayment)
    this.loanBalance =  Math.round(loanBalance)
    this.equity =  Math.round(equity)
}

export const mortgageCalculator = bankInfo => {
    console.log('CALCULATE', bankInfo)
    if(
        bankInfo.loanSum <= bankInfo.minimumDownPayment ||
        bankInfo.loanTerm === 0
        ) {
        return []
    }
    console.log('after if')
    const loanSum = bankInfo.loanSum;
    const minimumDownPayment = bankInfo.minimumDownPayment;
    const loanBalance = loanSum - minimumDownPayment;
    const loanTerm = bankInfo.loanTerm;
    const clearMonthlyPayment = loanBalance / loanTerm;
    const interestPaymentsByMonth = [];
    const equityByMonth = [];
    const loanBalanceByMonth = []
    let previousMonthLoanBalance = loanSum - minimumDownPayment;
    let equity = bankInfo.minimumDownPayment;
    const result = []

    for(let i = 0; i < loanTerm; i++) {
        interestPaymentsByMonth.push(interestPaymentCalculator(previousMonthLoanBalance, bankInfo.interestRate));
        previousMonthLoanBalance -= clearMonthlyPayment
        loanBalanceByMonth.push(previousMonthLoanBalance)
        equityByMonth.push(equity + clearMonthlyPayment)
        equity += clearMonthlyPayment
    }

    const interestPaymentSum = interestPaymentsByMonth.reduce((acc, el) => acc += el)
    const interestPaymentByMonth = interestPaymentSum / loanTerm
    for(let i = 0; i < loanTerm; i++) {
        result.push(new StatisticsByMonth((i + 1), (clearMonthlyPayment + interestPaymentByMonth), interestPaymentsByMonth[i], loanBalanceByMonth[i], equityByMonth[i]))
    }

    return result

}