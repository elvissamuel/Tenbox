import React from 'react'
import dhl from '../../../assets/imgs/dhl.png'
import kwik from '../../../assets/imgs/kwik.png'
import StatusButton from './StatusButton';
import sendstack from '../../../assets/imgs/sendstack.png'
import magneto from '../../../assets/imgs/magneto.png'
import shopify from '../../../assets/imgs/shopify.png'
import aramex from '../../../assets/imgs/aramex.png'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {FaReact} from 'react-icons/fa'



const generateRandomString = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';

  for (let i = 0; i < 11; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }

  return randomString;
};

const transactions = [
    {
      logo: kwik,
      trackingId: generateRandomString(),
      packageType: 'Small Box',
      packageCategory: 'Accesories',
      shipmentDate: '25-Jul-2023',
      status: <StatusButton status='Scheduled' />,
      netAmount: <BiDotsVerticalRounded size={20} />,
    },
    {
      logo: dhl,
      trackingId: generateRandomString(),
      packageType: 'Flyer',
      packageCategory: 'Cosmetics',
      shipmentDate: '12-Aug-2023',
      status: <StatusButton status='Delivered' />,
      netAmount: <BiDotsVerticalRounded size={20} />,
    },
    {
      logo: aramex,
      trackingId: generateRandomString(),
      packageType: 'Large Box',
      packageCategory: 'Clothes',
      shipmentDate: '10-Aug-2023',
      status: <StatusButton status='Pending' />,
      netAmount: <BiDotsVerticalRounded size={20} />,
    },
    {
      logo: sendstack,
      trackingId: generateRandomString(),
      packageType: 'Flyer',
      packageCategory: 'Food',
      shipmentDate: '08-Jun-2023',
      status: <StatusButton status='Cancelled' />,
      netAmount: <BiDotsVerticalRounded size={20} />,
    },
    {
      logo: shopify,
      trackingId: generateRandomString(),
      packageType: 'Small Box',
      packageCategory: 'Furniture',
      shipmentDate: '01-Aug-2023',
      status: <StatusButton status='Picked up' />,
      netAmount: <BiDotsVerticalRounded size={20} />,
    },
    // More transactions...
  ]

const BusinessTable = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Shipments</h1>
          <ul className='text-slate-700 text-base flex gap-4 -mb-6 mt-6'>
            <li className='border-b-[2px] border-[#0069FF] text-[#0069FF] cursor-pointer'>All</li>
            <li className='cursor-pointer'>Ongoing</li>
            <li className='cursor-pointer'>Delivered</li>
            <li className='cursor-pointer'>Returned</li>
          </ul>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-[#0069FF] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#124d9f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            New Shipment
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Delivery Partner
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Tracking ID
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Package Type
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Package Category
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Shipment Date
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                  <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0"> <img src={transaction.logo} width='60px' alt="" /></td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                      {transaction.trackingId}
                    </td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.packageType}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.packageCategory}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.shipmentDate}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.status}</td>
                    <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.netAmount}</td>
                    {/* <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {transaction.id}</span>
                      </a>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessTable