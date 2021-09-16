import { useState, useEffect } from 'react'

import { getProductFromID } from '../../helpers/api'

const Product = ( props ) => {

    const [ product, setProduct ] = useState()
    const [ error, setError ] = useState( false )

    const productID = props.match.params.id;
    
    useEffect( () => {

        getProductFromID( productID ).then( res => {

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
            <h1>Show product</h1>
            {
                product &&
                <div className="card" style={ { padding: "20px", maxWidth: "min-content", display: "inline-block", margin: "10px" } }>
                    <img src={ "http://localhost:4010/images/" + product.image } className="figure-img img-fluid rounded" style={ { maxWidth: "200px" } } alt={ product.title } />
                    <div className="card-body">
                        <h4>{ product.title }</h4>
                        <p>{ product.content }...</p>
                        <p>Price:<strong> { product.price }</strong>,-</p>
                    </div>
                </div>
            }
            {
                !product && !error && <h1>Loading...</h1>
            }
            {
                error && <h1>ERROR: { error }</h1>
            }
        </div>
    )
}

export default Product
