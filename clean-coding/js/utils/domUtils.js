/** Utilidades para manipular el DOM.
 * @param {string} selector - El selector CSS del elemento.
 * @returns {HTMLElement} El elemento del DOM encontrado.
 */
export function getElement(selector) {
    return document.querySelector(selector);
}

/** Crea un elemento HTML y lo agrega al DOM.
 * @param {HTMLSelectElement} selectElement - El elemento select a poblar.
 * @param {string[]} options - Un array de strings para las opciones.
 */
export function populateSelectWithOptions(selectElement, options) {
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        selectElement.appendChild(option);
    });
}

/** Actualiza el texto de un elemento HTML.
 * @param {HTMLElement} element - El elemento donde se mostrará el texto.
 * @param {string} text - El texto a mostrar.
 */
export function updateElementText(element, text) {
    element.textContent = text;
}