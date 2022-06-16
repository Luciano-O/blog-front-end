import React, { useState } from 'react';
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

export default BlogProvider;