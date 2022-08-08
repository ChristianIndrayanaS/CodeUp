import React from 'react'
import Bg1 from '../../assets/bg1.jpg';
import Button from '../../components/button/Button';

export default function CuIntroduction() {
    const BtnStyle = 'font-bold text-center border border-[#000000] bg-[#E9543C] my-10 p-2 xl:text-2xl rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFB03A] duration-100';
    
    return (
        <div className='w-full bg-no-repeat bg-cover bg-center text-[#FFFFFF] xl:h-screen' style={{backgroundImage : `url('${Bg1}')`}}>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-4xl my-10 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>Hai Code Up Friend!</h1>
            </div>
            <div className=' flex flex-col items-center lg:mt-8'>
                    <div className='items-center w-4/5 sm:w-3/5 lg:w-2/4 text-base sm:text-lg lg:text-xl 2xl:text-3xl'>
                        <p>Code Up merupakan tempat belajar coding yang di tujukan untuk anak-anak atapun guru.</p>
                        <br/>
                        <p>Code Up menawarkan kelas untuk kegiatan afterschool atau mengisi kegiatan liburan sekolah.</p>
                        <br/>
                        <p>Kami memberikan pembelajaran coding yang menyenangkan untuk meningkatkan kreatifitas dan kemampuan menggunakan teknologi di dunia digital saat ini dengan program-program yang sudah dirancang dengan baik.</p>
                        <br/>
                        <p className='font-bold text-center'>Mulai lah belajar coding sejak dini bersama Code Up!</p>
                    </div>
                    <Button text="Join Free Trial Class Now" styled={BtnStyle}/>
            </div>
        </div>
    )
}
