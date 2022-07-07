import React, { useState, useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../../Components/Header/Header';
import MainPost from '../../Components/MainPost/MainPost';
import SecondaryPost from '../../Components/SecondaryPost/SecondaryPost';
import BlogContext from '../../Context/BlogContext';
import { getCategories, getRandomPosts } from '../../Utils/Reqs';
import styles from './styles.module.css';
import Footer from '../../Components/Footer/Footer';

function Home() {
  const [ categories, setCategories ] = useState([]);
  const [ mainPost, setMainPost ] = useState({});
  const [ secPost, setSecPost ] = useState([]);
  const [ secPost2, setSecPost2 ] = useState([]);
  const [ btnDisable, setBtnDisable ] = useState(true);
  const { isLogged } = useContext(BlogContext);
  const history = useHistory();

  useEffect(() => {
    const bringCategories = async () => {
      const finalCategories = await getCategories();
      setCategories(finalCategories);
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

  useEffect(() => {
    const testLogged = () => {
      if(isLogged) return setBtnDisable(false)
      return setBtnDisable(true)
    };
    testLogged();
  }, [isLogged])

  return(
    <>
      <Header />
      <nav className={ styles.nav }>
        {categories && categories
          .map(({id, name}) =><Link className={styles.category} to={`/categoryposts/${id}`} key={id}>{name}</Link> )}
      </nav>
      <main>
        <MainPost 
          className={styles.mainPost}
          title={mainPost.title}
          content={mainPost.content}
          categories={mainPost.categories}
          user={mainPost.user}
        />
          <Row>
            <Col>
              <SecondaryPost 
                className={styles.secPost}
                title={ secPost.title }
                content={ secPost.content }
                user={secPost.user}
                categories={secPost.categories}
              />
            </Col>
            <Col>
              <SecondaryPost 
                className={styles.secPost}
                title={ secPost2.title }
                content={ secPost2.content }
                user={secPost2.user}
                categories={secPost2.categories}
              />
            </Col>
          </Row>
      </main>
      <Button 
        variant="outline-primary"
        onClick={() => history.push('/newpost')}
        disabled={btnDisable}
      >
        Primary
      </Button>{' '}
      <Footer />
    </>
  )
}

export default Home