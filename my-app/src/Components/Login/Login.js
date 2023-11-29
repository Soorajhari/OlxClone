import React,{useContext,useState,} from 'react';
import { useNavigate  } from 'react-router-dom';
import {firebaseContexts} from '../../store/firebaseContext'

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {firebase} = useContext(firebaseContexts)
    const navigate=useNavigate()
  
    const handleLogin = (e) => {
      e.preventDefault() 
      firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        // alert('Logged In')
        navigate('/')

      }).catch((error)=>{
        alert(error.message)
      })
    }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
          value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
