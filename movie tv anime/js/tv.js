class UI_TV{
  getClassByVote(vote){
      if(vote>=8){
          return 'green';
      }
      else if(vote>=5){
          return 'orange';
      }else {
          return 'red';
      }
     }

  card(Data){
    const imgPath = 'https://image.tmdb.org/t/p/original';
      Data.results.forEach(movie => {
      const {poster_path,name,vote_average,overview}= movie;
      const p_movie = document.querySelector('.popular-tv');
      if(poster_path!=null){
        const movieEl = document.createElement('div');
     
      movieEl.classList.add('movie');
      movieEl.innerHTML=`  
        <img 
          src="${imgPath + poster_path}" alt="${name}"
        />
        <div class="movie-info">
          <h3>${name}</h3>
          <span class="${this.getClassByVote(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          ${overview}
        </div>
      `;
      p_movie.appendChild(movieEl);
      }

    });
  }

  car(Data){
    const imgPath = 'https://image.tmdb.org/t/p/original';
      Data.results.forEach(movie => {
      const {poster_path,name,vote_average,backdrop_path}= movie;
      const p_movie_car = document.getElementById('tvsplide_list');
      if(poster_path!=null){
      const movieEl = document.createElement('div');
      movieEl.classList.add('splide__slide');
      // movieEl.classList.add('movie');
      movieEl.innerHTML=`
        <img 
        src="${imgPath + poster_path}" alt="${name}"
        />
        </div>
        `;
        // <div class="movie-info ">
        // <h3>${name}</h3>
        // <span class="${this.getClassByVote(vote_average)}">${vote_average}</span>

        p_movie_car.appendChild(movieEl);
      }
    });
  }

}