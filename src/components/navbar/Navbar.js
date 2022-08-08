import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Navlinks from './Navlinks';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const Menu =[
        { name: "Home", link: "/home" },
        { name: <Navlinks/>, link: "#" },
    ];

    return (
        <>
            <nav className='bg-white h-20 border-b-2 border-black'>
                <div className='flex items-center font-bold '>
                    <div className='z-50 md:w-auto w-full flex justify-between'>
                        <Link to={'/'}><img className='md:cursor-pointer h-20 ml-9' src={Logo} alt="CodeUp"/></Link>
                        
                        <div className='text-3xl md:hidden pt-6 pr-5' onClick={()=>setOpen(!open)}>
                            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                    </div>
                    <ul className='md:flex hidden items-center gap-8 ml-6'>
                        {Menu.map((menu) => (
                            <li key={menu.name} className='py-2 px-3 inline-block hover:text-[#CC2A4C]'>
                                <Link to={menu.link}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* Mobile nav */}
                    <ul className={`md:hidden bg-white absolute w-full h-[100vh] top-20 py-2 pl-4 pr-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        {Menu.map((menu) => (
                            <li key={menu.name} className='py-2 inline-block w-full border-b-2 border-black'>
                                <Link to={menu.link}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}




