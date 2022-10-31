import React from 'react';

export default function SideNav() {
  return (
    <>
        <div className='flex flex-row-reverse bg-[#5470FF] h-14 items-center text-[#FFFFFF]'>
            <div className='mx-4'>
                <div className='flex justify-center items-center'>
                    <span className='text-2xl mx-4 '><ion-icon name="person-circle-outline"></ion-icon></span>
                    <span className='text-xl'>Hai, Adol</span>
                    <span className='mx-2'><ion-icon name="chevron-down-outline"></ion-icon></span>
                </div>
            </div>
        </div>
        <nav className='fixed left-0 bg-[#5470FF] w-40 h-full text-xl text-[#FFFFFF]'>
            <div className=''>
                <ul className='grid grid-rows gap-4 h-full'>
                    <li className='p-4 justify-center items-center'>Jadwal</li>
                    <li className='p-4 justify-center items-center'>Feedback</li>
                    <li className='p-4 justify-center items-center'>hai</li>
                    <li className='p-4 justify-center items-center'>hai</li>
                    <li className='p-4 justify-center items-center'>hai</li>
                </ul>
            </div>
        </nav>
    </>
  )
}
