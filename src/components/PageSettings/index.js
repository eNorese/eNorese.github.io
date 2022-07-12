import './PageSettings.scss';

function PageSettings() {
  return (
    <div className='options'>
      <div className='options__settings'>
        <h4>Tema</h4>
        <div className='options__settings__content'>
          <span>claro</span>
          <img className='options__settings__content__left' src='' alt='' />
          <input type='checkbox' />
          <img className='options__settings__content__left' src='' alt='' />
          <span>oscuro</span>
        </div>
      </div>
    </div>
  );
}

export { PageSettings };