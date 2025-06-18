import { EXCHANGE_RATES_MOCK } from '../constants.js';

/** Obtiene la tasa de cambio entre dos monedas.
 * @param {string} baseCurrency - La moneda base para la conversión.
 * @param {string} targetCurrency - La moneda objetivo para la conversión.
 * @returns {Promise<number>} - La tasa de cambio entre la moneda base y la moneda objetivo.
 */
export async function getExchangeRate(baseCurrency, targetCurrency) {
    return new Promise(resolve => {
        const baseRate = EXCHANGE_RATES_MOCK[baseCurrency];
        const targetRate = EXCHANGE_RATES_MOCK[targetCurrency];

        // Como nuestro mock tiene todas las tasas basadas en USD, calculamos la tasa cruzada.
        const crossRate = targetRate / baseRate;

        setTimeout(() => resolve(crossRate), 200);
    });
}

/**
 * Calcula el monto convertido.
 * @param {number} amount - El monto a convertir.
 * @param {number} rate - La tasa de cambio.
 * @returns {number} El monto ya convertido.
 */
export function calculateConvertedAmount(amount, rate) {
    return amount * rate;
}