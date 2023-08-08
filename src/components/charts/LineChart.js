import React, { useEffect } from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const LineChart = ({myData, myOption}) => {

  return <Line data={myData} options={myOption} />
}

export default LineChart