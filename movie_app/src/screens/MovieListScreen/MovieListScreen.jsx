import { useEffect, useState } from 'react'

import styles from './MovieListScreen.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesAsync } from '../../redux/slice/movieSlice'
import { clearSearchQuery, searchMoviesAsync } from '../../redux/slice/searchMovieSlice'
const MovieListScreen = () => {
  const dispatch = useDispatch()
  const query = useSelector(state => state.search.searchQuery)
  const { results: normalMovies } = useSelector(state => state.movies.movies)
  const searchResults = useSelector(state => state.search.searchResults)
  console.log('query', searchResults)
  useEffect(() => {
    const fetchMovieAsync = async () => {
      if (query === "") {
        try {
          // const { data } = await axios.get(`${BASEURL}?api_key=${APIKEY}`)
          // console.log(data)
          // SetMovieList(data.results)
        dispatch(clearSearchQuery())
          dispatch(fetchMoviesAsync())
        } catch (error) {

        }
      } else {
        dispatch(searchMoviesAsync(query))
      }
    }
    fetchMovieAsync()
  }, [dispatch, query])

  return (
    <div className={styles['movie-list-container']}>
      <h2>Movie List</h2>
      <div className={styles.movieList}>
        {(query === "" ? normalMovies : searchResults)?.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  )
}

export default MovieListScreen