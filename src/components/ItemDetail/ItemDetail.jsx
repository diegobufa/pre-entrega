import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'

const ItemDetail = ({id, nombre, precio, img, stock, info}) => {
  const [ agregarCantidad, setAgregarCantidad ] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

 const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio,img};
    agregarProducto(item, cantidad);
  }
  return (
    
   <div className="contenedorDetail">
      <div className="contenedorItem">
            <h2> {nombre}</h2>
                    
            <div className="contenedorImgBtn">
              <img src={img} alt={nombre} />
              <div className="contenedorTextBtn">
                <h3>${precio}</h3> 
                <p>{info}</p>
                {
                agregarCantidad > 0 ? (< Link className="miBtn" to='/cart'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad}/>)
              }
              </div> 
            </div>         
      </div> 
   </div>   
    
  )
}

export default ItemDetail
