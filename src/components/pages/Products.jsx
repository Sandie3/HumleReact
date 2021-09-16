import { useState, useEffect } from 'react'

import { getProduct } from '../../helpers/api'
import ProductCard from '../partials/ProductCard'

const Product = () => {

    const [ product, setProduct ] = useState()
    const [ error, setError ] = useState( false )

    useEffect( () => {

        getProduct().then( res => {

            if ( res ) {
                setProduct( res )
                setError( false )
            } else {
                setError( true )
                setProduct()
            }

        } )

    }, [] )

    return (
        <div>
            <h1>Products</h1>
            {
                product &&
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4 g-4">
                {
                    product.map( p => {
                        return (
                            <ProductCard product={ p } key={ p._id } />
                            )
                    } ).reverse()
                }
                </div>
            }
            {
                !product && !error &&
                <>
                    <h1>Loading.....</h1>
                </>
            }
            {
                error &&
                <>
                    <h1>ERROR: { error }</h1>
                </>
            }
        </div>
    )
}

export default Product
