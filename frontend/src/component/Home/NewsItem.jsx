import React, { useState } from 'react'

function NewsItem(props) {
  const[text,setText]=useState("")
  
  return (
    <div>
    <div className="card" style={{width: "18rem"}}>
<img className="card-img-top" src={props.imageUrl} alt="Card cap"/>
<div className="card-body">
<h5 className="card-title">{props.title}...</h5>
<p className="card-text">{props.description}...</p>
<a href={props.newsUrl} target="_blank" className="btn btn-sm btn-primary">Buy Now</a>
</div>
</div>
  </div>
  )
}

export default NewsItem