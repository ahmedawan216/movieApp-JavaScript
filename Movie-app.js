
// document.addEventListener('DOMContentLoaded', () => {
 
//   const searchInput = document.querySelector('#searchInput');
//   const searchBtn = document.querySelector('#searchBtn');
//   const movieGrid = document.querySelector('.movie-grid');
//   const detailView = document.querySelector('#movie-detail-view');
//   const toggleBtn = document.querySelector('#darkModeToggle');
//   const loading = document.querySelector('#loading');
//   const noResults = document.querySelector('#no-results');
//   const favoritesGrid = document.querySelector('#favoritesList');
//   const favoritesHeader = document.querySelector('.favoritesHeader');
//   // You'll also need to grab these for the new 'Browse' section
//   const homeLink = document.querySelector('ul li:nth-child(1)');
//   const trendingLink = document.querySelector('ul li:nth-child(2)');
//   const topRatedLink = document.querySelector('ul li:nth-child(3)');
//   const clearFavLink = document.querySelector('#clearFavLink');

// // Fix: Move this line to the top of the URL definitions
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '453a6162d767cd0f6ce03190ebdd2e82';
// const TOP_RATED_URL = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;
// const TRENDING_MOVIES_URL = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
// const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

//   let favorites = [];

//   const savedSrchItem = localStorage.getItem('lastSearchedItem');
//   if (savedSrchItem) {
//     searchInput.value = savedSrchItem;
//     let srchURL = `${SEARCH_URL}${encodeURIComponent(savedSrchItem)}`;
//     getMovies(srchURL);
//   } else {
//     getMovies(TRENDING_MOVIES_URL);
//   }
  
//   function loadSavedSettings() {
//     const lastThemeMode = localStorage.getItem('darkModePreference');
//     if (lastThemeMode === 'light') {
//       document.body.classList.add('light-mode');
//       toggleBtn.textContent = '🌙';
//     } else {
//       document.body.classList.remove('light-mode');
//       toggleBtn.textContent = '☀️';
//     }
//   }

//   toggleBtn.addEventListener('click', () => {
//    document.body.classList.toggle('light-mode');
//    const isLightMode = document.body.classList.contains('light-mode');
//    localStorage.setItem('darkModePreference', isLightMode ? 'light' : 'dark');
//    if (isLightMode) {
//     toggleBtn.textContent = '🌙';
//    } else {
//     toggleBtn.textContent = '☀️';
//    }
//   });

//   searchBtn.addEventListener('click', () => {
//     const srchItem = searchInput.value.trim();
//     localStorage.setItem('lastSearchedItem', srchItem);
//     let srchURL = `${SEARCH_URL}${encodeURIComponent(srchItem)}`;
//     getMovies(srchURL);
//   });
//   document.addEventListener('keydown', (e) => {
//     if (e.key === "Enter") searchBtn.click();
//   });
//   favoritesHeader.addEventListener('click', () => {
//     displayFavorites();
//   });
//   homeLink.addEventListener('click', () => {
//     searchInput.value = '';
//     getMovies(TRENDING_MOVIES_URL);
//   });
//   trendingLink.addEventListener('click', () => {
//     searchInput.value = '';
//     getMovies(TRENDING_MOVIES_URL);
//   });
//   topRatedLink.addEventListener('click', () => {
//     searchInput.value = '';
//    getMovies(TOP_RATED_URL); 
//   });
//   clearFavLink.addEventListener('click', () => {
//     clearFavs();
//   });

//   async function getMovies(apiURL) {
//     loading.classList.remove('hidden');
//     noResults.classList.add('hidden');

//     try {
//       const response = await fetch(apiURL);
//       if (!response.ok) {
//         throw new Error("API RESPONSE IS NOT OK!");
//       }
//       const data = await response.json();
//       if (!data.results || data.results === 0) {
//         noResults.classList.remove('hidden');
//       } else {
//         displayMovies(data.results);
//       }
//     } catch (error) {
//       console.log("ERROR GETTING DATA", error);
//       noResults.classList.remove('hidden');
//     } finally {
//       loading.classList.add('hidden');
//     }
//   }

