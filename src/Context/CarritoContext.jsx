import {useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    totalCantidad: 0

});

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito ] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalCantidad, setTotalCantidad] = useState(0);    
    

    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)
        
        if(!productoExistente){
            setCarrito(prev => [...prev, {item, cantidad}]);
            setTotalCantidad(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));

        }else {
            const carritoActualizado = carrito.map(prod => {
                if(prod.item.id === item.id){
                    return { ...prod, cantidad: prod.cantidad + cantidad};
                }else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
            setTotalCantidad( prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        }  
    } 
    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
        setTotalCantidad(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
    }  
    const vaciarCarrito = () => {
        setCarrito([]);
        setTotalCantidad(0);
        setTotal(0);
    }
    return (
        <CarritoContext.Provider value= {{carrito, agregarProducto, eliminarProducto, vaciarCarrito,total, totalCantidad}}>
            { children }
        </CarritoContext.Provider>
    )
}
