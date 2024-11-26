import React from 'react'

interface propsType {
    title:string;
}

const heading: React.FC<propsType> = ({title }) => {
  return (
    <div className='text-centre text4xl pb-8' >
    <p className='border-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default heading