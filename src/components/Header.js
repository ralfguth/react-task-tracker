import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? '#f55b5b' : '#05AFF2'} text={showAdd ? 'Fechar' : 'Adicionar'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Tarefaz'
}

export default Header
