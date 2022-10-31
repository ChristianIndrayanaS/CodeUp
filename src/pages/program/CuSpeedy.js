import React from 'react';
import Card from '../../components/card/Card';
import CardProgram from '../../components/card program/CardProgram';
import Button from '../../components/button/Button';
import Bg7 from '../../assets/images/bg7.png';


export default function CuSpeedy() {
  
  return (
    <div className='w-full flex flex-col items-center justify-center my-10' >
      <div className='w-11/12 bg-no-repeat bg-cover bg-center lg:bg-[length:100%_100%] rounded-3xl' style={{backgroundImage : `url('${Bg7}')`}}>
        <div className='flex items-center justify-center'>
          <h1 className='font-bold text-5xl my-10'>Speedy</h1>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className=' grid grid-rows lg:grid-cols-2  w-3/4 md:w-2/3 '>
            <div className='mx-10 my-2'>
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
                      <li>2D Games</li>
                      <li>2D Animation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <div className='mx-10 my-2'>
              <Card className='bg-[#E8778F] rounded-xl text-center h-full'>
                <h1 className='font-bold text-2xl py-4 border-[#000000] border-b-2'>Metaverse Space </h1>
                <div className='text-lg '>
                  <div className='m-6 text-left'>
                    <p>
                      Melatih kemampuan berfikir dan berimajinasi membuat objek 3D serta menggunakan coding 
                      untuk menggerakan objek-objek yang telah dibuat.
                    </p>
                  </div>
                  <div className='m-6 flex flex-col items-center gap-4'>
                    <h4 className='font-bold text-xl'>Apa yang diajarkan</h4>
                    <ul className='list-disc list-inside text-left '>
                      <li>3D Games</li>
                      <li>3D Animation</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className='grid grid-rows-1 grid-flow-col gap-6 lg:grid-cols-3 m-6 md:w-3/5'>
            <CardProgram styled='' firstMeeting='12 Pertemuan' firstPrice='Rp. 100.000 / pertemuan'/>
          </div>

          <Button className='font-bold text-xl bg-[#E8778F] my-5 py-3 px-6  rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100'>
            Daftar sekarang
          </Button>
        </div>
      </div>
    </div>
  )
}
