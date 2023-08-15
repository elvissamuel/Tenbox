import React from 'react'
import logo from '../../assets/imgs/tenbox-logo.png'
import bg from '../../assets/imgs/ loginBg.png'
import ceo from '../../assets/imgs/ceo.png'
import googleIcon from '../../assets/imgs/googleIcon.png'
import { Link } from 'react-router-dom'

const BusinessSignup = () => {
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

   <div className="flex lg:w-[60%] flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 mx-auto">
     <div className="mx-auto w-full max-w-sm lg:w-96">
       <div>
         
         <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
           You are creating a new Tenbox account
         </h2>
         <p className="mt-2 text-sm leading-6 text-gray-500">
           Already have an account?{' '}
           <a href="#" className="font-semibold text-[#0069FF] hover:text-[#006affc8]">
              Sign in
           </a>
         </p>
       </div>

       <div className="mt-10">
         <div>
           <form action="#" method="POST" className="space-y-6">
             <div>
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Buisness Name
               </label>
               <div className="mt-2">
                 <input
                   id="business"
                   name="business"
                   type="text"
                   placeholder='Your business name'
                   autoComplete="text"
                   required
                   className="block w-full text-slate-800 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0069FF] sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div>
               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                 Email Address
               </label>
               <div className="mt-2">
                 <input
                   id="email"
                   name="email"
                   type="email"
                   placeholder='Enter your email address'
                   autoComplete="email address"
                   required
                   className="block w-full text-slate-800 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0069FF] sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div>
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
               </label>
               <div className="mt-2">
                 <input
                   id="password"
                   name="password"
                   type="password"
                   autoComplete="current-password"
                   required
                   className="block w-full text-slate-800 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div>
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
               </label>
               <div className="mt-2">
                 <input
                   id="confirm"
                   name="confirm"
                   type="password"
                   autoComplete="confirm-password"
                   required
                   className="block w-full text-slate-800 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>

             <div className="flex items-center justify-between">

               <div className='text-slate-800 text-sm'>
               <input className='outline-none' type="checkbox" name="" id="" />
                <span> Please confirm that you have read our <a href="" className='text-[#006affd0]'>terms and conditions </a>and <a className='text-[#006affd0]' href="">privacy policy</a></span>
               </div>
             </div>

             <div>
               <Link to='/business/signin'>
                 <button
                   type="submit"
                   className="flex w-full justify-center rounded-md bg-[#0069FF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#006affd0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0069FF]"
                 >
                   Sign up
                 </button>
               </Link>
             </div>
           </form>
         </div>

         <div className="mt-10">
           <div className="relative">
             <div className="absolute inset-0 flex items-center" aria-hidden="true">
               <div className="w-full border-t border-gray-200" />
             </div>
             <div className="relative flex justify-center text-sm font-medium leading-6">
               <span className="bg-white px-6 text-gray-900">Or continue with</span>
             </div>
           </div>

           <div className="mt-6 gap-4">
             <a
               href="#"
               className="flex w-full border items-center justify-center gap-3 rounded-md bg-slate-100 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
             >
               <img src={googleIcon} alt="" />
               <span className="text-sm text-slate-800 leading-6">Google</span>
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
  
</div>
  )
}

export default BusinessSignup