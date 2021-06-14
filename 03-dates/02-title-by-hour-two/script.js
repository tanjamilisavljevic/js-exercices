/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();

let d1730 = new Date(2021, 6, 14, 17, 30, 0, 0); // today 17:30:00:000
 let   currentDate = new Date(2021, 6, 14, 2, 0 );
 t1730 = d1730.getTime();
 currentTime = currentDate.getTime();

function checkHour() {
    if (t1730 > currentTime ) {
        document.getElementById('target').innerHTML = 'Hello';
    } else {
        document.getElementById('target').innerHTML = 'Good evening';
    }
}
checkHour()