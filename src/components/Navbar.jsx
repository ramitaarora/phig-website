import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import { useState } from 'react';

const Navbar = () => {
  const [menuVisibility, setMenuVisibility] = useState('none');

  const hamburgerMenu = () => {
    if (menuVisibility === 'none') {
      setMenuVisibility('block');
    } else {
      setMenuVisibility('none');
    }
  }

  return (
    <nav>
      <div id="desktop-nav" className={css`width: 100vw; min-height: 90px; display: flex; align-items: center; justify-content: space-between; background-color: var(--header-color); padding: 20px 40px;`}>
        <div>
          <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
        </div>

        <div className={css`width: 70%; display: flex; justify-content: space-evenly;`}>
          <div className="nav-dropdown">
            <Link to="/contact">
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </Link>
            <div className="nav-dropdown-content">
              <Link to="/contact">Contact</Link>
              <Link to="/about">Timeline</Link>
            </div>
          </div>

          <Link to="/approach">Our Approach</Link>

          <div className="nav-dropdown">
            <Link to="/news">
              News
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </Link>
            <div className="nav-dropdown-content">
              <Link to="/events">Attend Events</Link>
              <Link to="/news">Blog</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <Link to='/volunteer'>
              Get Involved
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </Link>
            <div className="nav-dropdown-content">
              <Link to="/projects">Projects</Link>
              <Link to="/volunteer">Volunteer</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/donate">Donate</Link>
            </div>
          </div>

        </div>

        <div>
          <Link to='/donate'>
            <button className="gradient-button">
              <img src="/images/donation/donate-hand.png" alt="donate" height="30px" width="30px" className={css`margin-right: 10px;`} />
              Donate
            </button>
          </Link>
        </div>


      </div>

      <div id="mobile-nav" className={css`display: flex; width: 100vw; justify-content: space-between; align-items: center; padding: 20px; min-height: 90px; background-color: var(--header-color);`} >
        <div>
          <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
        </div>

        <div id="hamburger" onClick={hamburgerMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-list" viewBox="0 0 16 16">
            <path fill="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>

        <div id="hamburger-menu" className={css`display: ${menuVisibility}; color: white; z-index: 999; position: absolute; height: 100vh; width: 400px; top: 0; right: 0; border-radius: 20px; padding: 5%; background: linear-gradient(90deg, var(--secondary) 0%, var(--header-color) 100%);`}>
          <div className={css`display: flex; width: 100%; justify-content: space-between; align-items: flex-start;`}>
            <div className={css`cursor: pointer;`} onClick={hamburgerMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--enabled)" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </div>
            <img src="/images/homepage/logo.png" alt='PHIG-logo' className={css`height: 60px;`} />
          </div>
          <div className={css`margin: 50px; width: 100%; height: 60%; line-height: 50px;`}>

            <div className="nav-dropdown">
              <Link to="/contact" onClick={hamburgerMenu}>
                About Us
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </Link>
              <div className="nav-dropdown-content">
                <Link to="/contact" onClick={hamburgerMenu}>Contact</Link>
                <Link to="/about" onClick={hamburgerMenu}>Timeline</Link>
              </div>
            </div>

            <Link to="/approach" onClick={hamburgerMenu}>Our Approach</Link>

            <div className="nav-dropdown">
              <Link to="/news" onClick={hamburgerMenu}>
                News
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </Link>
              <div className="nav-dropdown-content">
                <Link to="/events" onClick={hamburgerMenu}>Attend Events</Link>
                <Link to="/news" onClick={hamburgerMenu}>Blog</Link>
              </div>
            </div>

            <div className="nav-dropdown">
              <Link to='/volunteer' onClick={hamburgerMenu}>
                Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fill="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </Link>
              <div className="nav-dropdown-content">
                <Link to="/projects" onClick={hamburgerMenu}>Projects</Link>
                <Link to="/volunteer" onClick={hamburgerMenu}>Volunteer</Link>
                <Link to="/resources" onClick={hamburgerMenu}>Resources</Link>
                <Link to="/donate" onClick={hamburgerMenu}>Donate</Link>
              </div>
            </div>
          </div>

          <div className={css`width: 100%;`}>
            <Link to='/donate' className={css`margin: 0 25%;`} onClick={hamburgerMenu}>
              <button className="gradient-button">
                <img src="/images/donation/donate-hand.png" alt="donate" height="30px" width="30px" className={css`margin-right: 10px;`} />
                Donate
              </button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;