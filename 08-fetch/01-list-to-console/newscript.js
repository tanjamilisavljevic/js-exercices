



document.getElementById("run").addEventListener("click", function() {
    fetch('api.json')
        .then(response => response.json())
        .then(data => console.log(data));
});