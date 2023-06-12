import { useState,  useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {
    const {carrito, vaciarCarrito,total, cantidadTotal } = useContext(CarritoContext);
    const [ nombre, setNombre] = useState("");
    const [ apellido, setApellido] = useState("");
    const [ telefono, setTelefono] = useState("");
    const [ email, setEmail] = useState("");
    const [ emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ error, setError ] = useState("");
    const [ ordenId, setOrdenId] = useState("");


    const manejadorSubmit = (event) => {
        event.preventDefault();

        if( !nombre || !apellido || !telefono || !email || !emailConfirmacion ){
            setError("Por Favor Complete los Campos Requeridos.")
            return;
        }
        if(email !== emailConfirmacion){
            setError("Los email no coinciden.");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"),orden)
        .then((docRef)=> {
            setOrdenId(docRef.id);
            vaciarCarrito();
        })
        .catch((error)=> {
            setError("Se Produjo un error al crear la orden, vuelva a intentarlo.", error)
        })
    }
    return (
        <div>
            <h2>Checkout:</h2>
            <form onSubmit={manejadorSubmit}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} X { producto.cantidad}</p>
                        <p>Precio: $ {producto.item.precio}</p>  
                        <div>
                            <img className="imgItem" src={producto.item.img}  />
                        </div>                     
                        <hr />
                    </div>
                ))}
                        <h3> Cantidad Total: {cantidadTotal} </h3>
                        <h3> Total: {total} </h3>
                
                < hr />
                <label htmlFor="">Nombre</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                <div></div>
                <div>
                    <label htmlFor=""> Apellido </label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Email Confirmación </label>
                    <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && < p style= {{color: "red"}}> {error} </p>
                }
                < button type="submit"> Finalizar Orden </button>
                {
                    ordenId && (
                        <strong> !Gracias por tu  Compra! </strong>
                    )
                }
            </form>
        </div>
    )
}


export default Checkout