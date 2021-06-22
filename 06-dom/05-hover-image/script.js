/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {


    function hoverImg() {

        let image = document.querySelector(".material img");
        let result = image.getAttribute('data-hover');
        let originalSource = image.src;

        image.onmouseout = function () {
            image.src = originalSource;
        }

        image.onmouseover = function () {
            image.src = result;
        };
    }

    hoverImg();

})();
