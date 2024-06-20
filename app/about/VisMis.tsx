import React from 'react'

export default function VisMis() {
  return (
    <div className='w-full px-8 sm:px-[100px] my-20 mt-[200px] flex flex-wrap md:flex-nowrap justify-center gap-10'>
        <div className="flex max-w-[600px] gap-8">
            <div className="hidden xs:block min-w-[50px] lg:min-w-[100px] max-w-[100px] h-full border-t border-[#3a3a38] translate-y-[1.5rem]"></div>
            <div className="">
                <h3 className='text-5xl mb-10'>Our Vision</h3>
                <p>To be the leading corporate law office in Ethiopia known for its reliable legal services.</p>
            </div>
        </div>
        <div className="flex max-w-[600px] gap-8">
            <div className="hidden xs:block min-w-[50px] lg:min-w-[100px] max-w-[100px] h-full border-t border-[#3a3a38] translate-y-[1.5rem]"></div>
            <div className="">
                <h3 className='text-5xl mb-10'>Our Mission</h3>
                <p>At ELO, we strive to: -</p>
                <ul>
                    <li>deliver the uppermost standards of legal services and representation to our client base while maintaining the highest ethical and professional standards</li>
                    <li>exceed the reasonable and legitimate expectations of our clients in an ethical manner to provide our services in a practical, innovative, and cost-effective manner</li>
                    <li>gain the trust of our clients, help them understand the law, and achieve successful outcomes in their legal issues and disputes</li>
                    <li>prioritize the legitimate needs of our clients and nurture a shared vision and team environment</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
