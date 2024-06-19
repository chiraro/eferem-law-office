import React from 'react'

export default function Map() {
  return (
    <div className='w-full h-[500px] relative mt-40'>
        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60914.01754274856!2d38.75401865322817!3d9.015372403202983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2set!4v1718837459736!5m2!1sen!2set" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
