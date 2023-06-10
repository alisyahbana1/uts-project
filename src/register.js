import Header from './Header'
import { useState } from 'react';

function register(){
    const [name, setName]= useState("");
    const [Password, setPassword]= useState("");
    const [email, setEmail]= useState("");

function register(){
      console.warn(name,Password,email);
  }
    
    return(
      <>
      <Header/>
    <div>
        <h1>Register</h1>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' value={name} onChange={(e)=>setName(e.targetvalue)} placeholder='Name'className='form-control'/>
        <br/>
        <input type='Password' value={Password} onChange={(e)=>setPassword(e.targetvalue)} placeholder='Password'className='form-control'/>
        <br/>
        <input type='text' value={email} onChange={(e)=>setEmail(e.targetvalue)} placeholder='Email'className='form-control'/>
        <br/>
        <button onClick={register} className='btn btn-primary'>Sign-Up</button>
        </div>
    </div>
    </>
    );
    }
export default register
