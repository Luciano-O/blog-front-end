import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MainPost (props) {
  const {
    title,
    content,
  } = props;
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{ title }</Card.Title>
        <Card.Text>{ content }</Card.Text>
        <Button variant="outline-primary">Primary</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default MainPost;