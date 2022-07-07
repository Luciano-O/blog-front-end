import React from 'react';
import { Card } from 'react-bootstrap';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function SecondaryPost (props) {
  const {
    title,
    content,
    className,
    user,
    categories,
  } = props;

  return (
    <Card className={className}>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user && user.displayName}</Card.Subtitle>
        <Card.Text>{ content }</Card.Text>
        {categories && categories
        .map(({id, name}) => <Link className={styles.category} to={`/categoryposts/${id}`}>{`${name}`}</Link>)}
      </Card.Body>
    </Card>
  )
}

SecondaryPost.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
  }).isRequired,
  categories: propTypes.string.isRequired,
}

export default SecondaryPost;
