import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Navbar = () => {

  return (
    <nav className={css`width: 100vw; min-height: 90px; display: flex; align-items: center; justify-content: space-between; background-color: #081821; padding: 20px 40px;`}>
      <div>
        <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
      </div>

      <div className={css`width: 70%; display: flex; justify-content: space-evenly;`}>
        <div className="nav-dropdown">
          <Link to="/contact">
            About Us
            <img src="./images/nav-carat-down.svg" alt="down" />
          </Link>
          <div className="nav-dropdown-content">
            <Link to="/contact">Contact</Link>
            {/*<Link to="/about/">Timeline</Link>*/}
          </div>
        </div>

        <Link to="/approach">Our Approach</Link>

        <div className="nav-dropdown">
          <Link to="/news">
            News
            <img src="./images/nav-carat-down.svg" alt="down" />
          </Link>
          <div className="nav-dropdown-content">
            <Link to="/events">Attend Events</Link>
            <Link to="/news">Blog</Link>
          </div>
        </div>

        <div className="nav-dropdown">
          <Link to='/volunteer'>
            Get Involved
            <img src="./images/nav-carat-down.svg" alt="down" />
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
            {/*<img src="/images/homepage/donate-hand.png" alt="donate" height="30px" width="30px" />*/}
            Donate
          </button>
        </Link>
      </div>


    </nav>
  )
}

export default Navbar;