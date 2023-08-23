import React, { Component } from "react";
import NewsItem from "./NewsItem";
import image from '../images/default.png'
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
    // console.log(parsedData);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4">
              <NewsItem
                title={element.title}
                description={element.description}
                urlToImage={element.urlToImage?element.urlToImage:image}
                url={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
