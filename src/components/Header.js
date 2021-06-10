import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const pagina = useLocation();
    
    return (
        <header className="header">
            <h1>{title}</h1>
            {pagina.pathname === '/' && <Button color={showAdd ? '#f55b5b' : '#05AFF2'} text={showAdd ? 'Fechar' : 'Adicionar'} onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Tarefaz'
}

export default Header
