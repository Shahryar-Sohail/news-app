import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import './App.css';
import newsData from './data/newsData.json'; // Import local JSON file

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Set news data from local JSON file
    setNews(newsData);
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row text-center'>
          {news.map((val, index) => (
            <div key={index} className='col my-4'>
              <div className="card" style={{ width: '30rem' }}>
                <img src={val.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><a href={val.url}>{val.title}</a></h5>
                  <p className="card-text">{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
