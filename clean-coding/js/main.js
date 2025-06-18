import { CURRENCY_DATA } from './constants.js';
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
        
        const sourceCurrencyName = CURRENCY_DATA[sourceCurrency].name;
        const targetCurrencyName = CURRENCY_DATA[targetCurrency].name;
        
        const resultText = `${amount.toFixed(2)} ${sourceCurrencyName} = ${convertedAmount.toFixed(2)} ${targetCurrencyName}`;
        updateElementText(resultDisplay, resultText);
    } catch (error) {
        updateElementText(resultDisplay, 'Error al convertir la moneda.');
        console.error('Fallo en la conversión:', error);
    }
}

function isInvalidInput(amount, source, target) {
    return isNaN(amount) || !source || !target;
}

function initializeApp() {
    populateSelectWithOptions(fromCurrencySelect, CURRENCY_DATA);
    populateSelectWithOptions(toCurrencySelect, CURRENCY_DATA);
    
    fromCurrencySelect.value = 'USD';
    toCurrencySelect.value = 'EUR';

    convertButton.addEventListener('click', handleConversion);
    
    handleConversion();
}

initializeApp();