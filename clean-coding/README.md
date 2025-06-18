# Aplicativo de Conversión de Moneda - Demostración de Clean Code

Este es un pequeño aplicativo web diseñado para convertir valores entre diferentes monedas. Su propósito principal es servir como un ejemplo práctico de cómo aplicar los principios de **Clean Code** detallados en la guía de `clean-code-javascript` y la presentación sobre `Clean Coding`.

## Estructura de Archivos

El proyecto está organizado para promover la **separación de responsabilidades**:

-   `index.html`: La capa de presentación (la vista).
-   `js/constants.js`: Almacena valores constantes para evitar "números mágicos" y strings repetidos.
-   `js/services/currencyService.js`: Contiene la lógica de negocio pura (cálculos, obtención de datos).
-   `js/utils/domUtils.js`: Encapsula toda la interacción con el DOM, manteniendo esa responsabilidad aislada.
-   `js/main.js`: Orquesta la aplicación, conectando la interfaz de usuario con la lógica de negocio.

## Principios de Clean Code Aplicados

A continuación se detallan los conceptos aplicados y en qué archivos se pueden observar.

### 1. Variables

-   [cite_start]**Nombres significativos y pronunciables**:  En todo el proyecto, especialmente en `main.js`, se usan nombres como `amountInput`, `sourceCurrency` y `exchangeRate` en lugar de `amt`, `sc` o `r`.
-   [cite_start]**Utilizar nombres buscables (sin "números mágicos")**:  En `js/constants.js`, las tasas de cambio y las monedas soportadas están en constantes exportables (`EXCHANGE_RATES_MOCK`, `SUPPORTED_CURRENCIES`) en lugar de estar "hardcodeadas" en la lógica.
-   [cite_start]**Evitar el mapeo mental**:  Las variables se nombran de forma explícita. Por ejemplo, en un bucle `forEach`, el parámetro se llamaría `currency` en lugar de una sola letra como `c`.

### 2. Funciones

-   [cite_start]**Una sola responsabilidad (SRP)**:  Este es uno de los principios más importantes aplicados.
    -   [cite_start]`currencyService.js`: Su única responsabilidad es gestionar la lógica de las tasas de cambio. 
    -   `domUtils.js`: Solo se encarga de manipular el DOM.
    -   `main.js`: Solo orquesta el flujo de la aplicación.
-   [cite_start]**Argumentos de función (2 o menos)**:  La mayoría de las funciones como `calculateConvertedAmount` o `updateElementText` tienen pocos argumentos.
-   [cite_start]**Nombres de funciones que explican lo que hacen**:  Funciones como `populateSelectWithOptions` o `isInvalidInput` describen claramente su propósito.
-   [cite_start]**Evitar efectos secundarios**:  Funciones como `calculateConvertedAmount` son "puras": toman entradas y devuelven una salida sin modificar estados externos.
-   [cite_start]**Encapsular condicionales**:  La lógica de validación en `handleConversion` se extrajo a su propia función `isInvalidInput` para hacer el flujo principal más legible.

### 3. Comentarios

-   [cite_start]**Comentar solo lógica compleja (el "porqué", no el "cómo")**:  En `currencyService.js`, hay un comentario que explica *por qué* se calcula una tasa cruzada, una pieza de lógica de negocio específica de nuestro mock. El resto del código es auto-explicativo y carece de comentarios innecesarios.
-   [cite_start]**No dejar código inutilizado**:  El proyecto no contiene líneas de código comentadas.

### 4. SOLID

-   **Principio de Responsabilidad Única (SRP)**: Ya descrito en la sección de Funciones. [cite_start]Es la base de la estructura de archivos del proyecto. 
-   [cite_start]**Principio de Inversión de Dependencias (DIP)**:  El módulo de alto nivel (`main.js`) no depende de los detalles de implementación de los módulos de bajo nivel. `main.js` solo sabe que `currencyService` puede obtener una tasa (`getExchangeRate`), pero no le importa si los datos vienen de un mock, una API REST o localStorage. Si quisiéramos cambiar la fuente de datos, solo modificaríamos `currencyService.js` sin afectar a `main.js`.

### 5. Otros Principios Clave

-   [cite_start]**No Repetir Código (DRY)**:  La función `populateSelectWithOptions` en `domUtils.js` se creó para no repetir la lógica de rellenar los dos menús desplegables de monedas.
-   [cite_start]**Organización del código**:  Las funciones relacionadas están agrupadas en módulos coherentes, como se ve en la estructura de archivos.
-   [cite_start]**Manejo de concurrencia con Promesas y Async/Await**:  Para simular una llamada a una API, `getExchangeRate` devuelve una Promesa y se consume en `main.js` con `async/await`, que es la forma más limpia y moderna de manejar la asincronía en JavaScript.
-   [cite_start]**Manejo de errores**:  El bloque `try...catch` en `main.js` gestiona posibles fallos en la obtención de datos, informando al usuario y registrando el error en la consola, en lugar de ignorarlo.