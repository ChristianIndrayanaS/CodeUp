import React from 'react';
import Card from '../../components/card/Card';
import CardProgram from '../../components/card program/CardProgram';
import Button from '../../components/button/Button';
import Bg9 from '../../assets/images/bg9.png';

export default function CuFlyer() {
  return (
    <div className='w-full flex flex-col items-center justify-center my-10'>
      <div className='w-11/12 bg-no-repeat bg-cover bg-center lg:bg-[length:100%_100%] rounded-3xl' style={{backgroundImage : `url('${Bg9}')`}}>
        <div className='flex items-center justify-center'>
          <h1 className='font-bold text-5xl my-10'>Flyer</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className=' grid grid-rows lg:grid-cols-4 w-3/4  '>
            <div className='mx-4 my-2 lg:col-span-2'>
              <Card className='bg-[#E8778F] rounded-xl text-center h-full'>
                <h1 className='font-bold text-2xl py-4 border-[#000000] border-b-2'>Basic Programming</h1>
                <div className='text-lg'>
                  <div className='m-6 text-left'>
                    <p>
                      Mengajarkan dasar-dasar coding untuk yang baru pertama kali belajar coding
                      dengan menggunakan tools <b><i>Scratch</i></b>.
                    </p>
                  </div>
                  <div className='m-6 flex flex-col items-center gap-4'>
                    <h4 className='font-bold text-xl'>Apa yang diajarkan</h4>
                    <ul className='list-disc list-inside text-left'>
                        <li>STEM Games</li>
                        <li>STEM Animation</li>
                        <li>Machine Learning</li>
                        <li>Python</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
            <div className='mx-4 my-2 lg:col-span-2'>
              <Card className='bg-[#E8778F] rounded-xl text-center h-full'>
                <h1 className='font-bold text-2xl py-4 border-[#000000] border-b-2'>Application Making</h1>
                <div className='text-lg'>
                  <div className='m-6 text-left'>
                    <p>
                      Mengajarkan dasar-dasar coding untuk yang baru pertama kali belajar coding
                      dengan menggunakan tools <b><i>Scratch</i></b>.
                    </p>
                  </div>
                  <div className='m-6 flex flex-col items-center gap-4'>
                    <h4 className='font-bold text-xl'>Apa yang diajarkan</h4>
                    <ul className='list-disc list-inside text-left'>
                      <li>Making Application</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className='mx-4 my-2 lg:col-start-2 lg:col-end-4'>
              <Card className='bg-[#E8778F] rounded-xl text-center h-full'>
                <h1 className='font-bold text-2xl py-4 border-[#000000] border-b-2'>Metaverse Space </h1>
                <div className='text-lg '>
                  <div className='m-6 text-left'>
                    <p>
                      Mengajarkan dasar-dasar coding untuk yang baru pertama kali belajar coding
                      dengan menggunakan tools <b><i>Scratch</i></b>.
                    </p>
                  </div>
                  <div className='m-6 flex flex-col items-center gap-4'>
                    <h4 className='font-bold text-xl'>Apa yang diajarkan</h4>
                    <ul className='list-disc list-inside text-left '>
                      <li>3D Modelling</li>
                      <li>Metaverse Design</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='grid grid-rows-1 grid-flow-col gap-6 lg:grid-cols-3 m-6 md:w-3/5 '>
            <CardProgram firstMeeting='12 pertemuan' firstPrice='Rp. 100.000 / pertemuan' secondMeeting='48 Pertemuan' secondPrice='Rp. 150.000 / pertemuan'/>
          </div>
          <Button className='font-bold text-xl bg-[#E8778F] my-5 py-3 px-6  rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100'>
            Daftar sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}
