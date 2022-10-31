import React from 'react';
import Bg5 from '../../assets/images/bg5.png';
import iconPhoto from '../../assets/images/icon-photo.png';
import Card from '../../components/card/Card';

export default function CuProgram() {
  const allProgram = [
      {
        id:1,
        image:iconPhoto,
        title:"Basic Programing",
        description:"Memberikan pengalaman baru untuk mereka yang belum pernah belajar bahasa pemrograman sebelumnya. Memperkenalkan konsep dasar pemrograman menggunakan online platform."
      },
      {
        id:2,
        image:iconPhoto,
        title:"3D Modelling",
        description:"Melatih imajinasi dengan menciptkan objek 3D yang dituangkan dalam bentuk visual nyata, baik secara bentuk, tekstur, dan ukuran suatu objek."
      },
      {
        id:3,
        image:iconPhoto,
        title:"Machine Learning",
        description:"Membuat suatu sistem yang dapat meniru cara manusia belajar yang berfokus pada penggunaan data yang diberikan dan digunakan oleh sistem untuk melakukan perintah yang diminta."
      },
      {
        id:4,
        image:iconPhoto,
        title:"Web Development",
        description:"Membuat dan mengembangkan situs website mulai dari yang sederhana sampai yang kompleks. "
        }
    ]
  return (
    <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center text-[#FFFFFF] ' style={{backgroundImage : `url('${Bg5}')`}}>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-center text-3xl mt-10 my-4 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Apa saja yang diajarkan</h1>
        </div>
        <div className='flex justify-center text-left mt-8'>
          <div className='grid grid-rows-4 gap-6 w-10/12 sm:w-4/5 lg:w-4/6 mb-4'>
            {allProgram.map((program) =>(
              <div key={program.id}>
                <Card className='border-2 border-black backdrop-blur-xl'>
                    <div className='flex flex-row '>
                      {/* <div className='text-7xl items-center hidden md:block'>
                        <ion-icon name="rocket-outline"></ion-icon>
                      </div> */}
                      <img src={program.image} alt='program' className='hidden md:block w-40 '/>
                        <div className='flex flex-col gap-2 m-4 w-full '>
                          <h1 className='font-bold text-lg lg:text-2xl text-center md:text-left'>{program.title}</h1>
                          <hr></hr>
                          <p className='text-base lg:text-xl'>{program.description}</p>
                        </div>
                    </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
