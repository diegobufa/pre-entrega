import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const imgLogo = "./bandera.png"
    const CarritoMini = "./carrito.png";
    
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img className='imgLogo' src={imgLogo} alt="Logo" />
                <h1 className="regional">Regionales Firmat </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"> Crear Cuenta</li>  
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle" href="#" id="navbar" type="button" data-bs-toggle="dropdown" data-bs-target="#navbarItems" aria-controls="navbarItems" aria-label="Toggle navigation" aria-expanded="false">
                            Productos Regionales
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbar">
                                <a className="dropdown-item" href="#">Set Materos</a>
                                <a className="dropdown-item" href="#">Indumentaria de Campo y Urbano</a>
                                <a className="dropdown-item" href="#">Cuchillos Artesanales</a>
                                <a className="dropdown-item" href="#">Parrillas y Fogones</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#" >
                                    <span className="CarritoMiniSpan">
                                        <img src={CarritoMini} alt="caritoMini"  className="CarritoMini" />
                                    </span>
                                    Carrito 
                                </a>
                            
                            </div>
                        </li>  
                        <li className="nav-item"> Contacto</li>
                        <li className="nav-item"> Iniciar Sesion</li>                       
                    </ul>
                </nav>
                

                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar

