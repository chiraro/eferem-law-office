import React from 'react'

export default function GetInTouch() {
  return (
    <div className='w-full px-5 md:px-[120px] mb-14'>
        <h2 className='text-6xl mb-14'>Get In Touch</h2>
        <div className="flex items-center flex-wrap gap-10">
            <div className='max-w-[400px]'>
                <h3 className='text-3xl font-medium mb-3'>Stadium</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure consequuntur vero nisi iste numquam inventore rerum fuga quas sequi.</p>
            </div>
            <div className="border-l border-[#085AA3] pl-14 py-3 min-w-[300px]">
                <h3 className='text-3xl font-medium mb-3'>Bole</h3>
                <p>4264 Mesa Drive</p>
                <p>contact@elo.com</p>
                <p className='font-bold'>+251 911 11 11 11</p>
            </div>
            <div className="border-l border-[#085AA3] pl-14 py-3 min-w-[300px]">
                <h3 className='text-3xl font-medium mb-3'>Lideta</h3>
                <p>4264 Mesa Drive</p>
                <p>contact@elo.com</p>
                <p className='font-bold'>+251 911 11 11 11</p>
            </div>
        </div>
    </div>
  )
}
