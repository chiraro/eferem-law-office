import React from 'react'
import practiceAreas from '@/data/practiceAreas'

export default function PAList() {
  return (
    <div className='w-full px-8 sm:px-[100px] my-20 flex flex-col gap-20'>
        {practiceAreas?.map((pa, index) => (
            <div id={pa.id} key={index} className="relative w-full p-5 py-10 sm:p-20 rounded-3xl bg-[#085AA3]">
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#3a3a38] p-2 sm:p-5 border-8 border-[#F1F1EF] text-white text-3xl sm:text-5xl rounded-lg">{pa.icon}</div>
                <div className="text-white">
                    <h3 className='text-3xl font-bold mb-10'>{pa.title}</h3>
                    <ul className='list-disc list-inside'>
                        {pa.services.map((service, index) => (
                            <li className='mb-5 text-xl leading-[2rem] font-light' key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
  )
}
