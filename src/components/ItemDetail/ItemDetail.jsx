import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [ agregarCantidad, setAgregarCantidad ] = useState();

  const {agregarProducto} = useContext(CarritoContext);

  function manejadorCantidad  (cantidad) {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio};
    agregarProducto(item, cantidad);
  }
  return (
    <>
    <div className="contenedor-detail">
       <div className="contenedorItem">
        <h2> {nombre}</h2>
        <h3>${precio}</h3>
        <h3> Id: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea facilis corporis nisi reprehenderit commodi ipsa repellat unde soluta alias. Quia repellat et magnam atque aperiam ab, rem tempore voluptatum.</p>
        <img src={img} alt={nombre} />
       
        {
          agregarCantidad > 0 ? (< Link to='/cart'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad}/>)
        }
        
        </div> 
    </div>
    
    </>
    
    
  )
}

export default ItemDetail
