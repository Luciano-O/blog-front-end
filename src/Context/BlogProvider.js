import React, { useState } from 'react';
import BlogContext from './BlogContext';

function BlogProvider({ children }) {
  const [token, setToken] = useState()

  const objValue = {
    token,
    setToken,
  };

  return (
    <BlogContext.Provider value={ objValue }>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;