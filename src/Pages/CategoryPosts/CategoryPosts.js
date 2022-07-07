import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import PostCard from '../../Components/PostCard/PostCard';
import { getCategoryPosts } from '../../Utils/Reqs';

function CategoryPosts ({match}) {
  const { id } = match.params
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const categoryPosts = await getCategoryPosts(id);
      setPosts(categoryPosts)
    }
    getPosts()
  }, [id])

  return(
    <>
      <Header />
      { posts.map(({postId, title, content, user}) => (
        <PostCard key={postId} title={title} content={content} user={user} />
      ))}
    </>
  )
}

CategoryPosts.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired
}

export default CategoryPosts;