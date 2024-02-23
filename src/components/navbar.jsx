import { ShoppingCart } from 'phosphor-react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollPos > currentScrollPos) {
        setShow(true);
      } else {
        setShow(false);
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  return (
    <div className='navbar' style={{ top: show ? '0' : '-100px', transition: 'top 0.3s ease-out' }}>
      <div className='links'>
        <Link to={"/"}>Shop</Link>
        <Link to={"cart"}>
          <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  );
};