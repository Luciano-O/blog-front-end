import React from 'react';
import { Card } from 'react-bootstrap';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostCard (props) {
  const {
    content,
    title, 
    user,
    categories,
    className,
  } = props;
  return (
    <Card className={className}>
      <Card.Header>{ user.displayName }</Card.Header>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
        {categories && categories
        .map(({id, name}) => <Link to={`/categoryposts/${id}`}>{`${name}`}</Link>)}
      </Card.Body>
    </Card>
  )
}

PostCard.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  user: propTypes.shape({
    displayName: propTypes.string.isRequired,
  }).isRequired,
  categories: propTypes.string.isRequired,
}

export default PostCard;