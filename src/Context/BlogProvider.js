import React, { useState } from 'react';
import propTypes from 'prop-types';
import BlogContext from './BlogContext';

function BlogProvider({ children }) {
  const [token, setToken] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});

  const objValue = {
    token,
    setToken,
    isLogged,
    setIsLogged,
    user,
    setUser,
  };

  return (
    <BlogContext.Provider value={ objValue }>
      {children}
    </BlogContext.Provider>
  );
}

BlogProvider.propTypes = {
  children: propTypes.shape({}).isRequired
}

export default BlogProvider;