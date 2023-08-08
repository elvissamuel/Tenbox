import React, { useState } from 'react'
import logo from '../assets/imgs/tenbox-logo.png'
import bg from '../assets/imgs/ loginBg.png'
import ceo from '../assets/imgs/ceo.png'
import businessImg from '../assets/imgs/buildings.png'
import logisticsImg from '../assets/imgs/truckfast.png'

const ContinueToDashboard = () => {
  return (
    <div className="flex min-h-screen font-lato">
         <div className="relative hidden w-[40%] px-10 py-4 lg:block">
            <div className='z-10 relative flex flex-col gap-24 pt-16 xl:pr-12 xxl:pr-32'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h2 className='lg:text-5xl xxl:text-6xl pb-6'>
                        Best-in-class delivery for your business
                    </h2>
                    <p className='text-base'>Tenbox helps you experience a new wave in logistics with personalized post-purchased journey</p>
                </div>

                <div>
                <p className='text-base'>"Tenbox is the missing piece of the consumer-facing delivery experience. It has tremendously help streamline our logistics effort"</p>
                <div className='flex gap-4 mt-4'>
                    <img src={ceo} alt="" />
                    <div className='text-sm'>
                        <p>Akin Ogunmade</p>
                        <p>CEO Asiri</p>
                    </div>
                </div>
            </div>
            </div>
            
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={bg}
            alt=""
          />
        </div>

        <div className="text-slate-700 flex lg:w-[60%] flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mx-auto">
          <div className='max-w-md mt-14 mx-auto'> 
            <h2 className='text-4xl my-2'>You're almost there!</h2>
            <p className='text-base text-slate-500'>To ensure you get a tailored experience, please chose how you want to use Tenbox</p>

            <div className='shadow p-4 flex gap-4 my-6 rounded-lg cursor-pointer hover:bg-slate-100'>
                <div className='w-10 h-10 bg-slate-200 flex-shrink-0 rounded-[50%] flex items-center justify-center p-2'>
                    <img className='w-full h-full object-contain' src={logisticsImg} alt="" />
                </div>
                <div>
                    <h2 className='text-xl mb-1'>Logistics Provider</h2>
                    <p className='text-base text-slate-500 pr-8'>I want to use Tenbox to setup my logistics business for third party business providers</p>
                </div>
            </div>

            <div className='shadow p-4 flex gap-4 my-6 rounded-lg cursor-pointer hover:bg-slate-100'>
                <div className='w-10 h-10 bg-slate-200 flex-shrink-0 rounded-[50%] flex items-center justify-center p-2'>
                    <img className='w-full h-full object-contain' src={businessImg} alt="" />
                </div>
                <div>
                    <h2 className='text-xl mb-1'>Business Owner</h2>
                    <p className='text-base text-slate-500'>I want to use Tenbox to setup my e-commerce business and integrate with logistics providers</p>
                </div>
            </div>

            <button className='w-full bg-[#0069FF] text-white rounded-lg py-2'>Continue to dashboard</button>
          </div>
        </div>
       
    </div>
  )
}

export default ContinueToDashboard