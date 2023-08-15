import React, { useState } from 'react'
import LineChart from '../../charts/LineChart'
import { UserData } from '../../../TestData'
import BarChart from '../../charts/BarChart'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/24/outline'


const BusinessChart = () => {
    const [userData, setUserData] = useState({
            labels: UserData.map((user)=>user.year),
            datasets: [{
            label: 'user gained',
            data: UserData.map((user)=>user.userGain),
            backgroundColor: 'rgb(0, 105, 2550)',
            tension:.5,
            fill:true,
            // backgroundColor: 'red',
            // borderColor: 'rgba(75, 192, 192, 1)',
            pointRadius:0,
            },
            ]
        })

        

    const [dataOption, setDataOption] = useState({
        scales: {
          x: {
            grid: {
              display: false,
              drawBorder: true,
            },
            ticks: {
                display: false, // Set display to false to remove the x-axis labels
              },
          },
          y: {
            grid: {
                display: true,
                drawBorder: true,
            },
            ticks: {
                display: false, // Set display to false to remove the x-axis labels
                maxTicksLimit: 6,
              },
          },
        },
        
      }) 

  return (
    <div>
        <div className='text-slate-800 w-full mx-auto border'>
            <div className='flex justify-between p-4 text-base'>
                <div>
                    <h2 className='text-2xl'>Dashboard</h2>
                    <p className='text-sm text-slate-500'>An aggregated view of your business performance</p>
                </div>
                <div className='flex gap-2'>
                    <button className='border flex gap-2 text-sm px-5 py-1 items-center justify-center over rounded-xl'>
                        <div className='w-5 h-5'>
                            <PlusCircleIcon /> 
                        </div>
                        <span>Add Report</span>
                    </button>
                    
                    <button className='border flex gap-2 items-center justify-center text-sm px-5 py-2 rounded'>
                        <div className='w-5 h-5'>
                            <ArrowDownTrayIcon /> 
                        </div>Export CSV
                    </button>
                </div>
            </div>
            <div>

            </div>
        </div>
        <div className='w-full max-w-[1200px] grid grid-cols-2 gap-4 my-6 '>
            <div className='col-span-1'>
                <LineChart myData={userData} myOption={dataOption} />
            </div>
            <div className='col-span-1'>
                <BarChart myData={userData} myOption={dataOption} />
            </div>
        </div>
    </div>
  )
}

export default BusinessChart