import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
      const {title,description,imageurl,newsurl,published,author}=this.props
    return (
        <div className="card" style={{width:"18rem"}}>
        <img src={imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsurl} className="btn btn-primary">Go somewhere</a>
          <div style={{ fontSize: "14px" }}>By {author ? author : "Unknown"} on {new Date(published).toGMTString()}</div>
        </div>
      </div>
    )
  }
}

export default Newsitem
