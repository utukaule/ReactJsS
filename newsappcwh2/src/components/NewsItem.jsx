import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    // Creating props like in class based component...
    let { title, description, imageUrl, newsUrl} = this.props;
    
    // Creating state in class based component...
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <a href={newsUrl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
