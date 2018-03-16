import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyMovies from '@/components/movie/MyMovies'
import LoanedMovies from '@/components/movie/LoanedMovies'
import MovieWishlist from '@/components/movie/MovieWishlist'
import BorrowedMovies from '@/components/movie/BorrowedMovies'

Vue.use(Router);

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/my-movies',
      name: 'MyMovies',
      component: MyMovies
    },
    {
      path: '/loaned-movies',
      name: 'LoanedMovies',
      component: LoanedMovies
    },
    {
      path: '/movie-wishlist',
      name: 'MovieWishlist',
      component: MovieWishlist
    },
    {
      path: '/borrowed-movies',
      name: 'BorrowedMovies',
      component: BorrowedMovies
    }

  ]
})
