import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <input className="header__search" type="text" id="search" aria-label='Поиск' disabled>

        </input>

      </div>
    </header>
  );
}

export default Header;
