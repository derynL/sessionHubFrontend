import '../css/header.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <a className='navbar-brand logo-heading' href='/'>
              <img
                src={logo}
                alt='SessionHub Logo'
                width='100'
                className='img-fluid d-inline-block align-text-middle'
              />
              SessionHub
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarText'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Get Started
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    SessionTalk
                  </a>
                </li>
              </ul>
              <span className='navbar-text'>
                <a className='logout' href='/'>
                  Logout
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
