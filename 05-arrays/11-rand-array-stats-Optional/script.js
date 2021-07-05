/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}



document.getElementById("run").addEventListener("click", function () {
    allRandoms = new Array();

    const n1 = getRandom(100, 1);
    allRandoms.push(n1.valueOf());
    document.getElementById('n-1').innerHTML = n1;
    const n2 = getRandom(100, 1);
    allRandoms.push(n2);
    document.getElementById('n-2').innerHTML = n2;
    const n3 = getRandom(100, 1);
    allRandoms.push(n3);
    document.getElementById('n-3').innerHTML = n3;
    const n4 = getRandom(100, 1);
    allRandoms.push(n4);
    document.getElementById('n-4').innerHTML = n4;
    const n5 = getRandom(100, 1);
    allRandoms.push(n5);
    document.getElementById('n-5').innerHTML = n5;
    const n6 = getRandom(100, 1);
    allRandoms.push(n6);
    document.getElementById('n-6').innerHTML = n6;
    const n7 = getRandom(100, 1);
    allRandoms.push(n7);
    document.getElementById('n-7').innerHTML = n7;
    const n8 = getRandom(100, 1);
    allRandoms.push(n8);
    document.getElementById('n-8').innerHTML = n8;
    const n9 = getRandom(100, 1);
    allRandoms.push(n9);
    document.getElementById('n-9').innerHTML = n9;
    const n10 = getRandom(100, 1);
    allRandoms.push(n10);
    document.getElementById('n-10').innerHTML = n10;


    document.getElementById('min').innerHTML = Math.min('allRandoms');
})




//get a minimum
//get a maximum
//get the sum
//get the average