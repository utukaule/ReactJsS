import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    // Creating props like in class based component...
    let { title, description, imageUrl, newsUrl, author,date,source} = this.props;
    
    // Creating state in class based component...
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            <span style={{left:'90%'}} className="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
    <small>{source}</small> 
  </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text" style={{fontSize:'10px'}}>by {author == null?"unknown":author} on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
