import { useEffect, useState } from 'react'
import axios from 'axios'
import { APIKEY, BASEURL } from '../../config/config'
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
    <div>{movieList?.map(movie => (<li>{movie.title}</li>))}</div>
  )
}

export default MovieListScreen