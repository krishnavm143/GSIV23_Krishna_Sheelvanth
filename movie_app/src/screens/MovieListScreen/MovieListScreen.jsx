import { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY, BASEURL } from '../../config/config'
import styles from './MovieListScreen.module.css'
import MovieCard from '../../components/MovieCard/MovieCard'
const MovieListScreen = () => {
  const [movieList, SetMovieList] = useState([])
  useEffect(() => {
    const fetchMovieAsync = async () => {
      try {
        const { data } = await axios.get(`${BASEURL}?api_key=${APIKEY}`)
        console.log(data)
        SetMovieList(data.results)

      } catch (error) {

      }
    }
    fetchMovieAsync()
  }, [])
  return (
    <div className={styles['movie-list-container']}>
      <h2>Movie List</h2>
      <div className={styles.movieList}>
      {movieList?.map(movie => (<MovieCard movie={movie} />))}
      </div>
    </div>
  )
}

export default MovieListScreen