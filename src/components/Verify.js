import React, { useState } from 'react'
import logo from '../assets/imgs/tenbox-logo.png'
import bg from '../assets/imgs/ loginBg.png'
import ceo from '../assets/imgs/ceo.png'
import googleIcon from '../assets/imgs/googleIcon.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, updateName } from '../features/User'
import { useRef } from 'react'


// const Login = () => {
//   const user = useSelector((state)=>state.user.value);
//   const dispatch = useDispatch()
//   const inputRef = useRef(null)
//   const [inputValue, setInputValue] = useState()
//   // const val = (e)=> e.target.value;

//   const handleInput = (e)=>{
//     e.preventDefault();
//     dispatch(updateName(e.target.value));
//   }
// 

const Verify = () => {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    const inputRef6 = useRef();

    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [input4, setInput4] = useState()
    const [input5, setInput5] = useState()
    const [input6, setInput6] = useState('')

    const handleInput1 = (e)=>{
        setInput1(e.target.value);
        if(e.target.value!=0) { 
            inputRef2.current.focus()
        }else{
            inputRef1.current.focus()
        } 
}
const handleInput2 = (e)=>{
    setInput2(e.target.value);
    if(e.target.value!=0) { 
        inputRef3.current.focus()
    }else{
        inputRef2.current.focus()
    } 
}
const handleInput3 = (e)=>{
    setInput3(e.target.value);
    if(e.target.value!=0) { 
        inputRef4.current.focus()
    }else{
        inputRef3.current.focus()
    } 
}
const handleInput4 = (e)=>{
    setInput4(e.target.value);
    if(e.target.value!=0) { 
        inputRef5.current.focus()
    }else{
        inputRef4.current.focus()
    } 
}
const handleInput5 = (e)=>{
    setInput5(e.target.value);
    if(e.target.value!=0) { 
        inputRef6.current.focus()
    }else{
        inputRef5.current.focus()
    } 
}
const handleInput6 = (e)=>{
    setInput6(e.target.value);
}

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
           Continue to your Tenbox account
         </h2>
         <p className="mt-2 text-sm leading-6 text-gray-500">
           Enter the 6 digit code sent to you at {' '}
           <a href="#" className="font-semibold text-[#0069FF] hover:text-[#006affc8]">
              example@gmail.com
           </a>
         </p>
       </div>

       <div className="mt-10">
         <h2 className='text-slate-800 font-bold mb-2'> Your 6-digit number</h2>

         <div className='flex gap-2 text-slate-800'>
             <input ref={inputRef1} maxLength={1} value={input1} onInput={(e)=>handleInput1(e)} type="text" className='border w-12' />
             <input ref={inputRef2} maxLength={1} value={input2} onInput={(e)=>handleInput2(e)}  type="text" className='border w-12' />
             <input ref={inputRef3} maxLength={1} value={input3} onInput={(e)=>handleInput3(e)}  type="text" className='border w-12' />
             <input ref={inputRef4} maxLength={1} value={input4} onInput={(e)=>handleInput4(e)}  type="text" className='border w-12' />
             <input ref={inputRef5} maxLength={1} value={input5} onInput={(e)=>handleInput5(e)} type="text" className='border w-12' />
             <input ref={inputRef6} maxLength={1} value={input6} onInput={(e)=>handleInput6(e)} type="text" className='border w-12' />
         </div>

         <button disabled={input6 === ''} className={`border px-32 rounded-xl py-2 my-6 block ${input6 === '' ? 'bg-gray-300 text-gray-100' : 'bg-[#0069FF] text-white'}`}>Continue</button>
         <p className='text-base text-center text-gray-600'>Resend code: 0:12</p>

       </div>
     </div>
   </div>
  
</div>
  )
}

export default Verify