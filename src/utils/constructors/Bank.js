export const Bank = function(bankName = '', interestRate = '', maximumLoan = '', minimumDownPayment = '', loanTerm = '') {
        this.bankName = bankName
        this.interestRate = interestRate
        this.maximumLoan = maximumLoan
        this.minimumDownPayment = minimumDownPayment
        this.loanTerm = loanTerm
    }