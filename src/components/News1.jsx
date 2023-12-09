import React from 'react'

function News1(props) {
  return (
    <div class="card mt-3" style={{ width: "18rem" }} id='card'>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {props.source}
        <span class="visually-hidden">unread messages</span>
      </span>

      <img src={props.img ? props.img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} class="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.url} class="btn btn-dark">read more</a>
      </div>
    </div>



  )
}

export default News1