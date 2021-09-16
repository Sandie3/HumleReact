import axios from "axios";

// ------ BASE URL ------
const api = {
    baseUrl: "http://localhost:4010/"
    // baseUrl: "https://sand-humleapi.herokuapp.com/"
}

// ********************** ABOUT **********************
// ***************************************************

// Get all
export const getAbout = async () => {

    let res = await axios.get( api.baseUrl + "about" )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// Edit from ID
export const editAbout = async ( aboutData ) => {

    let formdata = new FormData( aboutData )

    let res = await axios.put( api.baseUrl + "about/admin", formdata )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// ********************* PRODUCTS *********************
// ****************************************************

// GET all
// GET http://localhost:4010/product
export const getProduct = async () => {

    let res = await axios.get( api.baseUrl + "products" )
        .then( res => { return res.data } )
        .catch( err => { return null } )
    return res;

}

// GET from id
// GET http://localhost:4010/product/xxxx
export const getProductFromID = async ( id ) => {

    let res = await axios.get( api.baseUrl + "products/" + id )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// GET from keyword
// GET http://localhost:4010/product/search/xxxx
export const getProductFromKEY = async ( key ) => {

    let res = await axios.get( api.baseUrl + "products/search/" + key )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// POST product
// POST http://localhost:4010/product/admin
export const postProduct = async ( productData ) => {

    let formdata = new FormData( productData )

    let res = await axios.post( api.baseUrl + "products/admin", formdata )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// PUT (edit) from ID
// PUT http://localhost:4010/product/admin/xxxx
export const editProduct = async ( id, productData ) => {

    let formdata = new FormData( productData )

    let res = await axios.put( api.baseUrl + "products/admin/" + id, formdata )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// DELETE from ID
// DELETE http://localhost:4010/product/admin/xxxx
export const deleteProduct = async ( id ) => {

    let res = await axios.delete( api.baseUrl + "products/admin/" + id )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}




// ------ LOGIN ------
// ----------------------------------------------------

// Login
export const login = async ( loginData ) => {

    let formdata = new FormData( loginData )

    let res = await axios.post( api.baseUrl + "login", formdata )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// Logout
export const logout = async () => {

    let res = await axios.get( api.baseUrl + "login/logout" )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

// Logged in
export const loggedin = async () => {

    let res = await axios.get( api.baseUrl + "login/loggedin" )
        .then( res => { return res.data } )
        .catch( err => { return null } )

    return res;

}

