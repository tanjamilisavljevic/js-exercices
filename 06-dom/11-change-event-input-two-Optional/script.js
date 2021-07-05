/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    const hasTwoNumbers = /\d\d/;

    const inputElement = document.getElementById("pass-one");

    inputElement.addEventListener('input', (event) => {

        const input = event.target.value;

        if (input.length >= 8 && hasTwoNumbers.test(input)===true) {
            document.getElementById('validity').innerHTML = 'OK';
        }
        else {
        }
    }
    )

})();



