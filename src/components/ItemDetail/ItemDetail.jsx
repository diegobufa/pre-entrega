import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="contenedor-detail">
       <div className="contenedorItem">
        <h2> {nombre}</h2>
        <h3>${precio}</h3>
        <h3> Id: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ea facilis corporis nisi reprehenderit commodi ipsa repellat unde soluta alias. Quia repellat et magnam atque aperiam ab, rem tempore voluptatum.</p>
        <img src={img} alt={nombre} />
        <ItemCount initial={1} stock={10} onAdd={(quantity)=>{console.log("Cantidad Agregada" ,quantity)}}/>
        </div> 
    </div>
    
  )
}

export default ItemDetail
