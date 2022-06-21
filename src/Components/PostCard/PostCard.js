import React from 'react';
import { Card } from 'react-bootstrap';

function PostCard (props) {
  const {
    content,
    title, 
    user
  } = props;
  return (
    <Card>
      <Card.Header>{ user.displayName }</Card.Header>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PostCard;