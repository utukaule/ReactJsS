import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defalut from "../images/default.png";
export default class News extends Component {
  constructor() {
    super();
    // we mention initial state in constructor using this state
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=1&pagesize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    // console.log(parsedData);
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page - 1
    }&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{

      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
        this.state.page + 1
      }&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          {this.state.articles.map((elements) => (
            <div className="col-md-3 my-3" key={elements.url}>
              <NewsItem
                title={elements.title ? elements.title.slice(0, 45) : ""}
                description={
                  elements.description ? elements.description.slice(0, 85) : ""
                }
                imageUrl={elements.urlToImage ? elements.urlToImage : defalut}
                newsUrl={elements.url}
              />
            </div>
          ))}
        </div>
        <div className="container mt-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
