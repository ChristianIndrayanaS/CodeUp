import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/footer';
import Testimony from '../../components/testimony/Testimony';
import Button from '../../components/button/Button';
import ToTop from '../../components/toTop/ToTop';

import KinderGradePhoto from '../../assets/images/kinderGrade.png';
import Ilustrasi from '../../assets/images/ilustrasi1.png';
import Ilustrasi2 from '../../assets/images/ilustrasi2.png';
import KioPhoto from '../../assets/images/KioPhoto.png';

export default function CuKinder() {
  return (
    <>
        <Navbar/>
            <div className='w-full bg-no-repeat bg-cover bg-center '>
                <div className='flex flex-col items-center justify-center font-bold text-[#5470FF]'>
                    <h1 className='text-4xl mt-10 mb-6 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>Kinder</h1>
                    <p className='text-2xl'>6-10 Tahun</p>
                </div>
                <div className='flex flex-col items-center mt-6 lg:flex-row'>
                    <div className=''>
                        <img src={KinderGradePhoto} alt='example' className='block ml-auto mr-auto w-4/5'/>
                    </div>
                    <div className='flex flex-col w-3/5 mt-4 items-center justify-center text-center lg:items-start lg:justify-start lg:text-left'>
                        <div className='text-lg xl:text-2xl w-11/12'>
                            <p>Kinder Program dirancang untuk mengajar siswa SD yang ingin belajar pemrograman serta melatih pemikiran dan keterampilan berimajinasi. Dengan menggunakan alat pengajar yang menyenangkan dan didampingi oleh guru secara private sehingga murid dapat belajar sambil bermain.</p>
                        </div>
                        <a href='https://forms.gle/ompKQZeEcGcakoBJA'>
                            <Button className='font-bold text-center w-60 h-10 bg-[#5470FF] text-[#FFFFFF] my-10 text-xl rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100'>
                                Join Trial Class Now
                            </Button>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center '>
                    <h1 className='font-bold text-4xl mt-10 mb-6 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#5470FF]'>Testimoni</h1>
                    <div className='grid grid-rows-1 gap-4 w-3/4 text-lg text-justify'>
                        <div>
                            <Testimony source={KioPhoto} alt={'KioPhoto'} name={'-Kiofumi'} comment={'Les coding di Code Up itu seru banget, guru-gurunya sangat ramah dan sudah menguasai semua materi yang diajarkan juga. Sejak saya les di Code Up kemampuan coding saya meningkat bahkan menolong saya dalam lomba 😊'}></Testimony>
                        </div>
                        <div className='xl:pl-32'>
                            <Testimony source={Ilustrasi2} alt={'namePhoto'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, felis eget laoreet malesuada, dui purus condimentum tellus, ac porta metus lectus vitae lacus. Ut purus odio, congue at sodales eget, aliquam non quam. Fusce sagittis egestas velit quis vestibulum. Donec suscipit neque sed leo malesuada imperdiet. Vivamus malesuada vulputate ante non ornare. Morbi vel nisi ut felis condimentum pretium vitae vitae magna.'}></Testimony>
                        </div>
                        <div>
                            <Testimony source={Ilustrasi} alt={'namePhoto'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, felis eget laoreet malesuada, dui purus condimentum tellus, ac porta metus lectus vitae lacus. Ut purus odio, congue at sodales eget, aliquam non quam. Fusce sagittis egestas velit quis vestibulum. Donec suscipit neque sed leo malesuada imperdiet. Vivamus malesuada vulputate ante non ornare. Morbi vel nisi ut felis condimentum pretium vitae vitae magna.'}></Testimony>
                        </div>
                    </div>

                </div>
            </div>
        <ToTop/>
        <Footer/>
    </>
  )
}
