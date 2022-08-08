import React from 'react';
import Bg4 from '../../assets/bg4.png';
import Card from '../../components/card/Card';

export default function CuGrades() {
    const DescKinder = 'Dirancang untuk siswa SD yang ingin belajar coding untuk melatih pemikiran, keterampilan dan imajinasi';
    const DescTeenager = 'Dirancang untuk siswa SMP yang ingin belajar coding atapun yang sudah pernah belajar coding sebelumnya';
    const DescAdult = 'Dirancang untuk mereka yang berusia diatas 15 tahun yang ingin mempelajari coding';

    return (
        <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center xl:h-screen' style={{backgroundImage : `url('${Bg4}')`}}>
            <div className='flex flex-col items-center'>
            <h1 className='font-bold text-center text-3xl mt-10 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Program Code Up</h1>
            </div>

            <div className='flex justify-center font-bold text-center lg:mt-6'>
                <div className='grid grid-cols-1 gap-6 h-1/2 w-3/5 text-base my-10 lg:w-3/5 lg:grid-cols-3 lg:text-lg'>
                    <div className='border-2 border-[#6EBA4D] bg-[#FBE18A]'><Card cards='cardGrade' title='Kinder' grade='6-10 Tahun' description={DescKinder}/></div>
                    <div className='border-2 border-[#6EBA4D] bg-[#FBE18A]'><Card cards='cardGrade' title='Teenager' grade='11-14 Tahun' description={DescTeenager}/></div>
                    <div className='border-2 border-[#6EBA4D] bg-[#FBE18A]'><Card cards='cardGrade' title='Adult' grade='15 Tahun ke atas' description={DescAdult}/></div>
                </div>
            </div>
        </div>
    )
}
