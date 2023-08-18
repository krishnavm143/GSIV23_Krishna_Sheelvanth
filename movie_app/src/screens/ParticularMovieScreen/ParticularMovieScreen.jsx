import axios from 'axios';
import styles from './ParticularMovieScreen.module.css';
import { APIKEY, IMGURL, PARTURL } from '../../config/config';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParticularMovie } from '../../redux/slice/movieDetailSlice';

const ParticularMovieScreen = () => {
  const dispatch= useDispatch()
  const movie=useSelector(state=>state.movie.movie)
  const {status}=useSelector(state=>state.movie)
  console.log('movie',status)
  const [showAll, setShowAll] = useState(false);
  const { id: movieId } = useParams();
  // const [movie, setMovie] = useState({});
  const [directorName, SetDIrectorName] = useState("");
  const [cast, SetCast] = useState([]);
  const maxToShow = 4;

  useEffect(() => {
    const fetchParticularMovieAsync = async () => {
      try {
        // const { data } = await axios.get(`${PARTURL}/${movieId}?api_key=${APIKEY}`);
        // setMovie(data);
        dispatch(fetchParticularMovie(movieId))
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
    fetchParticularMovieAsync();

    const fetchDirectorName = async () => {
      try {
        const { data } = await axios.get(`${PARTURL}/${movieId}/credits?api_key=${APIKEY}`);
        const _director = data.crew.find(c => c.job === "Director");
        const _cast = data.cast.map(cast => ({ id: cast.cast_id, department: cast.known_for_department, name: cast.name }));
        SetCast(_cast);
        SetDIrectorName(_director);
      } catch (error) {
        console.error('Error fetching director and cast data:', error);
      }
    };
    fetchDirectorName();
  }, [movieId,dispatch]);

  if(status==="loading"){
    return <>...Loading...</>
  }
  if(status==="error"){
    return <>{alert('some thing error occured')}</>
  }

  return (
    <>
      <div className={styles["movie-container"]}>
        <div className={styles["movie-image"]}>
          <img src={`${IMGURL}/${movie.poster_path}`} alt={movie.original_title} />
        </div>
        <div className={styles["movie-title-description"]}>
          <div className={styles.titlecontainer}>
            <div className={styles.title}>{movie.title} ({movie.vote_average})</div>
            <div className={styles["year-length"]}>Release date:{new Date(movie.release_date).toLocaleDateString('en')} | Time: {movie.runtime / 60} hr | Director: {directorName.name}</div>
            <div className={styles.cast}>
              Cast : {cast.slice(0, maxToShow).map(c => (
                <span className={styles['cast-name']} key={c.id}>{c.name}</span>
              ))}
            </div>
          </div>
          <div className={styles.description}>Description: {movie.overview}</div>
        </div>
      </div>
    </>
  );
};

export default ParticularMovieScreen;
