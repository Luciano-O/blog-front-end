import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header/Header';
import PostCard from '../../Components/PostCard/PostCard';
import { getAllPosts, getByQuery } from '../../Services/Reqs';
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
    </>
  )
}

export default Search;