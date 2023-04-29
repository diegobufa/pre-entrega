import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "./carrito.png";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        <p>10</p>
    </div>
  )
}

export default CartWidget
