import '../App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Post from './Post';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </div>
  )
};



