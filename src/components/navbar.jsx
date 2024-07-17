import logo from "../assets/logo.png"
import { Mail } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Music2 } from 'lucide-react';
import {Menu, X } from 'lucide-react'; 
import { useState } from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen);
        };
  return (
    <nav className="sticky top-0 z-50 py-3 w-full">
      <div className="container px-2 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={logo} alt="" />
          </div>
          <ul className="hidden lg:flex space-x-5">
            <li><a className="font-bold underline" href="#">docs.</a></li>
            <li><a href="#"><Mail size={20} /></a></li>
            <li><a href="#"><Moon size={20} /></a></li>
            <li><a href="#"><Music2 size={20} /></a></li>
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar