import Header from './Header'
function Updateproducts(){
    return(
    <div>
        <Header/>
        <h1>Update Products</h1>
        <div className='col-sm-6 offset-sm-3'>
        <input type='text' placeholder='Name'className='form-control'/>
        <br/>
        <input type='text' placeholder='Price'className='form-control'/>
        <br/>
        <input type='text' placeholder='Depcription'className='form-control'/>
        <br/>
        <input type='File' placeholder='File'className='form-control'/>
        <br/>
        <button className='btn btn-primary'>Update Product</button>
        </div>
    </div>
    )
}
export default Updateproducts
