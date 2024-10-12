import React from 'react'

const Map = ({className}:{className:string}) => {
  return (
    <div className={className}>
    {/* <div className='absolute inset-0 bg-black/20'></div> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58688.49444213458!2d75.75602054747021!3d23.169072202492217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637469de00ff23%3A0x7f82abdf7899d412!2sUjjain%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1728656042071!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
    </div>
  )
}

export default Map