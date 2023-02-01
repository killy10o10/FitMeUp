import React from 'react';
import {
  FaLinkedinIn,
  BsTwitter,
  TfiGoogle,
  FaFacebookF,
  FaPinterestP,
} from 'react-icons/all';

const Socials = () => {
  return (
    <footer className='socials'>
      <div className='socials-container'>
        <a href='' className='socials-link'>
          <BsTwitter className='socials-icon' />
        </a>
        <a href='' className='socials-link'>
          <FaFacebookF className='socials-icon' />
        </a>
        <a href='' className='socials-link'>
          <TfiGoogle className='socials-icon' />
        </a>
        <a href='' className='socials-link'>
          <FaLinkedinIn className='socials-icon' />
        </a>
        <a href='' className='socials-link'>
          <FaPinterestP className='socials-icon' />
        </a>
      </div>

      <h2 class='socials-copyright'>&#169; 2023 logo & logo - dp2</h2>
    </footer>
  );
};

export default Socials;
