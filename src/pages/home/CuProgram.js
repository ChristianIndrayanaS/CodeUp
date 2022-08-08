import React from 'react';
import Bg5 from '../../assets/bg5.png';
import Card from '../../components/card/Card';

export default function CuProgram() {
  const program = [
    {
      name:'cardProgram',
      allProgram:[
        {
          id:"1",
          img:Bg5,
          title:"Basic Programing",
          description:"Memberikan pengalaman baru untuk mereka yang belum pernah belajar bahasa pemrograman sebelumnya. Memperkenalkan konsep dasar pemrograman menggunakan online platform."
        },
        {
          id:"2",
          img:Bg5,
          title:"3D Modelling",
          description:"Melatih imajinasi dengan menciptkan objek 3D yang dituangkan dalam bentuk visual nyata, baik secara bentuk, tekstur, dan ukuran suatu objek."
        },
        {
          id:"3",
          img:Bg5,
          title:"Virtual Reality",
          description:""
        },
        {
          id:"4",
          img:Bg5,
          title:"Machine Learning",
          description:"Membuat suatu sistem yang dapat meniru cara manusia belajar yang berfokus pada penggunaan data yang diberikan dan digunakan oleh sistem untuk melakukan perintah yang diminta."
        },
        {
          id:"5",
          img:Bg5,
          title:"Web Development",
          description:"Membuat dan mengembangkan situs website mulai dari yang sederhana sampai yang kompleks. "
        }
        ]
    }
  ]
  return (
    <div className='w-full bg-no-repeat bg-cover bg-fixed bg-center text-[#FFFFFF] ' style={{backgroundImage : `url('${Bg5}')`}}>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-center text-3xl mt-10 my-4 sm:my-10 sm:text-5xl lg:text-6xl xl:text-7xl'>Apa saja yang diajarkan</h1>
        </div>
        <div className='flex justify-center text-left pb-4 '>
          <div className='grid grid-rows-5 gap-6 w-10/12 sm:w-4/5 lg:w-4/6 h-min'>
            {program.map((content) =>(
              <>
                {content.allProgram.map((program) =>(
                  <div className='border-2 border-black h-min backdrop-blur-xl'>
                    <Card cards={content.name} img={program.img} title={program.title} description={program.description}/>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
    </div>
  )
}
