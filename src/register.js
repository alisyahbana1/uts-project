import React, {useState} from 'react';
import Header from './Header'

function register(){
    //const [name, setName]=useState('');
    //const [Password, setPassword]=useState('');
    //const [Email, setEmail]=useState('');
    
    return(
      <>
      <Header/>
    <div>
        <h1>Register</h1>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' placeholder='Name'className='form-control'/>
        <br/>
        <input type='Password' placeholder='Password'className='form-control'/>
        <br/>
        <input type='text' placeholder='Email'className='form-control'/>
        <br/>
        <button className='btn btn-primary'>Login</button>
        </div>
    </div>
    </>
    );
    }
export default register
