import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Component/Post'
import PostFrom from './Component/PostForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PostFrom />
        <hr/>
        <Post />
      </header>
    </div>
  );
}

export default App;
