
<template>
<div>
  <div class="banner">
    <div class="container">
      <div class="wrapper">
        <h1 class="text-4xl font-bold mb-3">Nonstop Entertainment</h1>
        <p class="text-xl">Get all you need about movies, For over 5 years, MovieApp has provided the most up-to-date and accurate reviews and rating about the movies.</p>
        <div class="search-box mt-4">
          <form role="search" method="get" class="search-form" action="#">
            <input type="search" class="search-field" placeholder="Search Movies, TV Shows, Artists, Popular..." value="" name="s">
            <button type="submit" class="search-submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path d="M7 0C11-0.1 13.4 2.1 14.6 4.9 15.5 7.1 14.9 9.8 13.9 11.4 13.7 11.7 13.6 12 13.3 12.2 13.4 12.5 14.2 13.1 14.4 13.4 15.4 14.3 16.3 15.2 17.2 16.1 17.5 16.4 18.2 16.9 18 17.5 17.9 17.6 17.9 17.7 17.8 17.8 17.2 18.3 16.7 17.8 16.4 17.4 15.4 16.4 14.3 15.4 13.3 14.3 13 14.1 12.8 13.8 12.5 13.6 12.4 13.5 12.3 13.3 12.2 13.3 12 13.4 11.5 13.8 11.3 14 10.7 14.4 9.9 14.6 9.2 14.8 8.9 14.9 8.6 14.9 8.3 14.9 8 15 7.4 15.1 7.1 15 6.3 14.8 5.6 14.8 4.9 14.5 2.7 13.6 1.1 12.1 0.4 9.7 0 8.7-0.2 7.1 0.2 6 0.3 5.3 0.5 4.6 0.9 4 1.8 2.4 3 1.3 4.7 0.5 5.2 0.3 5.7 0.2 6.3 0.1 6.5 0 6.8 0.1 7 0ZM7.3 1.5C7.1 1.6 6.8 1.5 6.7 1.5 6.2 1.6 5.8 1.7 5.4 1.9 3.7 2.5 2.6 3.7 1.9 5.4 1.7 5.8 1.7 6.2 1.6 6.6 1.4 7.4 1.6 8.5 1.8 9.1 2.4 11.1 3.5 12.3 5.3 13 5.9 13.3 6.6 13.5 7.5 13.5 7.7 13.5 7.9 13.5 8.1 13.5 8.6 13.4 9.1 13.3 9.6 13.1 11.2 12.5 12.4 11.4 13.1 9.8 13.6 8.5 13.6 6.6 13.1 5.3 12.2 3.1 10.4 1.5 7.3 1.5Z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-6 col-md-2" v-for="(item, index) in movies.results" v-bind:key="index">
        <div class="movie-card">
          <router-link :to="'/detail/' + item.id">
            <img v-bind:src="'https://image.tmdb.org/t/p/w300/' + item.poster_path" alt="" class="img-fluid" />
          </router-link>
          <div class="p-3">
            <h3 class="title">{{item.original_title}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  
</template>


<script>

export default {
  name: 'HomeView',
  data() {
    return {
      movies: null
    }
  },
  created: function(){
    this.getMovies();
  },
  methods: {
    getMovies() {
      const headers = { "Content-Type": "application/json" };
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US&page=1", { headers })
        .then(response => response.json())
        .then((data) => {
          this.movies = {...data};
          console.log('data', data);
        });
      
    },
  },
}
</script>

<style scoped lang="scss">
.banner {
  position:relative;
  color:#fff;
  margin:0 0 40px;
  background: #402254;
  background: -moz-linear-gradient(45deg,  #402254 0%, #5c2966 100%);
  background: -webkit-linear-gradient(45deg,  #402254 0%,#5c2966 100%);
  background: linear-gradient(45deg,  #402254 0%,#5c2966 100%);

  > .container {
    position:relative;
    z-index: 2;
  }

  &:after{
    content:'';
    display:block;
    z-index:1;
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    opacity:0.2;
    filter:blur(5px);
    background:url(@/assets/images/bg-4.webp);
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center center;
  }

  .wrapper {
    padding:150px 25px;
    text-align:center;
    margin:auto;
    max-width:850px;


    h1 {
      color:gold;
    }

    p {
      font-size:24px;
      font-weight:300;
    }
  }
}

.search-box {
  .search-form {
    display:flex;
    border:1px solid #aaa;
    background:#fff;
    border-radius:50px;
    overflow:hidden;
    min-width: 400px;

    input {
      height: 64px;
      border:0;
      outline:0;
      padding: 10px 0 10px 25px;
      flex-grow:1;
    }

    .search-submit {
      border:0;
      background:none;
      outline:0;
      padding:15px 20px;
    }
  }
}
</style>