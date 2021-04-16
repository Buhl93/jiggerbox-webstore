import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.scss'

import { fetchProducts, deleteProduct } from './../../redux/Products/products.actions'

import Button from './../forms/Button'



const mapState = ({ productsData }) => ({
    products: productsData.products
})

const AdminPage = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);

    const { data } = products;

    useEffect(() => {
        dispatch(
            fetchProducts({})
        )
    }, [])

    return (
        <div>
            <div>
                <Button>
                    <Link to='/addproduct'>
                        Add Product
                    </Link>
                </Button>
            </div>

            <div className="manageProducts">
                <table border='0' cellPadding='0' cellSpacing='0'>
                    <tbody>
                        <tr>
                            <th>
                                <h1>
                                    Manage Products
                                </h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <table border='0' cellPadding='10' cellSpacing='0'>
                                    <tbody>
                                        {(Array.isArray(products) && products.length > 0) && products.map((product, index) => {
                                            const { productName, productThumbnail, productPrice, documentID } = product;
                                            return (
                                                <>
                                                    <tr key={index} >
                                                        <td>
                                                            <img className='thumbnail' src={productThumbnail} alt="img"/>
                                                        </td>
                                                        <td>
                                                            {productName}
                                                        </td>
                                                        <td>
                                                            $ {productPrice}
                                                        </td>
                                                        

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <Button onClick={() => dispatch(deleteProduct(documentID))}>
                                                                Delete
                                                            </Button>
                                                        </td>

                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
            

        </div>
    )
}

export default AdminPage
