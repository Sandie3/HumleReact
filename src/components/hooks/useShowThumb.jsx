import { useState } from 'react'

const useShowThumb = () => {

    const [ thumb, setThumb ] = useState()

    const makeThumb = file => {

        let reader = new FileReader();

        reader.onload = ( r ) => {
            setThumb( r.target.result )
        }

        reader.readAsDataURL( file ) //

    }

    return [ thumb, makeThumb ]

}

export default useShowThumb
