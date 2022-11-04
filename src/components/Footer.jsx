import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  
  FaGithub,
  FaLinkedinIn,
  FaFileContract,
  FaTwitter,
} from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';


const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  // you can check a more conditions here
  if (pathname === "/signup") return null;
  if (pathname === "/signin") return null;
  

  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
      <div className='grid md:grid-cols-2'>
        <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
          <div>
            <h2 className='font-bold'>Support</h2>
            <ul>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Info</h2>
            <ul>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>
        </div>
        <div className='text-right'>
          <div className='w-full flex justify-end'>
            <div className='w-full md:w-[300px] py-4 relative'>
              <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                <ThemeToggle />
              </div>
              <p className='text-center md:text-right'>Sign up for crypto news</p>
              <div className='py-4'>
                <form>
                  <input className='bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='Enter your email' />
                  <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Sign up</button>
                </form>
              </div>
              <div className='flex px-2 py-4 justify-between text-accent'>
                <AiOutlineInstagram />
                <a href="https://github.com/dameldesign" target="_blank"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/daniel-jesutobi-ekundayo-2b058318b/" target><FaLinkedinIn /></a>
            <a href="https://danielekundayo.netlify.app/" target="_blank"><FaFileContract /></a>
            <a href="https://twitter.com/damel_design?t=CQp8czcBtUxPgf5Z6ui_BQ&s=09" target="_blank"><FaTwitter/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center pb-0 py-4'>Powered by Coin Gecko</p>
      <p className='text-center py-4'>Made with ❤ by Damel</p>
    </div>
  );
};

export default Footer;

//HOW TO HIDE A COMPONENT IN REACT?//

