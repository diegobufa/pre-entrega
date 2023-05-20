import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "../asses/carrito.png";
  return (
    <div className="carritoImage">
        <strong>10</strong>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
        
    </div>
  )
}

export default CartWidget
