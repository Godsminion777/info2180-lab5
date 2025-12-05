document.addEventListener('DOMContentLoaded', function() {
    const lookupButton = document.getElementById('lookup');
    lookupButton.addEventListener('click', function() {
        const countryInput = document.getElementById('country');
        const country = countryInput.value;
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const resultsDiv = document.getElementById('result');
                resultsDiv.innerHTML = this.responseText;
                }
            }
        ajax.open("GET", "world.php?country=" + encodeURIComponent(country), true);
        ajax.send();
    });

    const cityLookupButton = document.getElementById('CityLookup');
    cityLookupButton.addEventListener('click', function() {
        const countryInput = document.getElementById('country');
        const country = countryInput.value;
        const ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const resultsDiv = document.getElementById('result');
                resultsDiv.innerHTML = this.responseText;
                }
            }
        ajax.open("GET", "world.php?country=" + encodeURIComponent(country) + "&lookup=cities", true);
        ajax.send();
    }
);
});

