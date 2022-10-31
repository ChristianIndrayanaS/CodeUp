import React from 'react';
import Card from '../card/Card';

export default function CardProgram(props) {
    const convo = <lord-icon src="https://cdn.lordicon.com/kjkiqtxg.json" trigger="loop" delay="2000" class='animated'> </lord-icon>;
    const clock = <lord-icon src="https://cdn.lordicon.com/osvvqecf.json" trigger="loop" delay="2000" class='animated'></lord-icon>;
    const coin = <lord-icon src="https://cdn.lordicon.com/pimvysaa.json" trigger="loop" delay="2000" class='animated'></lord-icon>
  
  return (
    <>
        <div>
            <Card className={`text-center text-xl ${props.styled}`} >
                {clock}
                <h3 className='font-bold'>Waktu pertemuan </h3>
                <p className='my-2'>60 Menit</p>
            </Card>
        </div>
        <div>
            <Card className={`text-center text-xl ${props.styled}`}>
                {convo}
                <h1 className='font-bold'>Pertemuan </h1>
                <p className='my-2'>{props.firstMeeting}</p>
                <p className='my-2'>{props.secondMeeting}</p>
            </Card>
        </div>
        <div>
            <Card className={`text-center text-xl ${props.styled}`}>
                {coin}
                <h3 className='font-bold'>Biaya </h3>
                <p className='my-2'>{props.firstPrice}</p>
                <p className='my-2'>{props.secondPrice}</p>
            </Card>
        </div>
    </>
  )
}
