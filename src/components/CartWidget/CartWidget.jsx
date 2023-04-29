import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "./carrito.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        
    </div>
  )
}

export default CartWidget
