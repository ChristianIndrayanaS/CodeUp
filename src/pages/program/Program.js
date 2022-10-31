import React from 'react';
import CuSpeedy from './CuSpeedy';
import CuExplorer from './CuExplorer';
import CuFlyer from './CuFlyer';
import CuSpaceRanger from './CuSpaceRanger';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import ToTop from '../../components/toTop/ToTop';

export default function Program() {
  return (
    <>
        <Navbar/>
        <CuSpeedy/>
        <CuExplorer/>
        <CuFlyer/>
        <CuSpaceRanger/>
        <ToTop/>
        <Footer/>
    </>
  )
}
