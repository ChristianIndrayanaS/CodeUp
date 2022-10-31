import React from 'react';
import CuKinder from './CuKinder';
import CuTeenager from './CuTeenager';
import CuAdult from './CuAdult';
import ToTop from '../../components/toTop/ToTop';

export default function Grade() {
  return (
        <>
          <CuKinder/>
          <CuTeenager/>
          <CuAdult/>
          <ToTop/>
        </>
  )
}
