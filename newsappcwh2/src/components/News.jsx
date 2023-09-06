import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defalut from "../images/default.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defalutProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    // we mention initial state in constructor using this state
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.setState({ loading: true });
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=1&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({ loading: true });
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false,
    // });
    // console.log(parsedData);
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
    //   this.state.page - 1
    // }&pagesize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // this.setState({loading:true})
    // let parsedData = await data.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
    //     this.state.page + 1
    //   }&pagesize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   this.setState({loading:true})
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading:false
    //   });
    // }
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  fetchMore = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=d918dae9d68446a4af95a77045dda5b2&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <>
      <h1 className="text-center">Daily News</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length !== this.totalResults}
          loadier={<Spinner/>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((elements) => (
                <div className="col-md-3  my-3" key={elements.url}>
                  <NewsItem
                    title={elements.title ? elements.title.slice(0, 45) : ""}
                    description={
                      elements.description
                        ? elements.description.slice(0, 85)
                        : ""
                    }
                    imageUrl={
                      elements.urlToImage ? elements.urlToImage : defalut
                    }
                    newsUrl={elements.url}
                    author={elements.author}
                    date={elements.publishedAt}
                    source={elements.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container mt-5 d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}
