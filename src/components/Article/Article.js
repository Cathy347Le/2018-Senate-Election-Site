import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./Article.css";

class Article extends Component {
  render() {
    // console.log(this.props.article);
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Link href={this.props.article.article_link}>
          <Card.Img variant="top" src={this.props.article.article_pic} />
        </Card.Link>
        <Card.Body>
          <Card.Title>{this.props.article.headline}</Card.Title>
          <Card.Text>{this.props.article.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Article;
