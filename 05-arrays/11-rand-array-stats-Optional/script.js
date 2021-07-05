/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function getRandom(max) {
        return Math.floor(Math.random() * max);
    }

    document.getElementById("run").addEventListener("click", function () {
        document.getElementById("n-1").value = getRandom(100);
        document.getElementById("n-2").value = getRandom(100);
        document.getElementById("n-3").value = getRandom(100);
        document.getElementById("n-4").value = getRandom(100);
        document.getElementById("n-5").value = getRandom(100);
        document.getElementById("n-6").value = getRandom(100);
        document.getElementById("n-7").value = getRandom(100);
        document.getElementById("n-8").value = getRandom(100);
        document.getElementById("n-9").value = getRandom(100);
        document.getElementById("n-10").value = getRandom(100);
    })


})();
