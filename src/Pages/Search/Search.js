import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import PostCard from '../../Components/PostCard/PostCard';
import { getAllPosts, getByQuery } from '../../Utils/Reqs';
import styles from './styles.module.css';

function Search ({match}) {
  const [ posts, setPosts ] = useState([]);
  const { query } = match.params

  useEffect(() => {
    const bringPosts = async () => {
      if(query){
        const response = await getByQuery(query);
        setPosts(response)
      } 
      const response = await getAllPosts();
      setPosts(response);
    }
    bringPosts();
  }, [query])

  return (
    <>
      <Header />
      <main className={styles.main}>
        { posts.map(({id, title, content, user, categories}) => (
          <PostCard 
            categories={categories} 
            key={id}
            className={styles.card}
            title={title} 
            content={content} 
            user={user}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}

Search.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      query: propTypes.string
    }).isRequired
  }).isRequired
}

export default Search;