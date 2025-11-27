import { useState } from 'react';
import { IconClosed, IconMenu } from '../theme/index';
import { NavList } from './NavList';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-tl from-black from-40% to-slate-300 text-white font-poppins">
      <div className="max-w-7xl mx-auto py-4 px-3">
        <div className="flex items-center justify-between gap-4">
          <div className="">
            <img src={Logo} alt="logo de la empresa" className="h-20" />
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 cursor-pointer">
            {NavList.map((list) => (
              <Link key={list.id} to={list.to} className="relative group">
                {list.title}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          <div onClick={toggleMenu} className="lg:hidden cursor-pointer z-20">
            {isOpen ? <IconClosed /> : <IconMenu />}
          </div>
        </div>
        <div
          className={`fixed lg:hidden right-0 bottom-0 h-full w-52 z-10 bg-gradient-to-bl from-black from-30% to-slate-200 p-8 pt-20 
          ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-lg transform transition-transform duration-300 ease-in-out`}
        >
          {NavList.map((list) => (
            <Link 
              key={list.id} 
              to={list.to} 
              className="relative group flex flex-col items-center gap-8 mb-4"
              onClick={toggleMenu}
            >
              {list.title}
              <span className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 bg-gradient-to-r from-orange-500 to-yellow-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
