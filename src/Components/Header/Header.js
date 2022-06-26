import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { Link, useHistory } from 'react-router-dom';
import house from '../../images/house-fill.svg'
import searchImg from '../../images/search.svg'
import BlogContext from '../../Context/BlogContext';
import { Button, Form } from 'react-bootstrap';

function Header() {
  const {
    isLogged,
    setIsLogged,
    setUser,
    user
  } = useContext(BlogContext);
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <div
      className={ styles.header }
    >
      <div className={styles.left}>
        {isLogged 
        ? <Button 
            size="sm" 
            type="button" 
            onClick={() => {setIsLogged(false); setUser({})}} 
            variant="outline-dark"
          >
          Log out
        </Button> 
        : <Link className={styles.register} to="/register">Register</Link>}
      </div>

      <Link to="/"><img className={styles.home} src={house} alt={ 'Home' }/></Link>
      <div className={styles.right}>
        <Form.Control
          type="search"
          className="form-control rounded"
          placeholder="Search"
          size="sm"
          value={search}
          onChange={({target}) => setSearch(target.value)}
          aria-label="Search"
        />
        <Link><img className={styles.searchImg} src={searchImg} alt="search"/></Link>
        {isLogged
        ? <p>{user.displayName}</p>
        : <Button 
            size="sm" 
            variant="outline-dark"
            onClick={() => history.push('/login')}
          >
          Log in
        </Button>
        }
      </div>
    </div>
  )
}

export default Header