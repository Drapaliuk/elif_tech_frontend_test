export const BankIndicators = function(bankName = null, interestRate = null, maximumLoan = null, minimumDownPayment = null, loanTerm = null) {
    this.bankName = bankName
    this.interestRate = interestRate
    this.maximumLoan = maximumLoan
    this.minimumDownPayment = minimumDownPayment
    this.loanTerm = loanTerm
}

export const StatisticsByMonthAccurateValue = function(month, totalPayment, interestPayment, loanBalance, equity) {
    this.month = +(month).toFixed(2)
    this.totalPayment = +(totalPayment).toFixed(2)
    this.interestPayment = +(interestPayment).toFixed(2)
    this.loanBalance = +(loanBalance).toFixed(2)
    this.equity = +(equity).toFixed(2)
}

export const StatisticsByMonthRoundedValue = function(month, totalPayment, interestPayment, loanBalance, equity) {
    this.month = Math.round(month)
    this.totalPayment = Math.round(totalPayment)
    this.interestPayment = Math.round(interestPayment)
    this.loanBalance = Math.round(loanBalance)
    this.equity = Math.round(equity)
}