import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, urlToImage,url} = this.props;
    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
            <img src={urlToImage} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="/NewsItem" onClick={url} class="btn btn-primary">More...</a>
            </div>
            </div>
      </div>
    )
  }
}
