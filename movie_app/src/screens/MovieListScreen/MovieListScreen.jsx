import { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY, BASEURL } from '../../config/config'
import styles from './MovieListScreen.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesAsync } from '../../redux/slice/movieSlice'
const MovieListScreen = () => {
 const dispatch= useDispatch()
  // const [movieList, SetMovieList] = useState([])
  const {results}=useSelector(state=>state.movies.movies)
  console.log(results)
  useEffect(() => {
    const fetchMovieAsync = async () => {
      try {
        // const { data } = await axios.get(`${BASEURL}?api_key=${APIKEY}`)
        // console.log(data)
        // SetMovieList(data.results)
        dispatch(fetchMoviesAsync())

      } catch (error) {

      }
    }
    fetchMovieAsync()
  }, [dispatch])
  return (
    <div className={styles['movie-list-container']}>
      <h2>Movie List</h2>
      <div className={styles.movieList}>
      {results?.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
      </div>
    </div>
  )
}

export default MovieListScreen