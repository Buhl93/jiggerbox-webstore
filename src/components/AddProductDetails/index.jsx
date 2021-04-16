import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CKeditor from 'ckeditor4-react'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import FormSelect from '../forms/FormSelect'

import { addProduct } from './../../redux/Products/products.actions'

const AddProductDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [productCategory, setProductCategory] = useState('cocktails');
    const [productName, setProductName] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addProduct({
                productCategory,
                productName,
                productThumbnail,
                productPrice,
                productDesc
            })
        )
        resetForm();
        history.push('/admin')
    }

    const resetForm = () => {
        setProductName('');
        setProductPrice('');
        setProductThumbnail('');
        setProductCategory('cocktails');
        setProductDesc('');
    }

    return (
        <div className='addNewProductForm'>
            <form onSubmit={handleSubmit}>

                <h2>Add new product</h2>

                <FormSelect
                    label='Category'
                    options={[
                        {
                            value: 'cocktails',
                            name: 'Cocktails'
                        }, {
                            value: 'accessories',
                            name: 'Accessories'
                        }, {
                            value: 'snacks',
                            name: 'Snacks'
                        }
                    ]}
                    handleChange={e => setProductCategory(e.target.value)}
                />

                <FormInput 
                    label="Name"
                    type="text"
                    value={productName}
                    handleChange={e => setProductName(e.target.value)}
                />

                <FormInput 
                    label="Main image URL"
                    type="url"
                    value={productThumbnail}
                    handleChange={e => setProductThumbnail(e.target.value)}
                />

                <FormInput 
                    label="Price"
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    value={productPrice}
                    handleChange={e => setProductPrice(e.target.value)}
                />

                <CKeditor 
                    onChange={e => setProductDesc(e.editor.getData())}>
                </CKeditor>

                <br />

                <Button type='submit'>
                    Add product
                </Button>
            </form>
            
        </div>
    )
}

export default AddProductDetails
