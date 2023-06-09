import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({inicial, stock,  onAdd}) => {

  const [contador, setContador] = useState(inicial);
  

  const incrementar = ()=> {
   if(contador < stock){
    setContador(contador + 1);
   }
  }
  const decrementar = () =>{
    if(contador > inicial){
      setContador(contador - 1);
    }
  }
  
  return (
    <>
      <div className="containerContador">
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
      </div>  
      <div>
        <button onClick={ onAdd(contador)} > Agregar al Carrito</button>
      </div>
      
    </>
  )
}

export default ItemCount
