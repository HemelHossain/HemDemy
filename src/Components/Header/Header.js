import logo1 from '../../logo1.png'
import Navbar from '../Navbar/Navbar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Header = () => {
    const [open, setOpen] = useState(false);
    const routes= [
        {id:1, name:'Home', link:'/home'},
        {id:2, name:'Courses', link:'/course'},
        {id:3, name:'Learning Path', link:'/learningpath'},
        {id:4, name:'About', link:'/about'}
    ]
    return (
        <div className='bg-sky-400 fixed top-0 w-full'>
        <div className='md:flex md:justify-between md:items-center md:mx-20 md:py-2'>
            <div className='sm:flex sm:justify-between sm:items-center sm:mx-2'>
                <img className='w-40 h-14' src={logo1} alt="" />
                <div onClick={()=>{setOpen(!open)}} className='w-8 h-6 md:hidden ml-3 sm:inline'>
                {open? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
                </div>
            </div>
            <nav className={`md:static md:w-auto sm:w-full  sm:absolute ${open? 'sm:top-12 bg-sky-100' : 'sm:top-[-300px]'}`}>
                <ul className='md:flex md:items-center'>
                {routes.map(route => <Navbar key={route.id} route= {route}>
                </Navbar>)}
                </ul>
            </nav>
        </div>
        </div>
    );
};
// className='sm:flex sm:justify-between sm:items-center md:ml-8'
export default Header;
