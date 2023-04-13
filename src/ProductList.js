import Header from './Header'
import { Table } from 'react-bootstrap'
function ProductList(){
    return(
    <div>
        <Header/>
        <h1>Product List</h1>
        <Table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
                <td>Image</td>
            </tr>
        </Table>
    </div>
    )
}
export default ProductList
