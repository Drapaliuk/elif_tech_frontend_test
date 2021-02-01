import {instance} from '../configs/instance';

export const bankAPI = {
    create: infoAboutNewBank => instance.post('/bank', {infoAboutNewBank}),
    delete: bankId => instance.delete('/bank', {data: {bankId}}),
    update: (selectedBankId, newValue) => instance.put('/bank', {selectedBankId, newValue}),
    getBanks: () => instance.get('/bank'),
    updateBalance: newBalance => instance.put('/bank/balance', {newBalance})
}
