document.getElementById("run").addEventListener("click", function () {
    fetch('api.json')
        .then(response => response.json())

        .then(function findHero(jsonRepresentationOfTheBodyOfResponse) {

            const allHeroes = jsonRepresentationOfTheBodyOfResponse.heroes;

            const heroId = parseInt(document.getElementById("hero-id").value);

            let hero = allHeroes.find(
                function (hero) {
                    return hero.id === heroId;
                }
            )

            console.log(hero);
        })


});