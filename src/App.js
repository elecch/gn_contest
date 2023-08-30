import React, {useState} from 'react';
import './App.css';
import SearchPhotoes from './components/SearchPhoto';


function App() {

  return (
    <div className="App">
      <div className="container"></div>
      <h1 className="title"> 경남sw 앱 📷</h1>
      <SearchPhotoes/>
    </div>
  );
}

export default App;
