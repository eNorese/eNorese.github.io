import './Header.css'

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='../../img/enorese-logo.png' alt='enorese.dev' />
            </div>
            <nav className='navigation nav-hidden'>
                <ul>
                    <li>Sobre Mí</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <button className='menu-btn'><span className='icon-menu'></span></button>
        </header>
    );
}

export { Header };