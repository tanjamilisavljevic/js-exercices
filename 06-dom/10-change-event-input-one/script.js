/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    const inputElement = document.querySelector('#pass-one');

    inputElement.addEventListener('input', (event) => {
        const counter = document.querySelector('#counter');
        const input = event.target;
        if (input.value.length>10) {
        input.value = input.value.slice(0,10);
        }
        counter.textContent = `${input.value.length}/10`;

    });



})();
