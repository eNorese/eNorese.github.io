import './Header.css'

function Header() {
    return (
        <header>
            <div className='logo'>
                LOGO
                <img src="" alt="" />
            </div>
            <nav className='navigation nav-hidden'>
                <ul>
                    <li>Sobre Mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <span className='menu'>X</span>
        </header>
    );
}

export { Header };