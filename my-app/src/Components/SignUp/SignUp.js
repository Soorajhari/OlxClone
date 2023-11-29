import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./SignUp.css";
import { auth, db } from "../../firebase/config";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseContexts } from "../../store/firebaseContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Useremail, setUseremail] = useState("");
  const [Userphone, setUserphone] = useState("");
  const [Userpass, setUserpass] = useState("");
  const { app } = useContext(firebaseContexts);

  // ...
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(auth);
    createUserWithEmailAndPassword(auth, Useremail, Userpass).then((result) => {
      result.user.updateProfile({ displayName: Username }).then(() => {
        db.firestore()
          .collection("users")
          .add({
            id: result.user.uid,
            username: Username,
            phone: Userphone,
          })
          .then(() => {
            navigate("/login");
          });
      });
    });
    // ...
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            value={Useremail}
            onChange={(e) => setUseremail(e.target.value)}
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            value={Userphone}
            onChange={(e) => setUserphone(e.target.value)}
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={Userpass}
            onChange={(e) => setUserpass(e.target.value)}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/">Login</a>
      </div>
    </div>
  );
}
