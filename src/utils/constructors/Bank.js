export const BankIndicators = function(bankName = '', interestRate = 0, maximumLoan = 0, minimumDownPayment = 0, loanTerm = 0) {
        this.bankName = bankName
        this.interestRate = interestRate
        this.maximumLoan = maximumLoan
        this.minimumDownPayment = minimumDownPayment
        this.loanTerm = loanTerm
    }