import { useState } from "react"
import './ItemCount.css'
const ItemCount = ({stock, initial, onAdd}) => {

  const [quantity, setQuantity] = useState(initial);

 

  const incrementar = ()=> {
    quantity < stock ? setQuantity(quantity + 1) : console.log("Maximo alcanzado");
  }

  const decrementar = () =>{
    quantity > initial ? setQuantity(quantity - 1) : console.log("Minimo alcanzado")
  }
  
  return (
    <div className="containerCount">
      <div className="containerContador">
        <button onClick={decrementar}> - </button>
        <p> {quantity} </p>
        <button onClick={incrementar}> + </button>
      </div>  
      <div>
        <button onClick={ onAdd(quantity)} > Agregar al Carrito</button>
      </div>
      
    </div>
  )
}

export default ItemCount
