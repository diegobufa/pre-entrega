const productos = [
    
       {nombre: "Termo", precio: 500, id: "1", img: "../asses/termo.jpg", idCat: "2"},
       {nombre: "Tablas", precio: 180, id: "2", img: "../asses/tablas.jpg", idCat: "3"},
       {nombre: "Ropa Urbana", precio: 200, id: "3", img: "../asses/ropa-urb.jpg", idCat: "4"},
       {nombre: "Set Matero Argentina", precio: 250, id: "4", img: "../asses/juego-mate-arg.jpg", idCat: "2"},
       {nombre: "Jarras", precio: 290, id: "5", img: "../asses/jarras.jpg", idCat: "3"},
       {nombre: "Masetas Tematicas", precio: 300, id: "6", img: "../asses/masetas-temativas.jpg", idCat: "6"},
       {nombre: "Sillones de Jardin", precio: 280, id: "7", img: "../asses/sillones-jardin.jpg", idCat: "5"}

];

export const getProductos = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=> {
            resolve(productos);
        },2000)
    })
}


export const getUnProducto = (id)=> {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}