
import "./NavBar.css";
import logo from "../../assets/img/logo_sl.png"
import CartWidget from "../NavBar/CartWidget";
import {Logo} from './Logo'
function NavBar(props){
    const styleNav = {backgroundColor: props.color}
    return <nav style={styleNav}>
        <div className="NavBar">
            <div >
                <Logo />
            </div>
            <div className="UlNavBar">
                <ul>
                    <li>
                        <a>PRODUCTOS</a>
                    </li>
                    <li>
                        <a>PROMOCIONES</a>
                    </li>
                    <li>
                        <a>QUIENES SOMOS</a>
                    </li>
                    <li>
                        <a>CONTACTO</a>
                    </li>
                </ul>
                <CartWidget />
            </div> 
            
        </div>
    </nav>
}

export default NavBar;