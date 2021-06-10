import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const pagina = useLocation();

    return (
        <footer>

            <p>2021</p>
            {pagina.pathname === '/' && <Link to='/sobre'>Sobre</Link>}
        </footer>
    )
}

export default Footer
