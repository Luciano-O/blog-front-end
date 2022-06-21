import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import MainPost from '../../Components/MainPost/MainPost';
import SecondaryPost from '../../Components/SecondaryPost/SecondaryPost';
import { getCategories, getRandomPosts } from '../../Services/Reqs';
import styles from './styles.module.css';

function Home() {
  const [ categories, setCategories ] = useState([]);
  const [ mainPost, setMainPost ] = useState({});
  const [ secPost, setSecPost ] = useState([]);
  const [ secPost2, setSecPost2 ] = useState([])

  useEffect(() => {
    const bringCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    const bringPosts = async () => {
      const posts = await getRandomPosts();
      setMainPost(posts[0]);
      setSecPost(posts[1]);
      setSecPost2(posts[2]);
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
      <SecondaryPost title={ secPost.title } content={ secPost.content } />
      <SecondaryPost title={ secPost2.title } content={ secPost2.content } />
    </>
  )
}

export default Home