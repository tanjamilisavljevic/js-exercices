/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




(() => {


    document.getElementById("run").addEventListener("click", function () {
        fetch('api.json')
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (json) {
                    const heroesList = json.heroes
                    const heroId = parseInt(document.getElementById('hero-id').value);
                    let hero = heroesList.find(function (hero){
                        return hero.id === heroId;
                    })

                    const template = document.getElementById("tpl-hero");
                    const clone = template.content.cloneNode(true);

                    clone.querySelector('.name').textContent = hero.name;
                    clone.querySelector('.alter-ego').textContent = hero.alterEgo;
                    clone.querySelector('.powers').textContent = hero.abilities;

                    document.getElementById('target').appendChild(clone);

                }
            )
    })





})();
