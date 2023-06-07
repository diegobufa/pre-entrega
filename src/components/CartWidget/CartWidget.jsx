import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext} from '../../Context/CarritoContext'

const CartWidget = () => {

    const totalCantidad = useContext(CarritoContext);
    const imgCarrito = "../asses/carrito.png";
  return (
    < Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
      {
        totalCantidad > 0 && <span> {totalCantidad} </span>
      }
    </Link>
    
  )
}

export default CartWidget
