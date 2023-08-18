import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={styles['header-container']}>
      <div className={styles["search-bar-container"]}>
        <SearchIcon />
        <input placeholder='Search..' type="text" className={styles['input-search']} />
      </div>
      <div className="homeicon">
        <Link to='/'>
        <HomeIcon style={{color:'#d8d8d8',fontSize:'30px'}}/>
        </Link>
      </div>
    </div>
  )
}

export default Header