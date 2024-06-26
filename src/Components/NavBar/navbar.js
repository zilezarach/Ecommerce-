import react from "react";
import {LiaShippingFastSolid} from 'react-icons/lia';
import {FiLogIn, FiSearch} from "react-icons/fi";
import {AiOutlineLogin} from 'react-icons/ai';
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import logo from "../../image/icons.png";
import {FiLogOut} from "react-icons/fi";
import {FaUser} from 'react-icons/fa';

import "./navbar.css";


const Navbar = ({search, setSearch, searchproduct}) => {
  const {loginWithRedirect, logout, user, isAuthenticated} = useAuth0;
  return (
    <>
    <div className='header'>
        <div className='top_head'>
            <div className='icon'>
                <LiaShippingFastSolid />
            </div>
            <div className='info'>
                <p>Free Delivery for Electronics worth upto 50000 ksh</p>
            </div>
        </div>
        <div className='mid_header'>
          <div className='logo'>
            <img src={logo} alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
            <button onClick={searchproduct}><FiSearch /></button>
          </div>
          {
            isAuthenticated ? 
            // if user is login then Logout Button will shown and also user profile         
            <div className='user'>
              <div className='icon'>
                <FiLogOut/>
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
              </div>
            </div>
          :
          // if user is not Login then login button will shown
          <div className='user'>
            <div className='icon'>
              <FiLogIn/>
            </div>
            <div className='btn'>
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
          }
        </div>
        <div className='last_header'>
          <div className='user_profile'>
            {
              // User Profile Will Shown Here
              isAuthenticated ?
              <>
              <div className='icon'>
                <FaUser />
              </div>
              <div className='info'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
              </>
              :
              <>
              <div className='icon'>
                <FaUser />
              </div>
              <div className='info'>
              </div>
              </>
            }
          </div>
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Home</Link></li>
              <li><Link to='/shop' className='link'>Shop</Link></li>
              <li><Link to='/cart' className='link'>Cart</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          <div className='offer'>
            <p>Free Installations offer 10%</p>
          </div>
        </div>
    </div>
    </>
  )
}

 
export default Navbar;