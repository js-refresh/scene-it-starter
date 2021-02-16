function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map(function (currentMovie) {
        return `
        <div class="movie">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src=${currentMovie.Poster} alt="">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">Awesome movie! You will love it... </p>
                    <div class="containerA">
                        <div class="box-a">
                            <a href="#" onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add</a>
                        </div>
                        <div class="box-b mt-2">
                            <p class="card-text" id="card-text-right">Release-date: ${currentMovie.Year}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    });
    return movieHtmlArray.join('');
}

const movieContainer = document.querySelector('.movies-container')
movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('movieData')))
