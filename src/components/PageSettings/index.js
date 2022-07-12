import './PageSettings.scss';

function PageSettings({ 
  title, 
  leftImage, 
  rightImage,
  switchId
}) {
  return (
    <div className='options'>
      <div className='options__settings'>
        <h4>{title}</h4>
        <div className='options__settings__content'>
          <img src={leftImage} alt='light' />
          
          <div class="options__settings__content__switch">
            <input type="checkbox" id={switchId} />
            <label for={switchId} class="options__settings__content__switch__label"></label>
          </div>
          
          <img src={rightImage} alt='dark' />
        </div>
      </div>
    </div>
  );
}

export { PageSettings };