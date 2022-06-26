import React from 'react';
import { Card } from 'react-bootstrap';

function SecondaryPost (props) {
  const {
    title,
    content,
    className,
  } = props;

  return (
    <Card className={className}>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SecondaryPost;
