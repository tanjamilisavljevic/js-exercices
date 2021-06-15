/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = function(operation) {
        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;
        let result;

        switch (operation) {
            case 'addition':
                result = parseInt(opOne) + parseInt(opTwo);
                break;
            case 'substraction':
                result = parseInt(opOne) - parseInt(opTwo);
                break;
            case 'multiplication':
                result = parseInt(opOne) * parseInt(opTwo);
                break;
            case 'division':
                result = parseInt(opOne) / parseInt(opTwo);
                break;
        }

        document.write(result);
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
