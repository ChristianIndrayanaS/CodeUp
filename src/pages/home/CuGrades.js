import React from 'react';
import Bg4 from '../../assets/bg4.png';
import Card from '../../components/card/Card';

export default function CuGrades() {
    const grade =[
        {
            nameCard : "cardGrade",
            allGrade :[
                {
                    id:"1",
                    title:"Kinder",
                    ages:"6-10 Tahun",
                    description:"Dirancang untuk siswa SD yang ingin belajar coding untuk melatih pemikiran, keterampilan dan imajinasi"
                },
                {
                    id:"2",
                    title:"Teenager",
                    ages:"11-14 Tahun",
                    description:"Dirancang untuk siswa SMP yang ingin belajar coding atapun yang sudah pernah belajar coding sebelumnya"
                },
                {
                    id:"3",
                    title:"Adult",
                    ages:"15 Tahun keatas",
                    description:"Dirancang untuk mereka yang berusia diatas 15 tahun yang ingin mempelajari coding"
                },
            ]
        }
    ]

    return (
        <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center xl:h-screen' style={{backgroundImage : `url('${Bg4}')`}}>
            <div className='flex flex-col items-center'>
            <h1 className='font-bold text-center text-3xl mt-10 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Kelas Code Up</h1>
            </div>

            <div className='flex justify-center font-bold text-center lg:mt-6'>
                <div className='grid grid-cols-1 gap-6 h-1/2 w-3/5 text-base my-10 lg:w-3/5 lg:grid-cols-3 lg:text-lg xl:text-xl'>
                    {grade.map((content) =>(
                        <>
                        {content.allGrade.map((grades) =>(
                            <div className='border-2 border-[#6EBA4D] bg-[#FBE18A]'>
                                <Card cards={content.nameCard} title={grades.title} grade={grades.ages} description={grades.description}/>
                            </div>
                        ))}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
