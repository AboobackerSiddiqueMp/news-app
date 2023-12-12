import React, { useEffect, useState } from 'react';
import News1 from './News1';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../css/news.css';

function NewsBody(props) {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const totalPages = Math.ceil(totalPage / 12);

  const fetchMoreData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=55885140645b4bf9ad00f6f26e0dcc85&page=${page}&pageSize=12`
      );

      const result = await response.json();
      setNews((prevNews) => [...prevNews, ...result.articles]);
      setLoading(false);
      setTotalPage(result.totalResults);
    } catch (error) {
      console.error('Error fetching more data:', error);
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (page >= totalPages) {
      setLoading(false)
      return;
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Reset page to 1 and clear news when category changes
    setPage(1);
    setNews([]);
  }, [props.category]);

  useEffect(() => {
    fetchMoreData();
  }, [page, props.category]);

  return (
    <div>
      <InfiniteScroll
        dataLength={news.length}
        next={handleNext}
        hasMore={page < totalPages}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b></b>
          </p>
        }
        style={{ overflow: 'hidden' }}
      >
        <div className="container" >
          <div className="row d-flex align-items-center justify-content-center">
            <h1 style={{color:'white',marginLeft:'130px'}}>News Monkey-Top {props.name} News</h1>
            {news.map((data, index) => (
              <div className="col-md-4 d-flex col-s-1 align-items-center justify-content-center" key={index}>
                <News1 title={data.title} img={data.urlToImage} url={data.url} source={data.source.name}></News1>
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default NewsBody;
