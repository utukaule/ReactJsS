import React, { Component } from "react";
import NewsItem from "./NewsItem";
import image1 from "../images/default.png";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {
  static defalutProps = {
    country:'in',
    pageSize:8,
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePre = async () => {
    console.log("Tapped on previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ laoding: true });
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  handleNext = async () => {
    console.log("Tapped on next");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page + 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.loading && <Spinner />}
        <h1>Daily News</h1>

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4">
              <NewsItem
                title={element.title}
                description={element.description}
                urlToImage={element.urlToImage ? element.urlToImage : image1}
                url={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePre}
          >
            Previous
          </button>
          <button disabled={this.state.page +1 > (Math.ceil(this.state.totalResults)/20)}  className="btn btn-dark" onClick={this.handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
