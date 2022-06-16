import React, { useState, useEffect, useContext } from 'react';
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
      className="Header"
    > 
      {isLogged 
      ? <button type="button" onClick={() => {setIsLogged(false); setUser({})}}>Log out</button> 
      : <Link to="/register">Register</Link>}

      <img src={house} alt={ 'Home' }/>

      {isLogged
      ? user.displayName
      : <Link to="/login">Log in</Link>
      }
    </div>
  )
}

export default Header