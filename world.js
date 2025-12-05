document.addEventListener('DOMContentLoaded', function() {
    const lookupButton = document.getElementById('lookup');
<<<<<<< HEAD
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

=======
    const countryInput = document.getElementById('country');
    const resultDiv = document.getElementById('result');

    lookupButton.addEventListener('click', function() {
        
        const query = countryInput.value.trim();

        const url = `world.php?country=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    return Promise.reject('Something went wrong!');
                }
            })
            .then(data => {
                // Update the result div with the HTML returned from PHP
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p style="color: red;">An error occurred while fetching data.</p>';
            });
    });
});
>>>>>>> ad1cb5f1704db10bb17691d9d83c1be2d6c7ee19
