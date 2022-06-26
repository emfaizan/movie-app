<template>
    <div>
        <div>
            <D3BarChart :config="chart_config" :datum="data" :title="chart_title" v-if="data != null"></D3BarChart>
        </div>

        <div class="mt-5">
            <D3BarChart :config="chart_config1" :datum="data" :title="chart_title1" v-if="data != null"></D3BarChart>
        </div>
    </div>
</template>


<script>
import { D3BarChart } from 'vue-d3-charts';

export default {
  name: 'ChartComponent',
  props: ["data"],
  components: {
    D3BarChart,
  },
  data() {
    return {
        chart_title: 'Top Rated Movies (Rating)',
        chart_title1: 'Top Rated Movies (Vote Count)',
        chart_source: '',
        chart_config: {
            key: 'title',
            values: ['vote_average'],
            axis: {
                yTitle: "Ratings",
                yTicks: 10,
                yFormat: ",.0f"
            },
            color: {
                default: '#2d1d47',
                current: '#6610f2'
            },
            transition: {ease: 'easeBounceOut', duration: 1000}
        },
        chart_config1: {
            key: 'title',
            values: ['vote_count'],
            axis: {
                yTitle: "Vote Count",
            },
            color: {
                default: '#222f3e',
                current: '#41B882'
            },
            transition: {ease: 'easeBounceOut', duration: 1000}
        }
    }
  },
  mounted: function(){
    //this.getToprated();
  },
  methods: {
    getToprated() {
      const headers = { "Content-Type": "application/json" };
      fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=85cb9fa1999e5eb158aa17009d9b7510&language=en-US&page=1", { headers })
        .then(response => response.json())
        .then((data) => {
          var item = data.results;
          this.topratedMovies = item.slice(0,10);

          this.prepareData();

        });
    },
    prepareData(){
        console.log("topratedMovies", this.topratedMovies);


    }
  },
};
</script>
