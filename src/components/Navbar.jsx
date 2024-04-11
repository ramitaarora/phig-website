import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Navbar = () => {

  return (
    <nav>
      <div>
        <Link to='/'><img src="/phig-website/images/homepage/logo.png" alt='PHIG-logo' /></Link>
      </div>

      <div className={css`width: 70%; display: flex; justify-content: space-evenly;`}>
        <div className="nav-dropdown">
          <Link to="/phig-website/about">
            About Us
            <img src="./phig-website/images/nav-carat-down.svg" alt="down" />
          </Link>
          <div className="nav-dropdown-content">
            <Link to="/phig-website/about/#contact-form">Contact</Link>
            <Link to="/phig-website/about/">Timeline</Link>
          </div>
        </div>

        <Link to="/phig-website/approach">Our Approach</Link>

        <div className="nav-dropdown">
          <Link to="/phig-website/news">
            News
            <img src="./phig-website/images/nav-carat-down.svg" alt="down" />
          </Link>
          <div className="nav-dropdown-content">
            <Link to="/phig-website/events">Attend Events</Link>
            <Link to="/phig-website/news">Blog</Link>
          </div>
        </div>

        <div className="nav-dropdown">
          <Link to='/phig-website/volunteer'>
            Get Involved
            <img src="./phig-website/images/nav-carat-down.svg" alt="down" />
          </Link>
          <div className="nav-dropdown-content">
            <Link to="/phig-website/projects">Projects</Link>
            <Link to="/phig-website/volunteer">Volunteer</Link>
            <Link to="/phig-website/resources">Resources</Link>
          </div>
        </div>

      </div>

      <div>
        <Link to='/phig-website/donate'>

          <button className="primary-button">
            <img src="/phig-website/images/homepage/donate-hand.png" alt="donate" height="30px" width="30px" />
            Donate
          </button>
        </Link>
      </div>


    </nav>
  )
}

export default Navbar;