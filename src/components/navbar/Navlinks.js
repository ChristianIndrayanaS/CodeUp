import React from 'react';
import { Link } from 'react-router-dom';
import {links} from './Links';

export default function Navlinks() {
    return (
        <>
            {links.map((link) =>(
                <div>
                    <div className='text-left md:cursor-pointer group '>
                        <div className='py-2 inline-block flex justify-between items-center md:pr-0 group' >
                            {link.name}
                            <span className='md:hidden inline hidden'><ion-icon></ion-icon></span>
                            <span className='md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'><ion-icon name="chevron-down-outline"></ion-icon></span>
                        </div>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-15 hidden group-hover:md:block hover:md:block '>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-6 absolute mt-1 rotate-45 bg-white border-[#000000] border-t-2 border-l-2'></div>
                                    </div>
                                    <div className='py-4 px-4 bg-[#FFFFFF] border-[#000000] border-2 text-left'>
                                        {link.sublinks.map((mysublinks) =>(
                                            <div className='py-2 px-5 border-b-[1px] border-[#000000]'>
                                                <Link to={mysublinks.link} className='hover:text-[#000000] '>{mysublinks.head}</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile menus */}
                    <div className='md:hidden'>
                        {link.sublinks.map((mysublinks) =>(
                            <div className='py-4 pl-8 md:pr-0 pr-5'>
                                <Link to={mysublinks.link} className=''>{mysublinks.head}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
