import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-32 sm:pl-5 sm:pt-1'>
            <div className='md:flex text-left md:items-center '>
                <ul className='md:ml-16 md:mr-36 mt-8'>
                    <li>HemDemy Business</li>
                    <li>Get the App</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
                <ul className='mr-36 md:mt-8'>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>Privacy policy</li>
                    <li>Cookie setting</li>
                </ul>
                <ul className='mr-36 md:mt-8'>
                    <li>Affiliate</li>
                    <li>Terms</li>
                    <li>Sitemap</li>
                    <li>Accessibility statement</li>
                </ul>
                <div>
                <button className='md:ml-52 md:mr-16 md:mb-16 sm:my-2 border-white border-2 px-6 flex items-center py-1'><FontAwesomeIcon className='mr-2' icon={faGlobe}></FontAwesomeIcon> English</button>
                </div>
                
            </div>
            <div className='md:flex md:mt-10 pb-10 md:justify-between items-center md:mx-16 sm:text-left'>
                <h1 className='text-2xl'>Hem-Demy</h1>
                <p>© 2023 HemDemy, Inc.</p>
            </div>
        </div>
    );
};

export default Footer;