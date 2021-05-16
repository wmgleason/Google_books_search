import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import "./style.css";

// Renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// A component to render the books
export function BookListItem(props) {
  // function to handle saving book to db when save button is clicked
  const handleSaveBtn = (event) => {
    API.saveBook({
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <li className="list-group-item" key={props.id}>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.image} />
          </Col>
          <Col size="xs-8 sm-10">
            <h3>{props.title}</h3>
            <p>Written By {[props.authors].flat().join(", ")}</p>
            <p>{props.description}</p>
            <a
              rel="noreferrer noopener"
              className="btn btn-lg btn-primary input-lg view"
              target="_blank"
              href={props.link}
            >
              View
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
