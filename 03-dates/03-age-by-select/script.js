/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

})();

function getAge() {
    const today = new Date(2021, 7, 1, 11);
    let birthDate = new Date(document.getElementById("dob-year").value,document.getElementById("dob-month").value, document.getElementById("dob-day").value);
    let age = today.getFullYear() - birthDate.getFullYear();
    console.log(age);
    const month = today.getMonth() - birthDate.getMonth();
    console.log(month);
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

document.getElementById("run").onclick = () => {
    let age = getAge();
    alert(age)
}




// function getAge() {
//     let today = new Date(2021, 6, 14, 12);
//     let birthDate = new Date(document.getElementById('dob-year').value, document.getElementById('dob-month').value,document.getElementById('dob-day').value);
//     let age = today.getFullYear() - birthDate.getFullYear();
//     let months = today.getMonth() - birthDate.getMonth();
//     if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }
//     return age;
// }
//
// document.getElementById('run').onclick = () => {
//     let age = getAge();
//   document.write(age);
// }
