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

    const random1 = getRandom(100);
    document.getElementById("n-1").innerHTML = random1;
    allRandoms.push('random1');
    const random2 = getRandom(100);
    document.getElementById("n-2").innerHTML = random2;
    allRandoms.push('random2');
    const random3 = getRandom(100);
    document.getElementById("n-3").innerHTML = random3;
    allRandoms.push('random3');
    const random4 = getRandom(100);
    document.getElementById("n-4").innerHTML = random4;
    allRandoms.push(parseInt('random4'));
    const random5 = getRandom(100);
    document.getElementById("n-5").innerHTML = random5;
    allRandoms.push('random5');
    const random6 = getRandom(100);
    document.getElementById("n-6").innerHTML = random6;
    allRandoms.push('random6');
    const random7 = getRandom(100);
    document.getElementById("n-7").innerHTML = random7;
    allRandoms.push('random7');
    const random8 = getRandom(100);
    document.getElementById("n-8").innerHTML = random8;
    allRandoms.push('random8');
    const random9 = getRandom(100);
    document.getElementById("n-9").innerHTML = random9;
    allRandoms.push('random9');
    const random10 = getRandom(100);
    document.getElementById("n-10").innerHTML = random10;
    allRandoms.push('random10');

document.getElementById('min').innerHTML = Math.min('allRandoms');



})



