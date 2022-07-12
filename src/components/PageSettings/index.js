import './PageSettings.scss';

function PageSettings({ title, leftText, rightText, leftImage, rightImage }) {
  return (
    <div className='options'>
      <div className='options__settings'>
        <h4>{title}</h4>
        <div className='options__settings__content'>
          <span>{leftText}</span>
          <img src={leftImage} alt='light' />
          <input type='checkbox' />
          <img src={rightImage} alt='dark' />
          <span>{rightText}</span>
        </div>
      </div>
    </div>
  );
}

export { PageSettings };