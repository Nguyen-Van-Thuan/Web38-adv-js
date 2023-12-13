// API duong danh anh
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// B1: Get tham so URL hien tai detail
let url = window.location.search;
// B2: Get id cua bo phim
let urlParams = new URLSearchParams(url);
const id = urlParams.get('id');

// B3: Do du lieu theo id bo phim
// B3.1: Call api cua bo phim day
let apiDetail = `http://localhost:3000/movie/${id}`;

let callApiDetail = async(url) => {
  let response = axios.get(url);
  let detail = await response;
  return showDetail(detail.data);
}

callApiDetail(apiDetail);

// B3.2: Do du lieu

// Truy cap phan tu
let detailHTML = document.querySelector('.content-detail-js');

let showDetail = (detail) => {
  console.log(detail);
  detailHTML.innerHTML = 
  `
    <img src=${IMG_PATH + detail.poster_path}>
    <h1 class="heading-detail">${ detail.title}</h1>
    <p class="des-detail">${detail.overview}</p>
    <p class="start-detail">${detail.vote_average}</p> 
  `
}

