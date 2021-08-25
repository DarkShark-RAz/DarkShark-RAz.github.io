// class Shows{
//     constructor(){
//         this.apiUrl_popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=a272f1070ca74727e3ecd60831ac0ae7&language=en-US&page=1';
//         this.apiUrl_popular_tv = 'https://api.themoviedb.org/3/tv/popular?api_key=a272f1070ca74727e3ecd60831ac0ae7&language=en-US&page=1';
//         this.apiUrl_popular_anime = 'https://api.jikan.moe/v3/top/anime/1/bypopularity';
//         // this.apiUrl_search = 'https://api.jikan.moe/v3/top/anime/1/bypopularity';

//     }

//     //Fetch movie data from API
//     async getMovies(n){
//         const resp = await Promise.all([
//             fetch(this.apiUrl_popular_movies),
//             fetch(this.apiUrl_popular_tv),
//             fetch(this.apiUrl_popular_anime)
//         ])
//         // const resp = await fetch(this.apiUrl_popular_movies);
//         console.log(resp);
//         const respData = await resp[0].json();
//         const tvrespData = await resp[1].json();
//         const arespData = await resp[2].json();
//         console.log(respData);
//         console.log(tvrespData);
//         console.log(arespData);
//         if(n===0){
//             return respData;
//         }
//         else if(n===1){
//             return tvrespData;
//         }
//         else if(n===2){
//             return arespData;
//         }

//     }
// }

const apiUrl_search_mt = 'https://api.themoviedb.org/3/search/multi?api_key=a272f1070ca74727e3ecd60831ac0ae7&language=en-US&query=';
const apiUrl_search_anime = 'https://api.jikan.moe/v3/search/anime?page=1&q=';


async function getSearch(url,n){
    const resp = await fetch(url);
    const respData = await resp[0]
}