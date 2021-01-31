export const getSelectedBank = state => {
    const selectedBankId = state.banks.selectedBankId;
    return state.banks.banks.find(bank => bank._id === selectedBankId)
}