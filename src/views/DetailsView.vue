<template>
  <div class="container">
    <section class="movie-overview mt-5">
      <div class="row">
        <div class="col-md-5">
          <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="" />
        </div>

        <div class="col-md-7">
          <h1 class="fw-bold h2 text-primary mb-3">{{movie.original_title}}</h1>
          <h2 class="h5 mb-4">{{movie.tagline}}</h2>
          <p class="text-gray-500">{{movie.overview}}</p>
          

          <div class="movie-specs">
            <div>
              <span class="heading">Release Date</span>
              <p>{{movie.release_date}}</p>
            </div>

            <div>
              <span class="heading">Director</span>
              <p>---</p>
            </div>

            <div>
              <span class="heading">Language</span>
              <p class="uppercase">{{movie.original_language}}</p>
            </div>

            <div>
              <span class="heading">Run Time</span>
              <p>{{movie.runtime}}</p>
            </div>

            <div>
              <span class="heading">Rating</span>
              <div class="py-2">
                <div class="rating-style mx-0">{{movie.vote_average}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <h3 class="fw-bold mb-4">Casts</h3>
      <div class="row">
        <div class="col-4 col-md-2" v-for="(item, index) in casts.cast" v-bind:key="index">
          <div class="bg-white border rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <router-link :to="'/detail/' + item.id">
              <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + item.profile_path" alt="" class="img-fluid" />
            </router-link>
            <div class="p-3">
              <h3 class="h5 fw-bold">{{item.original_name}}</h3>
              <p class="text-muted">{{item.character}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <h3 class="fw-bold mb-4">Similar Movies</h3>
      <div class="row">
        <div class="col-4 col-md-2" v-for="(item, index) in similarMovies.results" v-bind:key="index">
          <div class="movie-card rounded-lg">
            <router-link :to="'/detail/' + item.id">
              <img v-bind:src="'https://image.tmdb.org/t/p/w500/' + item.poster_path" alt="" class="w-full" />
            </router-link>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>

export default {
  name: 'DetailsView',
  props: ["movieid"],
  data() {
    return {
      movie: null,
      similarMovies: null,
      casts: null,
    }
  },
  mounted: function(){
    this.getMovies();
  },
  methods: {
    getMovies() {
      const headers = { "Content-Type": "application/json" };
      fetch(`https://api.themoviedb.org/3/movie/${this.movieid}?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US`, { headers })
        .then(response => response.json())
        .then((data) => {
          this.movie = {...data};
          console.log('data', data);

          this.getSimilarMovies();
          this.getCasts();
        });
      
    },
    getSimilarMovies() {
      const headers = { "Content-Type": "application/json" };
      fetch(`https://api.themoviedb.org/3/movie/${this.movieid}/similar?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US&page=1`, { headers })
        .then(response => response.json())
        .then((data) => {
          this.similarMovies = {...data};
          console.log('similarMovies', data);
        });
    },
    getCasts() {
      const headers = { "Content-Type": "application/json" };
      fetch(`https://api.themoviedb.org/3/movie/${this.movieid}/credits?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US`, { headers })
        .then(response => response.json())
        .then((data) => {
          this.casts = {...data};
          console.log('casts', data);
        });
    }
  },
}
</script>


<style scoped lang="scss">
.movie-specs {
  display:flex;
  flex-wrap:wrap;

  > div {
    width:50%;
  }

  .heading {
    font-weight:bold;
  }
}
</style>