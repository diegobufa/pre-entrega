import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";

const CartItem = ({item, cantidad }) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <div>
            console.log(item.nombre)
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad}</p>
            <p> Precio: {item.precio}</p>
            <button onClick={()=> eliminarProducto(item.id)}>Eliminar Producto </button>
        </div>
    )
}

export default CartItem