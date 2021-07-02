/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function fillInfo() {

    const age = prompt("How old are you?");
    const gender = prompt("How do you identify?");
    const city = prompt("What city do you live in?");
    const newLine = "\n";

    const confirmed = confirm(age + newLine + gender + newLine + city);
    if (!confirmed) {
        fillInfo()
    }
}

fillInfo();


// function fillInfo() {
//     let age = prompt("How old are you?");
//     let gender = prompt("How do you identify?");
//     let city = prompt("Where do you live?");
//     let newLine = "\n"
//     let confirmed = confirm(age + newLine + gender + newLine + city);
//     if (!confirmed) {
//         fillInfo();
//     }
// }
//
// fillInfo()