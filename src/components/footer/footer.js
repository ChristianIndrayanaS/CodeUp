import React from 'react';
// import Logo from '../../assets/images/logo.png';
import NewLogo from '../../assets/images/newLogo.png';
import {FaTiktok} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaRegEnvelope} from 'react-icons/fa';

export default function footer() {
    const socialMedia = [
        {
            id:1,
            link:"https://www.instagram.com/friendcodeup/",
            logo:<FaInstagram/>,
            name:"@friendcodeup"
        },
        {
            id:2,
            link:"https://www.tiktok.com/@codeupfriend",
            logo:<FaTiktok/>,
            name:"@codeupfriend"
        },
    ]

    const contact = [
        {
            id:1,
            link:"mailto: codeupfriend@gmail.com",
            logo:<FaRegEnvelope/>,
            name:"codeupfriend@gmail.com"
        },
        {
            id:2,
            link:"https://api.whatsapp.com/send?phone=62821118960261",
            logo:<FaWhatsapp/>,
            name:"+62 821-118-960-261"
        },
    ]
  return (
    <footer>
        <div className='border-t-2 border-[#FFFFFF] p-6 bg-[#5470FF]'>
            <div className='flex flex-col items-center lg:flex-row text-[#FFFFFF]'>
                <div className='w-1/2 md:w-1/4 md:ml-10'>
                    <img src={NewLogo} alt='logo'/>
                </div>
                <div className='grid grid-rows-2 w-full gap-6 justify-center md:flex '>
                    <div className='flex flex-col text-center h-min '>
                        <h2 className='font-bold text-3xl mb-2'>Kontak</h2>
                        {contact.map((content) =>(
                            <div className='my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#FF914C] duration-300' key={content.id}>
                                <a href={content.link}>
                                    <div className='flex text-center'>
                                        <div className='py-2 text-2xl'>{content.logo}</div>
                                        <div className='m-1 font-bold text-xl'>
                                            <span> : {content.name}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col text-center '>
                        <h2 className='font-bold text-3xl mb-2'>Sosial Media</h2>
                        {socialMedia.map((content) =>(
                            <div className='my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#FF914C] duration-300' key={content.id}>
                                <a href={content.link}>
                                    <div className='flex text-center '>
                                        <div className='py-2 text-2xl'>{content.logo}</div>
                                        <div className='m-1 font-bold text-xl'>
                                            <span> : {content.name}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
