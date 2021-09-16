import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ( props ) => {

    const p = props.product;

    return (
        <div className="col">
            <div className="card">
                <img src={ "http://localhost:4010/images/" + p.image } className="figure-img img-fluid rounded" alt={ p.title } />
                <div className="card-body">
                    <h4>{ p.title }</h4>
                    <p>{ p.content.substring( 0, 20 ) }...</p>
                    {/* <p>Price:<strong> { p.price }</strong>,-</p> */}
                    <Link to={ '/product/' + p._id }>Read more...</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
