import { SUPPORTED_CURRENCIES } from './constants.js';
import { getExchangeRate, calculateConvertedAmount } from './sevices/currencyService.js';
import { getElement, populateSelectWithOptions, updateElementText } from './utils/domUtils.js';

const amountInput = getElement('#amount-input');
const fromCurrencySelect = getElement('#from-currency-select');
const toCurrencySelect = getElement('#to-currency-select');
const convertButton = getElement('#convert-button');
const resultDisplay = getElement('#result-display');

async function handleConversion() {
    const amount = parseFloat(amountInput.value);
    const sourceCurrency = fromCurrencySelect.value;
    const targetCurrency = toCurrencySelect.value;

    if (isInvalidInput(amount, sourceCurrency, targetCurrency)) {
        updateElementText(resultDisplay, 'Por favor, ingrese valores válidos.');
        return;
    }

    try {
        const exchangeRate = await getExchangeRate(sourceCurrency, targetCurrency);
        const convertedAmount = calculateConvertedAmount(amount, exchangeRate);
        const resultText = `${amount.toFixed(2)} ${sourceCurrency} = ${convertedAmount.toFixed(2)} ${targetCurrency}`;
        updateElementText(resultDisplay, resultText);
    } catch (error) {

        updateElementText(resultDisplay, 'Error al convertir la moneda.');
        console.error('Fallo en la conversión:', error);
    }
}

/**  Verifica si la entrada del usuario es inválida.
 * @param {number} amount - El monto ingresado.
 * @param {string} source - La moneda de origen.
 * @param {string} target - La moneda de destino.
 * @returns {boolean} True si la entrada es inválida.
 */
function isInvalidInput(amount, source, target) {
    return isNaN(amount) || !source || !target;
}

function initializeApp() {
    populateSelectWithOptions(fromCurrencySelect, SUPPORTED_CURRENCIES);
    populateSelectWithOptions(toCurrencySelect, SUPPORTED_CURRENCIES);
    
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';

    convertButton.addEventListener('click', handleConversion);
    
    handleConversion();
}

initializeApp();