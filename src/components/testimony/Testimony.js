import React from 'react';


export default function Testimony(props) {
  return (
    <div className='flex flex-col xl:flex-row items-center gap-10'>
        <img className='rounded-full w-52 bg-gradient-to-r from-sky-500 to-indigo-500' src={props.source} alt={props.alt}/>
        <div className='flex flex-col'>
          <p>{props.comment}</p>
          <b>{props.name}</b>
        </div>
    </div>
  )
}
