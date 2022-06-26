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
  }, [id])

  return(
    <>
      <Header />
      { posts.map(({id, title, content, user}) => (
        <PostCard key={id} title={title} content={content} user={user} />
      ))}
    </>
  )
}

export default CategoryPosts;