import React, { Component } from "react";
import NewsItem from "./NewsItem";
import defalut from '../images/default.png'
export default class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading:false,
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d918dae9d68446a4af95a77045dda5b2";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles})
    // console.log(parsedData); 
  }
  render() {
    return (
      <div className="container my-5">
        <div className="row">
        {this.state.articles.map((elements)=>(

          <div className="col-md-3" key={elements.url}>
            <NewsItem
            
              title={elements.title?elements.title.slice(0,45):""}
              description={elements.description?elements.description.slice(0,85):""}
              imageUrl ={elements.urlToImage?elements.urlToImage:defalut}
              newsUrl = {elements.url}
            />
          </div>
        ))}
        </div>
      </div>
    );
  }
}
