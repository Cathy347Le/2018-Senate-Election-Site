import React, { Component } from "react";
import Article from "../Article/Article";

class ArticleList extends Component {
  render() {
    // console.log(this.props.articles);
    let articlesArray = this.props.articles.map((article, index) => {
      return <Article article={article} key={index} />;
    });
    return (
      <div>
        <h3 className="article-list-header component-header">
          Looking ahead 2020...
        </h3>
        <div className="article-list flex-container">{articlesArray}</div>
      </div>
    );
  }
}

export default ArticleList;
