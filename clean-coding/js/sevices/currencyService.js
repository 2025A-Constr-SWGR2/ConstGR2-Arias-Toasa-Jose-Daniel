import { CURRENCY_DATA } from '../constants.js';

export async function getExchangeRate(baseCurrency, targetCurrency) {
    return new Promise(resolve => {

        const baseRate = CURRENCY_DATA[baseCurrency].rate;
        const targetRate = CURRENCY_DATA[targetCurrency].rate;

        const crossRate = targetRate / baseRate;

        setTimeout(() => resolve(crossRate), 200);
    });
}


export function calculateConvertedAmount(amount, rate) {
    return amount * rate;
}