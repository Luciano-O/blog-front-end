import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import house from '../../images/house-fill.svg'
import BlogContext from '../../Context/BlogContext';

function Header() {
  const {
    isLogged,
    setIsLogged,
    setUser,
    user
  } = useContext(BlogContext);

  return (
    <div
      className={ styles.header }
    > 
      {isLogged 
      ? <button ClassName={styles.sides} type="button" onClick={() => {setIsLogged(false); setUser({})}}>Log out</button> 
      : <Link ClassName={styles.sides} to="/register">Register</Link>}

      <img src={house} alt={ 'Home' }/>

      {isLogged
      ? <p className={styles.sides}>{user.displayName}</p>
      : <Link className={styles.sides} to="/login">Log in</Link>
      }
    </div>
  )
}

export default Header