import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css" 

export const NavBar = () => {
        return (
        <div className='NavBar'>
            <span className='nav-logo'>Pro<span>Hardware</span></span>
            <div className='nav-items'>
                <a href='/categoria/procesadores'>Procesadores</a>
                <a href='/categoria/motherboard'>Motherboard</a>
                <a href='/categoria/tarjeta-de-video'>Tarjetas de video</a>
                <a href='/categoria/ram'>Memorias Ram</a>
                <a href='/categoria/almacenamiento'>Almacenamiento</a>
                <span><CartWidget/></span>
            </div>
            </div>
            )
    }