
import "./NavBar.css";
import logo from "../../assets/img/logo_sl.png"
import CartWidget from "../NavBar/CartWidget";
import {Logo} from './Logo';
import {Link} from "react-router-dom";

function NavBar(props){
    const styleNav = {backgroundColor: props.color}
    return <nav style={styleNav}>
        <div className="NavBar">
            <div >
                <Link to="/PreEntrega1Supervielle">
                    <Logo />
                </Link>
            </div>
            <div className="UlNavBar">
                <ul>
                    <li className="ColorHoverNav">
                        <Link   style={{textDecoration:'none'}} to="/category/nuevosingresos">NUEVOS INGRESOS</Link>
                    </li>
                    <li className="ColorHoverNav">
                        <Link  style={{textDecoration:'none'}} to="/category/promociones" >PROMOCIONES</Link>
                    </li>
                </ul>
                <CartWidget />
            </div> 
            
        </div>
    </nav>
}

export default NavBar;