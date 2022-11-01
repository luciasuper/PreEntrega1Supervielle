
import "./NavBar.css";
import logo from "../imgs/logo_sl.png"

function NavBar(props){

    const styleNav = {backgroundColor: props.color}
    return <nav style={styleNav}>
        <a>
            <img src={logo} alt="logo de santa lupe"></img>
        </a>
        <div>
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
        </div>
    </nav>
}

export default NavBar;