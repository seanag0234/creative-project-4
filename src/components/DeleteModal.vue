<template>
  <div class="modal" v-bind:class="{'is-active': showDelete}">
    <div class="modal-background" v-on:click="toggleShowDelete"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete</p>
        <button class="delete" v-on:click="toggleShowDelete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">

        <div class="field">
          <span>Are you sure you want to delete {{currentItem.title}}?</span>
        </div>

      </section>
      <footer class="modal-card-foot">
        <button class="button is-danger" @click="removeItem">Delete</button>
        <button class="button" v-on:click.prevent="toggleShowDelete">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import {deleteMovie} from "../apiConnector";

  export default {
      name: "delete-modal",
      data() {
        return {
          // show: false,
          // currentItem: {}
        }
      },
      computed: {
        ...mapGetters(['showDelete', 'currentItem'])
      },
      methods: {
        ...mapActions({
          toggleShowDelete: 'toggleShowDelete',
          setMovies: 'setMovies'
        }),
        removeItem: async function () {
          try {
            let res = await deleteMovie(this.currentItem.id);
            let movies = res.data.movies;
            this.setMovies(movies);
            this.$toaster.success("Movie deleted!")
          } catch (e) {
            console.log(e);
            this.$toaster.error("Something went wrong")
          }
          this.toggleShowDelete();
        },
      }
    }
</script>

<style scoped>

</style>
