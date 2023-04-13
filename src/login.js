import Header from './Header'
function login(){
    return(
    <div>
        <Header/>
        <h1>Login</h1>
        <br/>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' placeholder='Email'className='form-control'/>
        <br/>
        <input type='Password' placeholder='Password'className='form-control'/>
        <br/>
        <button className='btn btn-primary'>Login</button>
        </div>
    </div>
    )
}
export default login
