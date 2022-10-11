import '../App.css';
import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import About from './About';
import Post from './Post';
import { PostContext } from './context/PostContext';

export default function App() {
  const { posts, setPosts } = useContext(PostContext)

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home posts={posts} setPosts={setPosts}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:id' element={<Post posts={posts} setPosts={setPosts}/>} />
      </Routes>
    </div>
  )
};



