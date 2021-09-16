import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

import { getProduct, deleteProduct, editProduct } from '../../helpers/api'

const ProductAdmin = () => {

    const [ product, setProduct ] = useState()
    const [ error, setError ] = useState( false )
    const [ message, setMessage ] = useState('')

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

    }, [ message ] )

    const handleDelete = ( id, title ) => {

        if (window.confirm('Are you sure you want to delede ' + title)) {
            deleteProduct( id ).then( res => {

                if ( res ) {
                    console.log( 'DELETED' )
                    setMessage( 'Product: ' + title + '<br /> with ID: ' + id + '<br /> DELETED' )
                } else {
                    console.log( 'ERROR' )
                }

            } )
        }
    }

    return (
        <div>
            <h1>Product Admin</h1>
            {
                product &&
                <>
                    <Link to="/createproduct" className="btn btn-primary btn-sm">Create product</Link>
                    <br></br>
                    <br></br>
                    <h4>{ parse( message ) }</h4>
                    <table className="table table-dark table-striped table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Content</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map( p => {
                                    return (
                                        <tr key={ p._id }>
                                            <td>{ p.title }</td>
                                            <td>{ p.content.substring( 0, 20 ) }...</td>
                                            <td><Link to={"/editproduct/" + p._id} className="btn btn-warning btn-sm">EDIT</Link></td>
                                            <td><button className="btn btn-danger btn-sm" onClick={ () => handleDelete( p._id, p.title ) }>DELETE</button></td>
                                        </tr>
                                    )
                                } ).reverse()
                            }
                        </tbody>
                    </table>
                </>
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

export default ProductAdmin
