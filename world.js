document.addEventListener('DOMContentLoaded', function() {
    const lookupButton = document.getElementById('lookup');
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