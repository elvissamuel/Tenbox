import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


const BarChart = ({myData, myOption}) => {
  return <Bar data={myData} options={myOption} />
}

export default BarChart