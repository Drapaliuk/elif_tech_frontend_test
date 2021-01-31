
const interestPaymentCalculator = (loanBalance, interestRate) => {
    const yearMonthAmount = 12
    return (loanBalance * (interestRate / 100)) / yearMonthAmount
}

const StatisticsByMonth = function(month, totalPayment, interestPayment, loanBalance, equity) {
    this.month = month
    this.totalPayment = totalPayment
    this.interestPayment = interestPayment
    this.loanBalance = loanBalance
    this.equity = equity
}

const bankInfo = {
    fullSum: 65000,
    downPayment: 20000,
    loanTerm: 3,
    interestRate: 5
}



export const mortgageCalculator = (bankInfo) => {
    const fullSum = bankInfo.fullSum;
    const downPayment = bankInfo.downPayment;
    const loanBalance = fullSum - downPayment;
    const loanTerm = bankInfo.loanTerm;
    const clearMonthlyPayment = loanBalance / loanTerm;
    const interestPaymentsByMonth = [];
    const equityByMonth = [];
    const loanBalanceByMonth = []
    let previousMonthLoanBalance = fullSum - downPayment;
    let equity = bankInfo.downPayment;
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

}