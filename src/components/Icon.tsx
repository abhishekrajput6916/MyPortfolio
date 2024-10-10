import Image from 'next/image'
import React from 'react'

const CustomIcon = ({icon,className}:{icon:React.ElementType,className?:string}) => {
  const Component = icon;
  return (
    <Component className={className}/>
  )
}

export default CustomIcon