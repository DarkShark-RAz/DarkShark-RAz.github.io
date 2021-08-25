//Init Show object
const show = new Shows();
//Init UI object
const uim = new UI_MOVIES();
//Init UI object
const uit = new UI_TV();
//Init UI object
const uia = new UI_ANIME();

//Get DOM load
if(document.body.classList.contains("mpage")){
    addEventListener('DOMContentLoaded',main_movies);
}
else if(document.body.classList.contains('homepage')){
    addEventListener('DOMContentLoaded',()=>{
        main_movies1();
        main_tv1();
        main_anime1();
    });
    // addEventListener('DOMContentLoaded',main_tv1);
}
else if(document.body.classList.contains('tvpage')){
    addEventListener('DOMContentLoaded',main_tv);
}
else if(document.body.classList.contains('apage')){
    addEventListener('DOMContentLoaded',main_anime);
}
//function calls getMovies
function main_movies(){
    show.getMovies(0).then(results => {
        uim.card(results);
        console.log(results);
    })
    .catch(err => {console.log(err)});
}

function main_movies1(){
    show.getMovies(0).then(results => {
        uim.car(results);
        console.log(results);
    })
    .catch(err => {console.log(err)});
}

function main_tv(){
    show.getMovies(1).then(results => {
        uit.card(results);
        console.log(results);
    })
    .catch(err => {console.log(err)});
}

function main_tv1(){
    show.getMovies(1).then(results => {
        uit.car(results);
        console.log(results);
    })
    .catch(err => {console.log(err)});
}
function main_anime(){
    show.getMovies(2).then(top => {
        uia.card(top);
        console.log(top);
    })
    .catch(err => {console.log(err)});
}

function main_anime1(){
    show.getMovies(2).then(top => {
        uia.car(top);
        console.log(top);
    })
    .catch(err => {console.log(err)});
}

// -----------------------Search Bar-------------------------
const searchBar = document.querySelector('search-bar');

searchBar.addEventListener('keyup',(e)=>{
    console.log(e.target.value)
});
