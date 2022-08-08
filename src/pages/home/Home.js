import React from 'react';
import CuIntroduction from './CuIntroduction';
import CuBenefit from './CuBenefit';
import CuHowToTeach from './CuHowToTeach';
import CuGrades from './CuGrades';
import CuProgram from './CuProgram';

export default function Home() {
  
  return (
      <>
        <div className='bg-[#FFFFFF]'> 
          <CuIntroduction/>
          <CuBenefit/>
          <CuHowToTeach/>
          <CuGrades/>
          <CuProgram/>
        </div>    
      </>
    
  )
}
