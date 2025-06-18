export function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * @param {HTMLSelectElement} selectElement 
 * @param {object} currencyData
 */
export function populateSelectWithOptions(selectElement, currencyData) {
    Object.keys(currencyData).forEach(currencyCode => {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyData[currencyCode].name;
        selectElement.appendChild(option);
    });
}

export function updateElementText(element, text) {
    element.textContent = text;
}