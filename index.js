function saveToWatchList(imdbID) {
    //saveToWatch = []
    const movieDataString = JSON.stringify(movieData);
    localStorage.setItem("movieData", movieDataString)
    let data = (localStorage.getItem('movieData'))
    let movie = movieData.find((currentMovie) => { return currentMovie.imdbID == imdbID })
    let watchList = JSON.parse(data)
    if (watchList === null) {
        watchList = []
    }
    watchList.push(movie)
}


const movieContainer = document.querySelector('.movies-container')

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
// document ready block
document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('search-form');
    myForm.addEventListener('submit', function (e) {
        // event listener code goes here
        const searchString = document.querySelector('.search-bar').value

        //takes care of spaces in search
        let urlEncodedSearchString = encodeURIComponent(searchString)
        e.preventDefault();

        //bring in omdb API
        axios.get(`http://www.omdbapi.com/?apikey=59354c85&s=${urlEncodedSearchString}`)
            .then(function (response) {
                console.log(response.data);
                movieContainer.innerHTML = renderMovies(response.data.Search)
                movieData = response.data.Search
            })
    })
    return
})


