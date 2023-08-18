import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSearchQuery, setSearchQuery } from '../../redux/slice/searchMovieSlice';
const Header = () => {
  const [searchValue,setSearchValue]=useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const showSearchBar = location.pathname === "/"
  const handleSearchQuery = (e) => {
    setSearchValue(e.target.value)
    dispatch(setSearchQuery(searchValue))
  }
  return (
    <div className={styles['header-container']}>
      {showSearchBar
        ?
        <div className={styles["search-bar-container"]}>
          <SearchIcon style={{ color: '#9b9b9b' }} />
          <input placeholder='Search..' type="text" value={searchValue} onChange={handleSearchQuery} className={styles['input-search']} />
        </div> :
        <div className={styles["movie-detail"]}>
          Movie Detail
        </div>
      }
      <div className="homeicon">
        <Link onClick={() => (
          // eslint-disable-next-line no-sequences
          dispatch(clearSearchQuery()), setSearchValue(''))} to='/'>
          <HomeIcon style={{ color: '#d8d8d8', fontSize: '30px' }} />
        </Link>
      </div>
    </div>
  )
}

export default Header