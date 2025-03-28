import { Link } from 'react-router-dom'


function NavBar(){
        return(
            <nav>
                <Link to="/">Home</Link><br/>
                <Link to="/favorites">Favorites</Link>
            </nav>
        )
}

export default NavBar