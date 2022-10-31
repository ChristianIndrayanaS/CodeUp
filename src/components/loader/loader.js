import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

export default function loader(loading) {
  return (
    <div className='flex items-center justify-center w-full h-screen text-center bg-[#5470FF]'>
        <FadeLoader color={'#FFFFFF'} loading={loading} size={150}/>
    </div>
  )
}
