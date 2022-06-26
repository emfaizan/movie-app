<template>
  <div class="container mt-5">
    <Chart :data="topratedData"></Chart>
  </div>
</template>


<script>
import Chart from '@/components/Chart.vue';

export default {
  name: 'StatsView',
  components: {
    Chart
  },
  data() {
    return {
      topratedData: null
    }
  },
  mounted: function(){
    this.getToprated();
  },
  methods: {
    getToprated() {
      const headers = { "Content-Type": "application/json" };
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US&page=1", { headers })
        .then(response => response.json())
        .then((data) => {
          var item = data.results;
          this.topratedData = item.slice(0,10);

          console.log(this.topratedData);
        });
    }
  }

}
</script>