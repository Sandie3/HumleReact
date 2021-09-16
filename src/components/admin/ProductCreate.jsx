import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useShowThumb from '../hooks/useShowThumb'

import { postProduct } from '../../helpers/api'

const ProductCreate = () => {

    const [ message, setMessage ] = useState()
    const [ thumb, makeThumb ] = useShowThumb();

    const handleSubmit = e => {
        e.preventDefault();

        postProduct( e.target ).then( res => {

            if ( res ) {

                console.log( res )
                setMessage( 'New product' + '' + 'created' )

            } else {

                console.log( 'ERROR' )
                setMessage( 'Error!' )

            }

        } )

    }

    return (
        <>
            <h1>Create new product</h1>
            <Link to="/productadmin" className="btn btn-primary btn-sm">Back</Link>
            <br></br>
            <br></br>
            { message && <h2 className="warning">{ message }</h2> }
            <form className="" onSubmit={ handleSubmit }>
                <div className="col-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" required />
                </div>
                <div className="col-3">
                    <label htmlFor="content" className="form-label">content</label>
                    <textarea className="form-control" id="content" name="content" required></textarea>
                </div>
                <div className="col-2">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name="price" />
                </div>
                <div className="col-2">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input className="form-control" type="file" id="image" name="image" onChange={ e => makeThumb( e.target.files[ 0 ] ) } required />
                    <br />
                    {
                        // if there is a thumbnail then show
                        thumb &&
                        <img src={ thumb } className="img-thumbnail" alt="Thumbnail" />
                    }
                </div>
                <br></br>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}

export default ProductCreate
