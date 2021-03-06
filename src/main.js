// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
Vue.use(Toaster, {timeout: 5000});

Vue.use(Vuex);
const state = {
  statusMap: {
    'owned': 'In my library',
    'borrowed': 'Borrowed',
    'loaned': 'Loaned Out',
    'wishList': 'In my wish list'
  },
  isAuthenticated: true,
  currentUser: {
    name: 'Aubrey',
    movies: [],
  },
  nextId: 5,
  contentType: 'movie',
  showDelete: false,
  showAdd: false,
  showEdit: false,
  currentItem: {}
};

const store = new Vuex.Store({
  state,
  getters: {
    currentItem: state => {
      return state.currentItem
    },
    isAuthenticated: state => {
      return state.isAuthenticated;
    },
    contentType: state => {
      return state.contentType;
    },
    showDelete: state => {
      return state.showDelete;
    },
    showAdd: state => {
      return state.showAdd;
    },
    showEdit: state => {
      return state.showEdit;
    },
    user: state => {
      return state.currentUser;
    },
    nextId: state => {
      return state.nextId;
    },
    statusMap: state => {
      return state.statusMap
    }
  },
  actions: {
    logout (context) {
      context.commit('logout');
    },
    setMovies (context, movies) {
      context.commit('setMovies', movies);
    },
    setContentType (context, newType) {
      context.commit('setContentType', newType);
    },
    setCurrentItem (context, item) {
      context.commit('setCurrentItem', item);
    },
    toggleShowDelete (context) {
      context.commit('toggleShowDelete');
    },
    toggleShowEdit (context) {
      context.commit('toggleShowEdit');
    },
    toggleShowAdd (context) {
      context.commit('toggleShowAdd');
    },
    addItem (context, newItem) {
      newItem.id = state.nextId;
      newItem.updatedAt = Date.now();
      context.commit('increment');
      context.commit('addItem', newItem);
    },
    updateItem (context, newItem) {
      context.commit('updateItem', newItem);
    },
    deleteItem (context, itemToDelete) {
      context.commit('deleteItem', itemToDelete);
    }
  },
  mutations: {
    increment (state) {
      state.nextId++;
    },
    setCurrentItem (state, item) {
      state.currentItem = item;
    },
    setMovies (state, movies) {
      state.currentUser.movies = movies;
    },
    toggleShowDelete (state) {
      state.showDelete = !state.showDelete;
    },
    toggleShowAdd (state) {
      state.showAdd = !state.showAdd;
    },
    toggleShowEdit (state) {
      state.showEdit = !state.showEdit;
    },
    setContentType (state, newType) {
      state.contentType = newType;
    },
    addItem (state, newItem) {
      if (newItem.type === 'movie') {
        state.currentUser.movies.push(newItem);
      }
    },
    deleteItem (state, itemToDelete) {
      let index = -1;
      let found = false;
      if (itemToDelete.type === 'movie') {
        state.currentUser.movies.forEach((movie, i) => {
          if (!found && movie.id === itemToDelete.id) {
            index = i;
            found = true;
          }
        });
      }
      if (index > -1) {
        state.currentUser.movies.splice(index, 1);
        state.currentItem = {};
      }
    },
    updateItem (state, newItem) {
      if (newItem.type === 'movie') {
        let index = -1;
        let found = false;
        state.currentUser.movies.forEach((movie, i) => {
          if (!found && movie.id === newItem.id) {
            index = i;
            found = true;
          }
        });
        if (index > -1) {
          newItem.updatedAt = Date.now();
          Vue.set(state.currentUser.movies, index, newItem);
          state.currentItem = {};
        }
      }
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
});

