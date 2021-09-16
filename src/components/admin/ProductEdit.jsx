import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useShowThumb from '../hooks/useShowThumb'

import { getProductFromID, editProduct } from '../../helpers/api'

const ProductEdit = ( props ) => {

    const [ message, setMessage ] = useState()
    const [ product, setProduct ] = useState()
    const [ error, setError ] = useState( false )
    const [ thumb, makeThumb ] = useShowThumb();

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

    }, [ message ] )

    const handleSubmit = e => {
        e.preventDefault();

        editProduct( productID, e.target ).then( res => {

            if ( res ) {

                console.log( res )
                setMessage( 'Product edited!' )
                setError( false )

            } else {

                console.log( 'ERROR' )
                setMessage( 'Error!' )
                setError( true )

            }

        } )

    }

    return (
        <>
            <h1>Edit product</h1>
            <Link to="/productadmin" className="btn btn-primary btn-sm">Back</Link>
            <br></br>
            <br></br>
            { message && <h2 className="warning">{ message }</h2> }
            {
                product &&
                <form className="" onSubmit={ handleSubmit }>
                    <div className="col-2">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" defaultValue={ product.title } className="form-control" id="title" name="title" required />
                    </div>
                    <br />
                    <div className="col-3">
                        <label htmlFor="content" className="form-label">content</label>
                        <textarea defaultValue={ product.content } className="form-control" id="content" name="content" required></textarea>
                    </div>
                    <br />
                    <div className="col-2">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" defaultValue={ product.price } className="form-control" id="price" name="price" />
                    </div>
                    <br />
                    <div className="col-2">
                        <label htmlFor="image" className="form-label">Add new image</label>
                        <input type="file" className="form-control" id="image" name="image" onChange={ e => makeThumb( e.target.files[ 0 ] ) } />
                        <br />
                        {
                            // if there is a thumbnail then show
                            thumb &&
                            <>
                                <label>New image</label>
                                <img src={ thumb } className="img-thumbnail" alt="Thumbnail" />
                                <br />
                            </>
                        }
                        <br />
                        <label className="form-label">Current image</label>
                        <img src={ "http://localhost:4010/images/" + product.image } className="img-thumbnail" alt="Thumbnail" />
                    </div>
                    <br></br>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Edit</button>
                    </div>
                </form>
            }
            {
                !product && !error && <h2>Loading....</h2>
            }
            {
                error && <h2>ERROR!</h2>
            }
        </>
    )
}

export default ProductEdit
