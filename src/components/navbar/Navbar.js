import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
// import NewLogo from '../../assets/images/newLogo.png';
import { links } from './Links';

export default function Navbar() {
    const [open, setOpen] = useState(false);


    return (
        <>
            <nav className='bg-[#5470FF] h-28 border-b-2 border-[#FFFFFF] text-[#FFFFFF]'>
                <div className='flex items-center font-bold '>
                    <div className='z-50 md:w-auto w-full flex justify-between'>
                        <Link to={'/'}><img className='md:cursor-pointer ml-9 mt-3 w-20' src={Logo} alt="CodeUp"/></Link>
                        
                        <div className='text-3xl md:hidden pt-6 pr-5 ' onClick={()=>setOpen(!open)}>
                            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                        </div>
                    </div>
                    <div className='flex flex-row '>
                        {links && links.map((link) => (
                            <div key={link.id}>
                                <ul className='md:flex hidden items-center gap-8 ml-6 pt-2 text-left md:cursor-pointer ' key={link.id} >
                                    {link.submenu ?
                                    <>
                                        <div className='flex justify-between items-center md:pr-0 group hover:text-[#FF914C]'>
                                            <Link to={link.link}>
                                                <div className='py-3 px-3 flex justify-between items-center md:pr-0' >
                                                    <li>{link.name}</li>
                                                    <span className='md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'><ion-icon name="chevron-down-outline"></ion-icon></span>
                                                </div>
                                            </Link>
                                            
                                            <div className='absolute top-14 mt-2 hidden group-hover:md:block hover:md:block '>
                                                <div className='pb-3'>
                                                    <div className='w-4 h-4  left-6 absolute mt-[3.8px] rotate-45 bg-[#FFFFFF] border-[#000000] border-t border-l'></div>
                                                </div>
                                                <div className='py-2 px-4 bg-[#FFFFFF] border-[#000000] border text-left'>
                                                    <ul>
                                                    {link.sublinks.map((mysublinks,index) =>(
                                                        <div className='py-2 px-5 border-b-[1px] border-[#000000]' key={index}>
                                                            <li>

                                                            <Link to={mysublinks.link} className='hover:text-[#000000] '>{mysublinks.head}</Link>
                                                            </li>
                                                        </div>
                                                    ))}

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Link to={link.link}>
                                            <div className='p-3 hover:text-[#FF914C]'>
                                                <li>{link.name}</li>
                                            </div>
                                        </Link>
                                    </>
                                    }
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                    {/* Mobile nav */}

                    <ul className={`md:hidden backdrop-blur-sm absolute w-full h-[100vh] top-24 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                        <div className='bg-[#5470FF] w-9/12 h-[100vh]' onClick={()=>setOpen(!open)}>
                            <div className='md:hidden'>
                                <div className='flex flex-col'>
                                    {links && links.map((link)=>(
                                        <div key={link.id}>
                                                {link.submenu ?
                                                <>
                                                    <li className='py-2 pl-2 inline-block hover:text-[#FF914C] text-xl'>
                                                    <Link to={link.link}>{link.name}</Link>
                                                    </li>
                                                    <ul className='border-b-2 border-[#FFFFFF]'>
                                                        {link.sublinks.map((mysublinks,index) =>(
                                                            <div key={index}>
                                                                <li className='py-2 pl-8 md:pr-0 hover:text-[#FF914C] text-lg'>
                                                                    <Link to={mysublinks.link}>{mysublinks.head}</Link>
                                                                </li>
                                                            </div>
                                                        ))}

                                                    </ul>
                                                </>
                                                :
                                                <>  
                                                <div className='border-b-2 border-[#FFFFFF] '>
                                                    <li className='py-2 pl-2 inline-block hover:text-[#FF914C] text-xl'>
                                                        <Link to={link.link}>{link.name}</Link>
                                                    </li>
                                                </div>
                                                </>
                                                }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ul>

                </div>
            </nav>
        </>
    )
}




