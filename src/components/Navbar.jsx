/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu as menuIcon, close as closeIcon } from '../assets';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleLinkClick = (id) => {
    setActive(id);
    if (toggle) {
      setToggle(false);
    }
    // Scroll to the section after a small delay to ensure the DOM is ready
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2"
          onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-normal cursor-pointer flex">
            VRAJ&nbsp;<span className="sm:block hidden"> PATEL</span></p>
        </Link>
        {/* Desktop Menu */}
        <ul className="list-none hidden mdv2:flex flex-row gap-7 items-center">
          {navLinks.map((item) => (
            item.title ? (
              <li
                key={item.id}
                className={`${active === item.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleLinkClick(item.id)}
              >
                <span>{item.title}</span>
              </li>
            ) : (
              <li key={item.id} className="hover:text-white text-secondary text-[18px] font-medium cursor-pointer">
                <a
                  href={
                    item.id === 'github' ? 'https://github.com/patelvraj18' :
                      item.id === 'linkedin' ? 'https://linkedin.com/in/vraj-patel01' :
                        item.id === 'email' ? 'mailto:vrajpatel6147@gmail.com' : '#'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img src={item.icon} alt={`${item.id} icon`} className="w-1/2 h-1/2 object-contain" />
                </a>
              </li>
            )
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mdv2:hidden flex items-center">
          <img src={toggle ? closeIcon : menuIcon} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />
        </div>

        {/* Mobile Menu */}
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black bg-opacity-90 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-50 mdv2:hidden`}>
          <ul className="list-none flex flex-col gap-4 items-center w-full">
            {navLinks.map((item) => (
              <li key={item.id} className={`${active === item.id ? 'text-white' : 'text-secondary'} font-medium cursor-pointer text-[16px] w-full text-center`}>
                {item.title ? (
                  <span onClick={() => handleLinkClick(item.id)}>{item.title}</span>
                ) : (
                  <div className="flex justify-center">
                    <a
                      href={
                        item.id === 'github' ? 'https://github.com/patelvraj18' :
                          item.id === 'linkedin' ? 'https://linkedin.com/in/vraj-patel01' :
                            item.id === 'email' ? 'mailto:vrajpatel6147@gmail.com' : '#'
                      }
                      target={item.id === 'email' ? '_self' : '_blank'}
                      rel={item.id === 'email' ? '' : 'noopener noreferrer'}
                      onClick={() => handleLinkClick(item.id)}
                      className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer"
                    >
                      <img src={item.icon} alt={`${item.id} icon`} className="w-1/2 h-1/2 object-contain" />
                    </a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;