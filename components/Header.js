import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                The <span>Pilgrim</span>
            </h1>
            <p className={headerStyles.description}>
                Selecione seu produto do catálogo
            </p>
        </div>
    )
}

export default Header
