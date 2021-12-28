import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './Pagination';

const App = () => {
  const [data, setData] = useState([]);
  const [perPage, setPerpage] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setPerpage(res.data.slice(0, 10));
    });

  }, [])
  const pageHandler = (pageNumber) => {
    setPerpage(data.slice(pageNumber*10)+10,pageNumber*10);

  }

  return (
    <div clssName="APP">
      {data.length >= 1 ?
        <div>
          {perPage.map(post => <div className="post">{post.title}</div>)} <br />
          <Pagination data={data}pageHandler={pageHandler} />

        </div> :
        <p>notloading</p>



    }


    </div>
  );
}

export default App;
