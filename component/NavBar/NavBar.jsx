import React, { useState } from 'react';
import Link from './Link';
import { CircleX, Menu } from 'lucide-react';

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const links = navData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                open ? 
                <CircleX className='md:hidden'></CircleX> : 
                <Menu className='md:hidden'></Menu>
                }
                
                <ul className={`md:hidden absolute duration-750 ${open? 'top-8': '-top-55'} bg-amber-200`}>
                {
                    links
                }
                </ul>


                <h2 className='ml-5'>My NavBar</h2>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>



            {/* <ul className='flex'>
                {navData.map(route => <li className='mr-5'>
                    <a href="/">{route.name}</a></li>)}
            </ul> */}

            {/* <ul className='flex gap-0.5'>
                <li className='mr-5'><a href="/">Home</a></li>
                <li className='mr-5'><a href="/about">About</a></li>
                <li className='mr-5'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;