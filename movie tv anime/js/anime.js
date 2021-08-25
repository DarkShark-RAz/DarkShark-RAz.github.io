class UI_ANIME{
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
    // const imgPath = 'https://image.tmdb.org/t/p/original';
      Data.top.forEach(anime => {
      const {image_url,title,score}= anime;
      const p_anime = document.querySelector('.popular-anime');
      if(image_url!=null){
        const animeEl = document.createElement('div');
     
      animeEl.classList.add('anime');
      animeEl.innerHTML=`  
        <img 
          src="${image_url}" alt="${title}"
        />
        <div class="anime-info">
          <h3>${title}</h3>
          <span class="${this.getClassByVote(score)}">${score}</span>
        </div>
      `;
      p_anime.appendChild(animeEl);
      }

    });
  }

  car(Data){
    // const imgPath = 'https://image.tmdb.org/t/p/original';
      Data.top.forEach(movie => {
        const {image_url,title,score}= movie;
      const p_movie_car = document.getElementById('asplide_list');
      if(image_url!=null){
      const movieEl = document.createElement('div');
      movieEl.classList.add('splide__slide');
      // movieEl.classList.add('movie');
      movieEl.innerHTML=`
        <img 
        src="${image_url}" alt="${title}" class="anime-img"
        />
        </div>
        `;
        // <div class="movie-info ">
        // <h3>${title}</h3>
        // <span class="${this.getClassByVote(score)}">${score}</span>

        p_movie_car.appendChild(movieEl);
      }
    });
  }

}