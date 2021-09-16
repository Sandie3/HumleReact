import {useState, useEffect} from 'react';
// Parse HTML from editor
import parse from 'html-react-parser'

// API
import {getAbout} from '../../helpers/api';

const About = () => {

    // STATE
    const [ about, setAbout ] = useState();
    const [ err, setErr ] = useState( false )

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

        })
       
    }, [  ])

    return (
        <>
            <h1>About</h1>
            {
                about &&
                <>
                    <h1>{ about.title }</h1>
                    <div>
                        { parse( about.content ) }
                    </div>
                </>
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

export default About
