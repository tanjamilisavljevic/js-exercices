/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let Me;
    Me = new Object;
    // Me = {}
    Me['last-name'] ='Milisavljevic';
    Me['first-name'] = 'Tanja';
    Me['age'] = 26;
    Me ['city'] = 'Belgrade';
    Me ['country'] = 'Serbia';

    document.getElementById('run').addEventListener('click', function (){
        console.log(Me);
    })
})();
