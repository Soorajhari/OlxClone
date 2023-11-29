import React,{useContext, useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/Signup';
import Login from './pages/Login.js'
import Home from './pages/Home';
import Craete from './pages/Create'
import View from './Components/View/View';
import { AuthContext ,firebaseContexts} from './store/firebaseContext';
import Post from './store/postContext';
// import Login from './Components/Login/Login';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(firebaseContexts)
  useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
  })
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create" element={<Craete/>} />
        <Route path="/view" element={<View/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;