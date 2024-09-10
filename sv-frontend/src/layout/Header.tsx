import { Link } from "react-router-dom";
import { useState } from "react";

import menu from '../assets/svg/menu.svg'
import close from '../assets/svg/close.svg'

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="mx-5 px-5 py-5 bg-white flex flex-row justify-between items-center bg-green">
        <Link to="/">
        <p className="text-3xl font-accent font-bold tracking-wide	">
          <span className="">Sunnah</span> <span className="text-[#dec535]">Vest</span> 
        </p>
      </Link>

      <div className={navOpen ? 'hidden' : ''}>
        <img src={menu} className="h-[5vh] active:shadow-lg" alt="Menu button" onClick={() => setNavOpen(!navOpen)} />
      </div>

      <div className={navOpen ? 'fixed inset-0 w-full h-full z-50' : 'fixed invisible'}>
        <div className={`absolute duration-500 ease-out transition-all inset-0 w-full h-full bg-gray-900 ${navOpen ? 'opacity-50': 'opacity-0'}`}></div>
        <div className={`absolute duration-500 ease-out transition-all top-0 right-0 w-[45vw] h-full bg-slate-100 ${navOpen ? '': 'translate-x-1/2'}`}>
        <img src={close} className="h-[5vh] mx-2 my-5 active:shadow-lg" alt="Close menu button" onClick={() => setNavOpen(!navOpen)} />

        </div>


      </div>
      
    </nav>
  );
}

export default Header;
