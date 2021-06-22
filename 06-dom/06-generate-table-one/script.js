/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function addTable() {

        let myTable;
        myTable = document.createElement('table');
        for (let i = 0; i < 10; i++) {
            let myRow = myTable.insertRow(i);
            myRow.insertCell()
        }

        document.getElementById("target").appendChild(myTable);
    }

    addTable();

})();
