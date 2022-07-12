import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { FaRegAddressCard, FaUserCheck } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';
import { PageSettings } from '../PageSettings';
import logo from '../../assets/enorese-logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import english from '../../assets/english.png';
import spanish from '../../assets/spanish.png';
import './Header.scss';

function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img className='header__logo__img' src={logo} alt='eNorese.dev' />
      </div>

      <nav className='header__nav'>
        <ul>
          <li>
            <span><AiFillHome /> Inicio</span>
          </li>
          <li>
            <span><FaRegAddressCard /> Sobre Mí</span>
          </li>
          <li>
            <span><IoIosRocket /> Experiencia</span>
          </li>
          <li>
            <span><HiLightBulb /> Proyectos</span>
          </li>
          <li>
            <span><FaUserCheck /> Contacto</span>
          </li>
        </ul>

        <div className='header_nav_settings'>
          <PageSettings
            key={1}
            title='Tema'
            leftImage={sun}
            rightImage={moon}
            switchId='switch-theme'
          />
          <hr className='setting-divider' />
          <PageSettings
            key={2} 
            title='Idioma'
            leftImage={spanish}
            rightImage={english}
            switchId='switch-lang'
          />
        </div>

      </nav>

      <button className='header__menu-button'>
        <AiOutlineMenu />
      </button>
    </header>
  );
}

export { Header };