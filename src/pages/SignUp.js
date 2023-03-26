import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp(){
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();

        try {
              await axios.post('/SignUp', {
            name,
            email,
            password,

            });
        alert("Sign up successful!");
        } catch (e) {
            alert('Registration failed. Please try again later')
        }
     
    }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Sign Up</h1>
        <form className="max-w-2xl mx-auto" onSubmit={registerUser}>
          <input type={"text"} 
          placeholder="John Doe" 
          value={name}
          onChange={ev => setName(ev.target.value)} />
          <input type={"email"} 
          placeholder="your@email.com" 
          value={email}
          onChange={ev => setEmail(ev.target.value)}/>
          <input type={"password"}
          placeholder="password" 
          value={password}
          onChange={ev => setPassword(ev.target.value)}/>
          <button className="primary">Sign Up</button>
          <div className="text-center py-2 text-gray-500">Already got an account? 
            <Link className="underline text" to={'/SignIn'}> 
                Sign In
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};


