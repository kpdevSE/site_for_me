// App.js
import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/page';
import Post from './pages/Post/page';

const App = () => {


  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/posts/:id" element={<Post/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
