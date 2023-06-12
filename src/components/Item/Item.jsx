import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <figure>
        <Link to={`/item/${id}`}>
          <img className="imgProducto" src={img} alt={nombre}></img>
        </Link>
        <div className="capa">
          <h3>{nombre}</h3>
          <p>${precio} </p>
          <p className="idItem">ID: {id} </p>
          <Link className="miBtnDetalles" to={`/item/${id}`}>Ver Detalles</Link>
        </div>
      </figure>
    </div>
  );
};

export default Item;
