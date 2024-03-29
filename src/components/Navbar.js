import { Compass, Menu, X } from 'lucide-react'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => {setClick(!click)}
  const closeMobileMenu = () => {setClick(false)}

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClck={closeMobileMenu}>
          XPLR
          <Compass size={24} strokeWidth={1.25}/>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <X color='white' /> : <Menu color='white' />}
        </div>
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
            Services
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/destinations' className='nav-links' onClick={closeMobileMenu}>
            Destinations
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
            Sign Up
          </Link>
        </li>
      </ul>
      {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
    </nav>
    </>
  )
}

export default Navbar