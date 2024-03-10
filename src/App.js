import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './component/Navbar'
import './App.css'

const App = () => {
  const [news,setNews] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=c98ffcc300f343139101719a92e751d2")
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles)
      })
  }, [])
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='row text-center'>
          {news.map((val) => {
              return (
                <div className='col my-4'>
                 <div className="card" style={{ width: '30rem' }}>
                   <img src={val.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                     <h5 className="card-title"><a href={val.url}>{val.title}</a></h5>
                      <p className="card-text">{val.description}</p>
                  </div>
                </div>
              </div>
          );
          })}
        </div>
      </div>
    </>
  )
}

export default App





