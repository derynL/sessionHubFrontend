import '../css/header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <Link className='navbar-brand logo-heading' to='/'>
              <img
                src={logo}
                alt='SessionHub Logo'
                width='100'
                className='img-fluid d-inline-block align-text-middle'
              />
              SessionHub
            </Link>
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
                  <Link className='nav-link active' aria-current='page' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/get-started'>
                    Get Started
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/session-talk'>
                    SessionTalk
                  </Link>
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
