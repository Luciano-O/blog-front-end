import React from 'react';
import propTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import styles from './styles.module.css';

function MainPost (props) {
  const {
    title,
    content,
    className,
    user,
    categories,
  } = props;
  return (
    <Card className={`text-center ${className}`}>
      <Card.Header className={styles.header}>{user && user.displayName}</Card.Header>
      <Card.Body className={styles.body}>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
      <Card.Footer className={`text-muted ${styles.footer}`}>
        {categories && categories.map(({name, id}) => <span key={id}>{name}</span>)}
      </Card.Footer>
    </Card>
  )
}

MainPost.propTypes = {
    title: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
    user: propTypes.string.isRequired,
    categories: propTypes.string.isRequired,
}

export default MainPost;