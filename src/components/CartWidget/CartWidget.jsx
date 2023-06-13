import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext} from '../../Context/CarritoContext'

const CartWidget = () => {

    const cantidadTotal = useContext(CarritoContext);
    const imgCarrito = "../asses/carrito.png";
  return (
    < Link to='/cart'>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
      {
        cantidadTotal > 0 && <span> {cantidadTotal} </span>
      }
    </Link>
    
  )
}

export default CartWidget
