<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import NavBar from './components/NavBar'
  import MyFooter from './components/MyFooter'
  import {getMovies} from "./apiConnector";
  import {mapActions} from 'vuex';

  export default {
    name: 'App',
    components:{NavBar, MyFooter},
    methods: {
      ...mapActions([
        'setMovies'

      ])
    },
    created: async function () {
      try {
        let res = await getMovies();
        this.setMovies(res.data.movies);
      } catch (e) {
        console.log(e);
        this.$toaster.error("Something went wrong getting movies")
      }

    }
  }
</script>

<style lang="sass">
  @import "assets/sass/main.sass"
</style>
<style>
  .welcome.is-info {
    background: #36D1DC;
    background: -webkit-linear-gradient(to right, #5B86E5, #36D1DC);
    background: linear-gradient(to right, #5B86E5, #36D1DC);
  }
  html, body {
    font-family: 'Open Sans', serif;
    font-size: 16px;
    line-height: 1.5;
    height: 100%;
    background: #ECF0F3;
  }
  .columns {
    /*height: 100%;*/
  }
  .menu-label {
    color: #8F99A3;
    letter-spacing: 1.3;
    font-weight: 700;
  }
  .menu-list a {
    color: #0F1D38;
    font-size: 14px;
    font-weight: 700;
  }
  .menu-list a:hover {
    background-color: transparent;
    color: #276cda;
  }
  .menu-list a.is-active {
    background-color: transparent;
    color: #276cda;
    font-weight: 700;
  }
  .card {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    margin-bottom: 2rem;
  }
  .card-header-title {
    color: #8F99A3;
    font-weight: 400;
  }
  .info-tiles {
    margin: 1rem 0;
  }
  .info-tiles .subtitle {
    font-weight: 300;
    color: #8F99A3;
  }
  .hero.welcome .title, .hero.welcome .subtitle {
    color: hsl(192, 17%, 99%);
  }
  .card .content {
    font-size: 14px;
  }
  .card-footer-item {
    font-size: 14px;
    font-weight: 700;
    color: #8F99A3;
  }
  .card-footer-item:hover {
  }
  .card-table .table {
    margin-bottom: 0;
  }
  .events-card .card-table {
    max-height: 250px;
    overflow-y: scroll;
  }
  .page-title {
    padding: 0 3rem 0 1.5rem;
  }
  .no-padding {
    padding: 0 0 0 0;
  }
</style>
