import React from 'react';
import CuIntroduction from './CuIntroduction';
import CuBenefit from './CuBenefit';
import CuHowToTeach from './CuHowToTeach';
import CuGrades from './CuGrades';
import CuProgram from './CuProgram';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import ToTop from '../../components/toTop/ToTop';

export default function Home() {
  
  return (
      <>
          <Navbar/>
          <CuIntroduction/>
          <CuBenefit/>
          <CuHowToTeach/>
          <CuGrades/>
          <CuProgram/>
          <ToTop/> 
          <Footer/>
      </>
    
  )
}
