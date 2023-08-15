import React from 'react'

const StatusButton = ({status}) => {
  return (
    <div>
      <button className={`w-[72px] h-[26px] border rounded text-[12px] ${status === 'Scheduled' ? 'text-gray-500 border-gray-500': status === 'Delivered' ? 'text-green-500 border-green-500' : status === 'Picked up' ? 'text-blue-600 border-blue-600' : status === 'Cancelled' ? 'text-red-500 border-red-500' : status === 'Pending' ? 'text-orange-500 border-orange-500' : '' }`}>{status}</button>
    </div>
  )
}

export default StatusButton
