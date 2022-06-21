import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MainPost from '../../Components/MainPost/MainPost';
import { getCategories, getRandomPosts } from '../../Services/Reqs';
import styles from './styles.module.css';

function Home() {
  const [ categories, setCategories ] = useState([]);
  const [ mainPost, setMainPost ] = useState({})

  useEffect(() => {
    const bringCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    const bringPosts = async () => {
      const posts = await getRandomPosts();
      setMainPost(posts[0])
    };
    bringPosts();
    bringCategories();
  }, [])

  return(
    <>
      <Header />
      <nav className={ styles.nav }>
        {categories && categories.map(({id, name}) =><Link key={id}>{name}</Link> )}
      </nav>
      <MainPost title={mainPost.title} content={mainPost.content} />
    </>
  )
}

export default Home