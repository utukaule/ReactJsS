import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="title"
              description="This is news detail click on more to know more about this news"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="title"
              description="This is news detail click on more to know more about this news"
            />
          </div>
          <div className="col-md-4">
            <NewsItem
              title="title"
              description="This is news detail click on more to know more about this news"
            />
          </div>
        </div>
      </div>
    );
  }
}
