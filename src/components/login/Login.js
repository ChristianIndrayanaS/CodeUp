import React from 'react';
// import Button from '../button/Button';
import Bg2 from '../../assets/images/newLogo.png';


export default function Login() {
  return (
    <div className='bg-blue-400 h-screen w-screen'>
      <div className='flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0'>
        <div className='flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0'>
          <div className='flex flex-col w-full md:w-1/2 p-4'>
            <div className='flex flex-col flex-1 justify-center mb-8'>
              <h1 class="text-4xl text-center font-thin">Welcome Code Up Teacher</h1>
              <div className='w-full mt-4'>
                <form className='form-horizontal w-3/4 mx-auto' method='POST' action='#'>
                  <div className='flex flex-col mt-4'>
                    <input id="username" type="text" className="flex-grow h-8 px-2 border rounded border-grey-400" name="username" required placeholder="Username"/>
                  </div>
                  <div className='flex flex-col mt-4'>
                    <input id="password" type="password" class="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password"/>
                  </div>
                  <div class="flex flex-col mt-8">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4">
                    <a class="no-underline hover:underline text-blue-dark text-xs" href="#a">Forgot Your Password?</a>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center' style={{backgroundImage : `url('${Bg2}')`}}></div>
        </div>
      </div>
    </div>
  )
}
