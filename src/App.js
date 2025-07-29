// import logo from './logo.svg';
import './App.css';
import News from './Components/News';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes >
            <Route path="/" element={<News category="general" />}></Route>
            <Route path="/business" element={<News category="business" />}></Route>
            <Route path="/entertainment" element={<News category="entertainment" />}></Route>
            <Route path="/health" element={<News category="health" />}></Route>
            <Route path="/science" element={<News category="science" />}></Route>
            <Route path="/sports" element={<News category="sports" />}></Route>
            <Route path="/technology" element={<News category="technology" />}></Route>
            
          </Routes >
        </Router>
      </>
    )
  }
}

