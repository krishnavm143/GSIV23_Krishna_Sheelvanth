import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation()
  const showSearchBar = location.pathname === "/"
  return (
    <div className={styles['header-container']}>
      {showSearchBar
        ?
        <div className={styles["search-bar-container"]}>
          <SearchIcon style={{ color: '#9b9b9b' }} />
          <input placeholder='Search..' type="text" className={styles['input-search']} />
        </div> :
        <div className={styles["movie-detail"]}>
          Movie Detail
        </div>
      }
      <div className="homeicon">
        <Link to='/'>
          <HomeIcon style={{ color: '#d8d8d8', fontSize: '30px' }} />
        </Link>
      </div>
    </div>
  )
}

export default Header