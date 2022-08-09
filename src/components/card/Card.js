import React from 'react';
import Button from '../button/Button';

export default function Card(props) {

  const cardName = props.cards;

  const BtnStyle = 'font-bold text-center border border-[#000000] bg-[#6EBA4D] m-4 py-2 xl:text-lg rounded-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-[#FFB03A] duration-100';
  
  if(cardName === 'cardHowToTeach'){
    return (
      <div className='flex flex-col justify-center items-center'>
        <div>{props.animation}</div>
        <p style={props.styleP} className='mx-2 my-2 py-2'>{props.description}</p>
      </div>
    )
  }
  else if(cardName === 'cardGrade'){
    return (
      <>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='my-4 text-3xl'>{props.title}</h2>
          <h3 className='text-xl mb-4 lg:text-2xl'>{props.grade}</h3>
        </div>
        <div className='text-center'>
          <p className='mx-2 my-4'>{props.description}</p>
        </div>
        <div >
          <Button styled={BtnStyle} text='Baca Selengkapnya'/>
        </div>
      </>
      
    )
  }
  else if(cardName === 'cardProgram'){
    return (
      <>
        <div className='flex flex-row m-2'>
          <div className='text-7xl flex items-center hidden md:block'>
            <ion-icon name="rocket-outline"></ion-icon>
          </div>
            <div className='flex flex-col gap-2 ml-4 w-full '>
              <h1 className='font-bold text-lg lg:text-2xl text-center md:text-left'>{props.title}</h1>
              <hr></hr>
              <p className='text-base lg:text-xl'>{props.description}</p>
            </div>
        </div>
      </>
    )
  }
}