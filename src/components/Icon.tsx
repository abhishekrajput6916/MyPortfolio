import Image from 'next/image'
import React from 'react'

const CustomIcon = ({icon,className}:{icon:string,className?:string}) => {
  const Component = icon;
  return (
    <Image src={Component} alt="" className={className}/>
  )
}

export default CustomIcon