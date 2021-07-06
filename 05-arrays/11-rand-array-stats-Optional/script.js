/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const getRandom = (max, min) => Math.floor(Math.random() * (max - min) + min);
const displayAllRandomsInTargets = (randomNumber, target) => {
    document.getElementById(target).innerHTML = randomNumber;
}
document.getElementById("run").addEventListener("click", function () {
    const allRandoms = [];

    for (let i = 1; i <= 10; i++) {
        const randomNumber = getRandom(100, 1)
        displayAllRandomsInTargets(randomNumber, 'n-' + i);
        allRandoms.push(randomNumber)
    }

    document.getElementById('min').innerHTML = Math.min(...allRandoms);
    document.getElementById('max').innerHTML = Math.max(...allRandoms);
    let sum = allRandoms.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('average').innerHTML = sum / allRandoms.length;
})

