/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];


    // const unique = fruits
    //     .map((fruit) => {
    //         return {
    //             count: 1,
    //             fruit: fruit
    //         }
    //     })
    //     .reduce((a, b) => {
    //         a[b.fruit] = (a[b.fruit] || 0) + b.count
    //         return a
    //     }, {})
    //
    // const duplicates = Object.keys(unique).filter((a) => unique[a] > 1)
    // console.log(duplicates)
    //
    // const fruitsWithoutDuplicates = fruits.splice( 0, fruits.length, "duplicates");
    // console.log(fruitsWithoutDuplicates)

    document.getElementById("run").addEventListener("click", function ()
    {

        let uniqueFruitsSet = new Set(fruits);
        let uniqueFruitsArray = Array.from(uniqueFruitsSet);
        console.log(uniqueFruitsArray);

    })
})();
