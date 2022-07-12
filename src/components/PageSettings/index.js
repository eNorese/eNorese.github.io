import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png';
import english from '../../assets/english.png';
import spanish from '../../assets/spanish.png';
import './PageSettings.scss';

function PageSettings() {
  return (
    <div className='options'>
      <div className='options__settings'>
        <h4>Tema</h4>
        <div className='options__settings__content'>
          <span>claro</span>
          <img src={sun} alt='light' />
          <input type='checkbox' />
          <img src={moon} alt='dark' />
          <span>oscuro</span>
        </div>
      </div>
    </div>
  );
}

export { PageSettings };