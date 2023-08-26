import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defalut from "../images/default.png";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {

  static defalutProps = {
    country: 'in',
    pageSize: 8,
    category:'sports'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  

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
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading:true})
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    // console.log(parsedData);
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({loading:true})
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  handleNextClick = async () => {
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.setState({loading:true})
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-5">
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((elements) => (
            <div className="col-md-4 my-3" key={elements.url}>
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
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
