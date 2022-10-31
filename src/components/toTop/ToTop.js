import React,{useEffect,useState} from 'react';
import {FaAngleUp} from 'react-icons/fa';

export default function ToTop() { 
    const [isVisible,setVisible] = useState(false);
    const toggleVisibility = () => {
        window.pageYOffset > 800 ? setVisible(true) : setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    };

    useEffect(() => {
      window.addEventListener('scroll',toggleVisibility);
    
      return () => {
        window.removeEventListener('scroll',toggleVisibility);
      }
    }, [])
    
  return (
    <div className='fixed z-30 bottom-2 right-2'>
        <button type='button' onClick={scrollToTop}  className={`${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <FaAngleUp className='bg-[#CC2A4C] text-4xl rounded-md text-[#FFFFFF]'/>
        </button>
    </div>
  )
}
