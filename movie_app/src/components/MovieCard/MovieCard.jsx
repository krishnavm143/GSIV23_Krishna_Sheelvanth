import { IMGURL } from '../../config/config'
import styles from './MovieCard.module.css'
const MovieCard = ({ movie }) => {
  console.log(movie)
  return (
    <div className={styles['movie-card']}>
      <div className={styles.cardimage}>
        <img src={`${IMGURL}/${movie.backdrop_path}`} alt={movie.original_title} srcset="" />
      </div>
      <div className={styles["title-rating"]}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.rating}>{movie.vote_average}</div>
      </div>
      <div className={styles.description}>{movie.overview}</div>
    </div>
  )
}

export default MovieCard