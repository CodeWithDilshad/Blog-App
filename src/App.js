import React from 'react';
import './CSS/App.css';
import Bloglist from './screens/Bloglist';
import Blog from './screens/Bloglist'
import CreateBlog from './screens/CreateBlog';
import Navbar from './Components/Navbar';

function App() { 
  return (
    <div className='AppJs'>
      <div className="App">
        <Navbar/> 
        <Bloglist />
      </div>
    </div>
  );
}

export default App;
