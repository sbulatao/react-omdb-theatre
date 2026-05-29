import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/init'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

export default function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);

      if (user) { // user logged in
        setUser(user);
        console.log(user.email); // DEBUGGING: WILL ONLY RUN IF USER IS NOT NULL
      } 
      else { // user is signed out
          setUser(null); // CLEAR USER STATE
          // logout(); // no need to use...
      //   console.log("NO USER IS LOGGED IN.");
      }
    });

    // CLEAN UP SUBSCRIPTION ON UNMOUNT
    return() => unsubscribe();

  }, []); // EMPTY ARRAY TO RUN ONLY ON MOUNT

  function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setEmail(''); // CLEAR EMAIL FIELD
        setPassword(''); // CLEAR PASSWORD FIELD
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })
  }

  // LOGOUT ?? -- LOGOUT BUTTON IN NAV.JSX

  function login(e) {
    e.preventDefault(); // STOP PAGE RELOAD ---
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log("SUCCESS -- YOU HAVE LOGIN!!!")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log("FAILED -- WRONG PASSWORD!!!")
      })
  }

  return (
    <section id='login'>
      <div className="container">
        <div className="row">

      <div className="login__header">
        <h1 className="title">Login to OMDb Theatre</h1>
        <p className='login__para'>Login now to put your own opinions down for movies you have watched.</p>
      </div>

      <form onSubmit={login}>
        <div className="login__email--section">
          <label className='login__email--header'>Email:</label>
          <input 
            className='login__email--input' 
            type='email'
            placeholder='example@example.com' 
            required 
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>

        <div className="login__password--section">
          <label className="login__password--header">Password:
          <button type='button' className="button login__password--forgot">Forgot Password?</button>
          </label>
          <input 
            className='login__password--input' 
            type='password'
            placeholder='password' 
            required 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>

        <div className="login__continue">
          <button className='button continue' type='submit'>Continue</button>
        </div>
        
        <div className="login__register">
          <p className='register__para'>Don't have an account?
          <button type='button' className='button register' onClick={register}>Sign Up</button>
          </p>
        </div>
        {/* { loading ? 'loading...' : user.email } */}
         { loading ? 'Loading...' : (user ? `Logged in as: ${user.email}` : 'NO USER LOGGED IN') }
      </form>
    </div>
  </div>
  </section>
  )
}
