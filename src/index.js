
console.log('hola alexander');

const persona = {

    nombre: 'alexander',
    apellido: 'millan',
    edad: 27,
}

console.table( persona );

const arreglo = [1,2,3,4];
console.log( arreglo );

const arreglo2 = [ ...arreglo, 5 ];
console.log( arreglo2 );

const getUsuarioActivo = ( nombre ) => {

    return{

        uid: 'abc123',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('alexander martinez millan');
console.log( usuarioActivo );

// const apiKey = '14OSyua313kBBUfJYUypqcp7V8PPwZ8x';

/* -----------------------------------------------------------------------------------------------

6- dentro de la pagina web de giphy, nos vamos:

dos > giphy api > API Endpoints > Random Endpoint 

nota: es probable que esa pagina web cambien un poco asi que dejo este url:
https://developers.giphy.com/docs/api/endpoint#trending

-----------------------------------------------------------------------------------------------

7- por ejemplo, juntando el Gif URL + mi api_key mi link queda algo asi:


https://api.giphy.com/v1/gifs/random?api_key=14OSyua313kBBUfJYUypqcp7V8PPwZ8x

nota_ para una mejor vista se recomienda ver usando la extension JSON viewer usando el tema material

-------------------------------------------------------------------------------------------------------
 */

const apiKey = '14OSyua313kBBUfJYUypqcp7V8PPwZ8x';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( resp => resp.json() )
        .then( ({data}) => { //desestructurar la data

            console.log( data );
            console.log( data.images.original.url ); //asi es como nos metemos desde consola chrome
            // https://media1.giphy.com/media/1tI8DPeZ3DtJna4olI/giphy.gif?cid=e9ea52aa37bcad86ce7246b152a6d13a2825f49e3e1f4e61&rid=giphy.gif&ct=g

            const { url } = data.images.original;

            const img = document.createElement('img');
            img.src = url;
            document.body.append( img );

        })
        .catch( console.warn );

        

// peticion.then( resp => resp.json() )
// .then( ({data}) => {

//     console.log( data.images.original.url ); //asi es como nos metemos desde consola chrome
//     // https://media1.giphy.com/media/1tI8DPeZ3DtJna4olI/giphy.gif?cid=e9ea52aa37bcad86ce7246b152a6d13a2825f49e3e1f4e61&rid=giphy.gif&ct=g

// })
// .catch( console.warn );

/* 
peticion.then( (resp) => {

    // console.log( resp );

    resp.json().then( (data) => {

        console.log( data );
    });


}).catch( console.warn ); 
*/


// const apiKey2 = '14OSyua313kBBUfJYUypqcp7V8PPwZ8x';

// const peticion2 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey2}`);

// peticion2.then( resp => resp.json() )
//         .then( ({data}) => { //desestructurar la data

//             console.log( data );
//             console.log( data.images.original.url ); //asi es como nos metemos desde consola chrome
//             // https://media1.giphy.com/media/1tI8DPeZ3DtJna4olI/giphy.gif?cid=e9ea52aa37bcad86ce7246b152a6d13a2825f49e3e1f4e61&rid=giphy.gif&ct=g

//             const { url } = data.images.original;

//             const img = document.createElement('img');
//             img.src = url;
//             document.body.append( img );

//         })
//         .catch( console.warn );


const getImagen = async() => {

   try {
    
    const apiKey2 = '14OSyua313kBBUfJYUypqcp7V8PPwZ8x';

    const resp2 = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey2}`);

    const data = await resp2.json(); //data se puede desestructurar para no usar luego data.data, sino que se usa solo data
    
    console.log( data );
    console.log( data.data.images.original.url );

    const { url: imagenGift } = data.data.images.original;
    console.log( imagenGift );

    const img = document.createElement('img');
    img.src = imagenGift;
    document.body.append( img );
    
    
   } catch (error) {

    console.error( error );
    
   }


}

getImagen();