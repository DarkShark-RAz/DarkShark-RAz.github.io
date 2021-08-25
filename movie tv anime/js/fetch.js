class Shows{
    constructor(){
        this.apiUrl_popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=a272f1070ca74727e3ecd60831ac0ae7&language=en-US&page=1';
        this.apiUrl_popular_tv = 'https://api.themoviedb.org/3/tv/popular?api_key=a272f1070ca74727e3ecd60831ac0ae7&language=en-US&page=1';
        this.apiUrl_popular_anime = 'https://api.jikan.moe/v3/top/anime/1/bypopularity';
    }

    //Fetch movie data from API
    async getMovies(n){
        const resp = await Promise.all([
            fetch(this.apiUrl_popular_movies),
            fetch(this.apiUrl_popular_tv),
            fetch(this.apiUrl_popular_anime)
        ])
        // const resp = await fetch(this.apiUrl_popular_movies);
        console.log(resp);
        const respData = await resp[0].json();
        const tvrespData = await resp[1].json();
        const arespData = await resp[2].json();
        console.log(respData);
        console.log(tvrespData);
        console.log(arespData);
        if(n===0){
            return respData;
        }
        else if(n===1){
            return tvrespData;
        }
        else if(n===2){
            return arespData;
        }

    }
}