const API_URL = 'http://localhost:3000/movie';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

/* Truy cap phan tu */
let rowMovie = document.querySelector(".row-js");

/* Get API */
let getMovie = async (url) => {
  let response = axios.get(url);
  let res_1 = await response;

  return showMoive(res_1.data);
};

getMovie(API_URL);

/* Show data Movie */
let showMoive = (data) => {
  let listMovie = data.results;
  let HTML = ``;
  listMovie.forEach((value, index) => {


    HTML = HTML + `
      <div class="col-md-3 col-sm-6 col-12">
        <div class="box-movie">
          <img src=${IMG_PATH + value.poster_path} alt="images short movie">
          <div class="movie-content">
            <div class="movie-info">
              <div class="movie-title">
                ${value.title}
              </div>
              <div class="movie-start ${showRating(value.vote_average)}"> 
                ${value.vote_average}
              </div>
            </div>
          </div>
          <div class="movie-overview">
            <h3>Overview</h3>
            <p>${value.overview}</p>
          </div>
        </div>
      </div>
    `
  });
  // Hien thi ra giao dien
  rowMovie.innerHTML = HTML;

};

// Hien thi danh gia
let showRating = (vote) => {
  // console.log(vote);
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "organe";
  } else {
    return "red";
  }
}
