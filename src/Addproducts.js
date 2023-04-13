import Header from './Header';
import {useState} from 'react';
function Addproducts() {
    const [name,setName]=useState('');
    const [file,setFile]=useState('');
    const [price,setPrice]=useState('');
    const [Description,setDescription]=useState('');

    function Addproducts(){
        console.warn(name,file,price,Description);
    }
    return(
    <div>
        <Header/>
        <h1>Add products</h1>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' placeholder='Name'className='form-control'onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type='File' placeholder='File'className='form-control'onChange={(e)=>setFile(e.target.files[0])}/>
        <br/>
        <input type='text' placeholder='Price'className='form-control'onChange={(e)=>setPrice(e.target.value)}/>
        <br/>
        <input type='text' placeholder='Description'className='form-control'onChange={(e)=>setDescription(e.target.value)}/>
        <br/>
        <button className='btn btn-primary' onClick={Addproducts}>Add Product</button>
        </div>
    </div>
    )
}
export default Addproducts
