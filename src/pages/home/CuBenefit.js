import React from 'react';
import Bg2 from '../../assets/images/bg2.png';
import BoyLeft from '../../assets/images/boy_left.jpg';
import BoyRight from '../../assets/images/boy_right.jpg';

export default function CuBenefit() {
    return (
        <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center xl:h-screen' style={{backgroundImage : `url('${Bg2}')`}}>
            <div className='text-[#000000] flex flex-col items-center h-full'>
                    <h1 className='font-bold text-center text-4xl text-[#5470FF] mt-10 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Apa Manfaat Belajar Coding?</h1>
                    <div className='flex flex-row w-full my-2 text-base sm:text-xl lg:text-2xl sm:w-4/5 lg:w-3/5 2xl:w-2/5'>
                        <div className='w-1/5'>
                            <img src={BoyLeft} alt='boyleft' className='hidden sm:block sm:h-full'/>
                        </div>
                        <div className='text-center grid grid-rows-2 mr-8 w-full '>
                            <div className='bg-[#FFDC59] border-4 border-[#4D9460] rounded-[15px] py-2 my-2 flex items-center'>
                                <p className='w-full '>Meningkatkan kreativitas di dunia digital</p>
                            </div>
                            <div className='bg-[#FFDC59] border-4 border-[#4D9460] rounded-[15px] py-2 my-2 flex items-center'>
                                <p className='w-full'>Belajar berpikir dalam langkah yang teratur</p>
                            </div> 
                        </div>
                    </div>

                    <div className='flex flex-row-reverse w-full my-2 text-base sm:text-xl lg:text-2xl sm:w-4/5 lg:w-3/5 2xl:w-2/5'>
                        <div className='w-1/6'>
                            <img src={BoyRight} alt='boyleft' className='hidden sm:block sm:h-full'/>
                        </div>
                        <div className='text-center grid grid-rows-2 ml-8 w-full'>
                            <div className='bg-[#FFDC59] border-4 border-[#4D9460] rounded-[15px] py-2 my-2 flex items-center'>
                                <p className='w-full'>Meningkatkan kemampuan memecahkan masalah</p>
                            </div>
                            <div className='bg-[#FFDC59] border-4 border-[#4D9460] rounded-[15px] py-2 my-2 flex items-center'>
                                <p className='w-full'>Melatih komunikasi dengan orang lain</p>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>
    )
}
