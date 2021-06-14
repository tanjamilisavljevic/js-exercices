/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;
        let addition = parseInt(opOne) + parseInt(opTwo);
        document.write(addition);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;
        let subtraction = parseInt(opOne) - parseInt(opTwo);
        document.write(subtraction);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;
        let multiplication = parseInt(opOne) * parseInt(opTwo);
        document.write(multiplication);
    });

    document.getElementById("division").addEventListener("click", function() {
        const opOne = document.getElementById("op-one").value;
        const opTwo = document.getElementById("op-two").value;
        let division = parseInt(opOne) / parseInt(opTwo);
        document.write(division);
    });
})();
