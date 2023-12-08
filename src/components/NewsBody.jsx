import React, { useEffect, useState } from 'react'
import News1 from './News1'
import Spinner from './Spinner'


function NewsBody(props) {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTOtal] = useState(0)
  const[loading,setLoading]=useState(true)
  let totalPages = Math.ceil(totalPage / 12)

  const handileNext = () => {
    if (page >= totalPages) { }
    else {
      console.log('next')
      setLoading(true)
      setPage((prevPage) => prevPage + 1);
      console.log(page)
    }

  }
  const handilePrevi = () => {
    setLoading(true)

    console.log('previous')
    let pageCount = page - 1
    setPage(pageCount)



  }
  useEffect(() => {
    setLoading(true);

    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=91cd6c9ace09415b8117e697b3a4f67a&page=${page}&pageSize=12`).then((result) => {
      result.json().then((result2) => {
        console.log(result2.articles)
        
        setNews(result2.articles)
        setLoading(false)
        setTOtal(result2.totalResults)



      })

    })
  }, [page,props.category])
  return (
    <div>
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center">
        {            loading&&<Spinner></Spinner>}            


          {
            !loading &&
            news.map((data) => (


              <div className="col-md-4 d-flex col-s-1 align-items-center justify-content-center">
                <News1 title={data.title} img={data.urlToImage} url={data.url} source={data.source.name} ></News1>
              </div>
            ))

          }


        </div>
      </div>
      <div id='buttons' className='d-flex justify-content-around mt-5 '>
        <button type="button" disabled={page <= 1} class="btn btn-dark" onClick={handilePrevi}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>previous</button>
        <button type="button" disabled={page >= totalPages} class="btn btn-dark" onClick={handileNext}>next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
        </svg></button>

      </div>

    </div>
  )
}

export default NewsBody