//   async function getMovieDetails(movieId) {
    // const DETAILS_URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
//     try {
//       const response = await fetch(DETAILS_URL);
//       if (!response.ok) {
//         throw new Error("NETWORK ERROR, try again later");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log("ERROR GETTING MOVIE DETAILS", error);
//       return null;
//     }
//   }

//   function displayMovieDetails(movie) {
//      movieGrid.classList.add('hidden');
//   detailView.classList.remove('hidden');

//   let trailerKey = '';
//   if (movie.videos && movie.videos.results.length > 0) {
//     const trailer = movie.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube'); 
//     if (trailer) {
//       trailerKey = trailer.key;
//     }
//   }
  // const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/';

  // const detailedView = `
  //       <div class="movie-detail-header">
  //           <h2>${movie.title}</h2>
  //           <button class="back-btn">Go Back</button>
  //       </div>
  //       <div class="detail-content">
  //           <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}" class="movie-poster">
  //           <div class="movie-description">
  //               <p><strong>Release Date:</strong> ${movie.release_date}</p>
  //               <p><strong>Overview:</strong> ${movie.overview}</p>
  //           </div>
  //       </div>
  //       ${trailerKey ? `<div class="movie-trailer">
  //           <iframe width="560" height="315" src="${YOUTUBE_EMBED_URL}${trailerKey}" frameborder="0" allowfullscreen></iframe>
  //       </div>` : ''}
  //   `;

//     detailView.innerHTML = detailedView;

//     const backBtn = document.querySelector('.back-btn');
//     backBtn.addEventListener('click', () => {
//       movieGrid.classList.remove('hidden');
//       detailView.classList.add('hidden');
//     });
//   }

//   function displayMovies(movieList) {
//     movieGrid.innerHTML = '';
//     movieList.forEach(movie => {
//       const card = document.createElement('div');
//       card.classList.add('movie-card');
//       card.dataset.movieId = movie.id;

//       const favIcon = document.createElement('i');
      // favIcon.classList.add('fas', 'fa-heart', 'favIcon');
      // const isFav = favorites.some(favMovie => favMovie.id === movie.id);
      // if (isFav) {
      //   favIcon.classList.add('favorited');
      // }
      // favIcon.addEventListener('click', (e) => {
      //   e.stopPropagation();
      //   toggleFav(movie);
      //   favIcon.classList.toggle('favorited');
      // });

//       card.addEventListener('click', async () => {
//           const movieDetails = await getMovieDetails(movie.id);
//           if (movieDetails) {
//               displayMovieDetails(movieDetails);
//           }
//       });

//       card.innerHTML = `
//     <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}">
//     <div class="movie-info">
//         <h3>${movie.title}</h3>
//         <p>Rating: ${movie.vote_average.toFixed(1)}</p>
//     </div>
// `;
// card.appendChild(favIcon);
// movieGrid.appendChild(card);
//     });
//   }

//   function toggleFav(movie) {
//     const existingIndex = favorites.findIndex(favMovie => favMovie.id === movie.id);
//     if (existingIndex !== -1) {
//       favorites.splice(existingIndex, 1);
//     } else {
//       favorites.push(movie);
//     }
//     localStorage.setItem('recentFavorites', JSON.stringify(favorites));
//     displayFavorites();
//   }

//   function displayFavorites() {
//     favoritesGrid.innerHTML = '';
//     favorites.forEach(favMovie => {
//       const favItem = document.createElement('div');
//       favItem.classList.add('favorite-item');
//       favItem.dataset.movieId = favMovie.id;

//       favItem.addEventListener('click', async () => {
//         const movieDetails = await getMovieDetails(favMovie.id);
//         if (movieDetails) {
//           displayMovieDetails(movieDetails);
//         }
//       });

    //   favItem.innerHTML = `
    //     <img src="${IMAGE_BASE_URL + favMovie.poster_path}" alt="${favMovie.title}">
    //     <span>${favMovie.title}</span>
    // `;
    // favoritesGrid.appendChild(favItem);
