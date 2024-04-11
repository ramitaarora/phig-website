import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

const Navbar = () => {

  return (
    <nav>
      <div>
        <Link to='/'><img src="/images/homepage/logo.png" alt='PHIG-logo' /></Link>
      </div>

      <div className={css`width: 70%; display: flex; justify-content: space-evenly;`}>
        <Link to="/about">About Us</Link>
        <Link to="/approach">Our Approach</Link>
        <Link to="/news">News</Link>
        <Link to='/volunteer'>Get Involved</Link>
      </div>

      <div>
        <Link to='/donate'>
          
          <button className="primary-button">
            <img src="/images/homepage/donate-hand.png" alt="donate" height="30px" width="30px"/>
            Donate
          </button>
        </Link>
      </div>


    </nav>
  )
}

export default Navbar;