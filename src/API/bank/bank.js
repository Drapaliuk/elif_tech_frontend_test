import {instance} from '../configs/instance';

export const bankAPI = {
    create: bankData => instance.post('/banks', bankData),
    delete: bankId => instance.delete('/banks', {bankId}),
    update: (selectedBankId, newValue) => instance.put('/banks', {selectedBankId, newValue}),
    getAvailableBanks: () => instance.get('/banks/available-banks'),
    getMyBanks: () => instance.get('/banks/my-banks')
}
