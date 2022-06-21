import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import PostCard from '../../Components/PostCard/PostCard';
import { getCategoryPosts } from '../../Services/Reqs';

function CategoryPosts ({match}) {
  const { id } = match.params
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getCategoryPosts(id)
      setPosts(posts)
    }
    getPosts();
  }, [])

  return(
    <>
      <Header />
      { posts.map(({title, content, user}) => (
        <PostCard title={title} content={content} user={user} />
      ))}
    </>
  )
}

export default CategoryPosts;