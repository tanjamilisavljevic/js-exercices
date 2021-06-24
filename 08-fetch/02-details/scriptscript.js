

document.getElementById("run").addEventListener("click", function () {
    fetch('api.json')
        .then(
            function (response) {
                return response.json();
            }
        )
    .then(
        function (json){
            const heroList = json.heroes;
            const heroId = parseInt(document.getElementById('hero-id').value);
            let hero = heroList.find(function (hero){
                return heroId === hero.id;
            })
            const template = document.getElementById('tpl-hero');
            const clone = template.content.cloneNode(true);;

            clone.querySelector('.name').textContent = hero.name;
            clone.querySelector('.alter-ego').textContent = hero.alterEgo;
            clone.querySelector('.powers').textContent = hero.abilities;

            document.getElementById('target').appendChild(clone);



    })
    }

    )