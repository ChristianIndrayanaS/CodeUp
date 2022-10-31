import React from 'react';
import Bg4 from '../../assets/images/bg4.png';
import kinderPhoto from '../../assets/images/kinderPhoto.png';
import teenagePhoto from '../../assets/images/teenagerPhoto.png';
import adultPhoto from '../../assets/images/adultPhoto.png';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

export default function CuGrades() {
    const allGrade =[
        {
            id:1,
            image:kinderPhoto,
            title:"Kinder",
            ages:"6-10 Tahun",
            description:"Dirancang untuk siswa SD yang ingin belajar coding untuk melatih pemikiran, keterampilan dan imajinasi"
        },
        {
            id:2,
            title:"Teenager",
            image:teenagePhoto,
            ages:"11-14 Tahun",
            description:"Dirancang untuk siswa SMP yang ingin belajar coding atapun yang sudah pernah belajar coding sebelumnya"
        },
        {
            id:3,
            title:"Adult",
            image:adultPhoto,
            ages:"15 Tahun keatas",
            description:"Dirancang untuk mereka yang berusia diatas 15 tahun yang belum dan sudah pernah mempelajari coding"
        },
    ]

    return (
        <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center xl:h-screen' style={{backgroundImage : `url('${Bg4}')`}}>
            <div className='flex flex-col items-center'>
            <h1 className='font-bold text-center text-3xl text-[#5470FF] mt-10 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Kelas Code Up</h1>
            </div>

            <div className='flex justify-center font-bold text-center my-6 '>
                <div className='grid grid-cols-1 gap-6 h-1/2 w-2/5 text-base lg:w-3/5 lg:grid-cols-3 lg:text-lg xl:text-xl'>
                    {allGrade.map((grades) =>(
                        <div key={grades.id}>
                            <Card className='rounded-[15px] border-2 border-[#6EBA4D] bg-[#FBE18A] h-full '>
                                <div className='relative '>
                                    <img src={grades.image} alt='grades' className='blur-[1px] brightness-75 bg-no-repeat bg-cover w-full'/>
                                    <div className='absolute top-10 w-full text-[#FFFFFF]'>
                                        <h2 className='text-3xl my-4'>{grades.title}</h2>
                                        <h3 className='text-xl lg:text-2xl'>{grades.ages}</h3>
                                    </div>
                                </div>
                                <p className='m-4'>{grades.description}</p>
                                <Button className=' font-semibold text-center bg-[#6EBA4D] m-4 p-2 xl:text-lg rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFB03A] duration-100'>
                                    Baca Selengkapnya
                                </Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