//     });
//   }

//   function clearFavs() {
//     favorites = [];
//     localStorage.removeItem('recentFavorites');

//     document.querySelectorAll('.favIcon').forEach(icon => {
//         icon.classList.remove('favorited');
//     });
//     displayFavorites();
//   }

//   function loadFavorites() {
//     const savedFavs = localStorage.getItem('recentFavorites');
//     const favArr = JSON.parse(savedFavs);
//     if (favArr) {
//       favorites = favArr;
//     }
//     displayFavorites();
//   }
//   loadFavorites();
//   loadSavedSettings();
// });


document.addEventListener('DOMContentLoaded', () => {

  const searchInput = document.querySelector('#searchInput');
  const searchBtn = document.querySelector('#searchBtn');
  const movieGrid = document.querySelector('.movie-grid');
  const detailView = document.querySelector('#movie-detail-view');
  const toggleBtn = document.querySelector('#darkModeToggle');
  const loading = document.querySelector('#loading');
  const noResults = document.querySelector('#no-results');
  const favoritesGrid = document.querySelector('#favoritesList');
  const favoritesHeader = document.querySelector('.favoritesHeader');
  // You'll also need to grab these for the new 'Browse' section
  const homeLink = document.querySelector('ul li:nth-child(1)');
  const trendingLink = document.querySelector('ul li:nth-child(2)');
  const topRatedLink = document.querySelector('ul li:nth-child(3)');
  const clearFavBtn = document.querySelector('#clearFavBtn');

// Fix: Move this line to the top of the URL definitions
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = '453a6162d767cd0f6ce03190ebdd2e82';
  const TOP_RATED_URL = `${BASE_URL}movie/top_rated?api_key=${API_KEY}`;
  const TRENDING_MOVIES_URL = `${BASE_URL}trending/movie/week?api_key=${API_KEY}`;
  const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query=`;
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

  let favorites = [];

   const savedSrchItem = localStorage.getItem('lastSearchedItem');
  if (savedSrchItem) {
    searchInput.value = savedSrchItem;
    let srchURL = `${SEARCH_URL}${encodeURIComponent(savedSrchItem)}`;
    getMovies(srchURL);
  } else {
    getMovies(TRENDING_MOVIES_URL);
  }

  function loadSavedSettings() {
    const lastThemeMode = localStorage.getItem('darkModePreference');
    if (lastThemeMode === 'light') {
      document.body.classList.add('light-mode');
      toggleBtn.textContent = '🌙';
    } else {
      document.body.classList.remove('light-mode');
      toggleBtn.textContent = '☀️';
    }
  }

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode');
    localStorage.setItem('darkModePreference', isLightMode ? 'light' : 'dark');
    if (isLightMode) {
      toggleBtn.textContent = '🌙';
    } else {
      toggleBtn.textContent = '☀️';
    }
  });

  searchBtn.addEventListener('click', () => {
    let srchItem = searchInput.value.trim();
    localStorage.setItem('lastSearchedItem', srchItem);
    let srchURL = `${SEARCH_URL}${encodeURIComponent(srchItem)}`;
    getMovies(srchURL);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === "Enter") searchBtn.click();
  });
  favoritesHeader.addEventListener('click', () => {
    displayFavorites();
  });
  homeLink.addEventListener('click', () => {
    searchInput.value = '';
    getMovies(TRENDING_MOVIES_URL);
  });
    trendingLink.addEventListener('click', () => {
    searchInput.value = '';
    getMovies(TRENDING_MOVIES_URL);
  });
    topRatedLink.addEventListener('click', () => {
    searchInput.value = '';
    getMovies(TOP_RATED_URL);
  });
  clearFavBtn.addEventListener('click', () => {
    clearFavs();
  });

  async function getMovies(apiURL) {
    loading.classList.remove('hidden');
    noResults.classList.add('hidden');

    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("API RESPONSE IS NOT OK!");
      }
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        noResults.classList.remove('hidden');
      } else {
        displayMovies(data.results);
      }
    } catch (error) {
      console.log("ERROR GETTING DATA", error);
      noResults.classList.remove('hidden');
      return null;
    } finally {
      loading.classList.add('hidden');
    }
  }

  async function getMovieDetails(movieId) {
    const DETAILS_URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`;
    try {
      const response = await fetch(DETAILS_URL);
      if (!response.ok) {
        throw new Error("API MOVIE DETAILS ARE NOT OK!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("ERROR GETTING DATA", error);
      return null;
    }
  }

  function displayMovieDetails(movie) {
    movieGrid.classList.add('hidden');
    detailView.classList.remove('hidden');

    let trailerKey;
    if (movie.videos && movie.videos.results.length > 0) {
      const trailer = movie.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        trailerKey = trailer.key;
      }
    }
      const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/';

      const detailedView = `
        <div class="movie-detail-header">
            <h2>${movie.title}</h2>
            <button class="back-btn">Go Back</button>
        </div>
        <div class="detail-content">
            <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}" class="movie-poster">
            <div class="movie-description">
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                <p><strong>Overview:</strong> ${movie.overview}</p>
            </div>
        </div>
        ${trailerKey ? `<div class="movie-trailer">
            <iframe width="560" height="315" src="${YOUTUBE_EMBED_URL}${trailerKey}" frameborder="0" allowfullscreen></iframe>
        </div>` : ''}
        `;
        detailView.innerHTML = detailedView;

        const backBtn = document.querySelector('.back-btn');
        backBtn.addEventListener('click', () => {
          movieGrid.classList.remove('hidden');
          detailView.classList.add('hidden');
        });
  }

  function displayMovies(movieList) {
    movieGrid.innerHTML = '';
    movieList.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');
      card.dataset.movieId = movie.id;

      const favIcon = document.createElement('i');
      favIcon.classList.add('fas', 'fa-heart', 'favIcon');
      const isFav = favorites.some(fav => fav.id === movie.id);
      if (isFav) {
        favIcon.classList.add('favorited');
      }
      favIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFav(movie);
        favIcon.classList.toggle('favorited');
      });

      card.addEventListener('click', async () => {
        const movieDetails = await getMovieDetails(movie.id);
        if (movieDetails) {
          displayMovieDetails(movieDetails);
        }
      });

      card.innerHTML = `
    <img src="${IMAGE_BASE_URL + movie.poster_path}" alt="${movie.title}">
    <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.vote_average.toFixed(1)}</p>
    </div>
    `;
    card.appendChild(favIcon);
    movieGrid.appendChild(card);
    });
  }

  function toggleFav(movie) {
    const existingIndex = favorites.findIndex(favMovie => favMovie.id === movie.id);
    if (existingIndex !== -1) {
      favorites.splice(existingIndex, 1);
    } else {
      favorites.push(movie);
    }
    localStorage.setItem('recentFavorites', JSON.stringify(favorites));
    displayFavorites();
  }

  function displayFavorites() {
    favoritesGrid.innerHTML = '';
    favorites.forEach(favMovie => {
      const favItem = document.createElement('div');
      favItem.classList.add('favorite-item');
      favItem.dataset.movieId = favMovie.id;

      favItem.addEventListener('click', async () => {
        const newMovieDetails = await getMovieDetails(favMovie.id);
        if (newMovieDetails) {
          displayMovieDetails(newMovieDetails);
        }
      });

      favItem.innerHTML = `
        <img src="${IMAGE_BASE_URL + favMovie.poster_path}" alt="${favMovie.title}">
        <span>${favMovie.title}</span>
    `;
    favoritesGrid.appendChild(favItem);
    });
  }

  function clearFavs() {
    favorites = [];
    localStorage.removeItem('recentFavorites');

    displayFavorites();
  }

   function loadFavorites() {
    const savedFavs = localStorage.getItem('recentFavorites');
    const favArr = JSON.parse(savedFavs);
    if (favArr) {
      favorites = favArr;
            displayFavorites();
    } 
  }

  loadFavorites();
  loadSavedSettings();

});