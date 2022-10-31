import React from 'react';
import Bg3 from '../../assets/images/bg3.jpg';
import Card from '../../components/card/Card';

export default function CuHowToTeach() {
    const clock = <lord-icon src="https://cdn.lordicon.com/mgmiqlge.json" trigger="loop" delay="2000" class='animated'></lord-icon>;
    const computer = <lord-icon src="https://cdn.lordicon.com/lkladgjt.json" trigger="loop" delay="2000" class='animated'> </lord-icon>;
    const book = <lord-icon src="https://cdn.lordicon.com/dxoycpzg.json" trigger="loop" delay="2000" class='animated'> </lord-icon>;
    const convo = <lord-icon src="https://cdn.lordicon.com/flvisirw.json" trigger="loop" delay="2000" class='animated'> </lord-icon>;
    const joyStick = <lord-icon src="https://cdn.lordicon.com/nrvilcob.json" trigger="loop" delay="2000" class='animated'> </lord-icon>;

    return (
        <div className='w-full bg-no-repeat bg-cover bg-center text-[#FFFFFF] xl:h-screen' style={{backgroundImage : `url('${Bg3}')`}}>
            <div className=' flex flex-col items-center'>
                <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl my-10'>Cara mengajar kami</h1>
            </div>

            <div className='flex justify-center h-full font-bold text-center text-base xl:text-xl'>
                <div className='grid grid-cols-4 gap-4 mb-10 h-3/4 md:grid-cols-4 lg:w-3/5 xl:grid-cols-6 place-items-center'>
                    <Card className='rounded-[15px] border-2 border-[#CC2A4C] bg-[#6EBA4D] col-span-2 w-4/5'>
                        <span>{clock}</span>
                        <p className='mx-2 my-2 py-2'>Jam belajar yang flexible</p>
                    </Card>
                    <Card className='rounded-[15px] border-2 border-[#CC2A4C] bg-[#6EBA4D] col-span-2 w-4/5'>
                            <span>{computer}</span>
                            <p className='mx-2 my-2 py-2'>Belajar dilakukan secara online</p>
                    </Card>
                    <Card className='rounded-[15px] border-2 border-[#CC2A4C] bg-[#6EBA4D] col-span-2 w-4/5'>
                            <span>{book}</span>
                            <p className='mx-2 my-2 py-2'>Materi disiapkan dengan baik</p>
                    </Card>
                    <Card className='rounded-[15px] border-2 border-[#CC2A4C] bg-[#6EBA4D] xl:col-end-4 col-span-2 w-4/5'>
                            <span>{convo}</span>
                            <p className='mx-2 my-2 py-2'>Mengajar private atau berkelompok</p>
                    </Card>
                    <Card className='rounded-[15px] border-2 border-[#CC2A4C] bg-[#6EBA4D] xl:col-end-6 col-span-2 w-4/5'>
                            <span>{joyStick}</span>
                            <p className='mx-2 my-2 py-2'>Belajar sambil bermain</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}
