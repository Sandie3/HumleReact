import { useState, useEffect } from 'react';
import Editor from 'ckeditor5-custom-build';
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// API
import { getAbout, editAbout } from '../../helpers/api';

const Aboutadmin = () => {

    // STATE
    const [ about, setAbout ] = useState();
    const [ err, setErr ] = useState( false )
    // Editor state
    const [ editor, setEditor ] = useState()
    // Message on update
    const [ message, setMessage ] = useState()

    useEffect( () => {

        getAbout().then( res => {

            if ( res ) {
                // Data
                setAbout( res )
                setErr( false )
            } else {
                // No data
                setErr( true )
                setAbout()
            }

        } )

    }, [] )

    const handleSubmit = ( e ) => {
        e.preventDefault() // Stop reload of page

        // Call API PUT
        editAbout( e.target ).then( data => {

            if ( data ) {
                // Data
                setMessage( "Edited content successfully" )

            } else {
                // No data
                setMessage( "Error while editing!" )
            }

        } )

    }

    return (
        <>
            <h1>Edit about</h1>
            <h2>{ message }</h2>
            {
                about &&
                <form onSubmit={ handleSubmit }>
                    <label>
                        Title:
                        <br></br>
                        <input type="text" name="title" defaultValue={ about.title } />
                    </label>
                    <br></br>
                    <label>
                        Content:
                        <br></br>
                        <textarea name="content" defaultValue={ editor } style={ { display: "none" } } cols="30" rows="10"></textarea>
                    </label>
                    <CKEditor
                        editor={ Editor }
                        data={ about.content }
                        config={ {
                            toolbar: [ 'bold', 'italic', 'fontSize', 'link', '|', 'fontColor', 'fontBackgroundColor', '|', 'bulletedList', 'numberedList', 'blockQuote' ]
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setEditor( data )
                            console.log( { event, editor, data } );
                        } }
                        // onReady={ editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log( 'Editor is ready to use!', editor );
                        // } }
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                    />

                    <br></br>
                    <input type="submit" value="Edit" />
                </form>
            }

            {
                !about && !err &&
                <>
                    <h1>Loading...</h1>
                </>
            }

            {
                err &&
                <>
                    <h1>Error!</h1>
                </>
            }
        </>
    )
}

export default Aboutadmin
