document.getElementById('generate-btn').addEventListener('click', generateJoke);

function generateJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const jokeText = data.value;
            document.getElementById('joke').innerText = jokeText;
        })
        .catch(error => {
            document.getElementById('joke').innerText = 'An error occurred. Please try again.';
            console.error('Error fetching the joke:', error);
        });
}
