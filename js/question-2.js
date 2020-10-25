const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

const resultsContainer = document.querySelector(".results")

const loader = document.querySelector(".loader");

setTimeout(() => loader.classList.remove("loading-indicator"), 1000);


async function getGames() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const games = data.results;

        resultsContainer.innerHTML = "";

        for (let i = 0; i < games.length; i++) {
            
            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<h2 class="results"> Game Information: </h2>
            <p class="name"> Name: ${games[i].name}</p>
            <p class="rating"> Rating: ${games[i].rating}</p>
            <p class="tag"> Number of Tags: ${games[i].tags.length}</p>`;
        }
        } catch (error) {
            console.log("An error occurred when calling the API: " + error);
            resultsContainer.innerHTML += `<div class="error"> An error occurred calling the API </div>`;
    }
}

setTimeout(getGames, 1000);
