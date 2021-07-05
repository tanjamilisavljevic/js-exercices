/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function getRandom(max) {
    return Math.floor(Math.random() * max);
}

document.getElementById("run").addEventListener("click", function () {
    allRandoms = new Array();

    document.getElementById('n-1').innerHTML = getRandom(100);
    document.getElementById('n-2').innerHTML = getRandom(100);
    document.getElementById('n-3').innerHTML = getRandom(100);
    document.getElementById('n-4').innerHTML = getRandom(100);
    document.getElementById('n-5').innerHTML = getRandom(100);
    document.getElementById('n-6').innerHTML = getRandom(100);
    document.getElementById('n-7').innerHTML = getRandom(100);
    document.getElementById('n-8').innerHTML = getRandom(100);
    document.getElementById('n-9').innerHTML = getRandom(100);
    document.getElementById('n-10').innerHTML = getRandom(100);

    //TODO: push all random numbers to an array
    //get a minimum
    //get a maxiumum
    //get the sum
    //get the average

})



