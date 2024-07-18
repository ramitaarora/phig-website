import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Navbar = () => {

  return (
    <nav>
      <div id="desktop-nav" className={css`width: 100vw; min-height: 90px; display: flex; align-items: center; justify-content: space-between; background-color: #081821; padding: 20px 40px;`}>
        <div>
          <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
        </div>

        <div className={css`width: 70%; display: flex; justify-content: space-evenly;`}>
          <div className="nav-dropdown">
            <Link to="/contact">
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="white" className="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
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
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
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
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
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

      <div id="mobile-nav" className={css`display: flex; width: 100%; justify-content: space-between; align-items: center; padding: 2%; position: absolute; top: 0px; z-index: 99;`} >
        <div>
          <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
        </div>

        <div id="hamburger-menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;