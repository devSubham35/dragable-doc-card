'use client'
import React, { useRef } from 'react'
import Card from './Card'

const Data = [
    {
        description: "Artificial intelligence revolutionizes industries, enhancing efficiency and productivity exponentially.",
        size: ".5mb",
        button: true,
        loder: true
    },
    {
        description: "Machine learning algorithms analyze vast data sets, unlocking insightful patterns.",
        size: ".2mb",
        button: true, // Show & Hide the button
        loder: false
    },
    {
        description: "Neural networks emulate human cognition, enabling AI to solve complex problems.",
        size: ".7mb",
        button: false,
        loder: false
    },
    {
        description: "Natural language processing enables AI to understand and communicate seamlessly.",
        size: ".4mb",

        button: true,
        loder: false
    },
    {
        description: "Natural language processing enables AI to understand and communicate seamlessly.",
        size: ".4mb",
        button: true,
        loder: true
    },
]

const DocPage = () => {

  const ref = useRef(null)

  return (
    <div ref={ref} className='fixed z-[20] w-full h-full flex'>
      {Data.map((value, index)=>(
        <Card description={value.description} size={value.size} icon={value.icon} button={value.button} loader={value.loder} referance={ref}/>
      ))}
    </div>
  )
}

export default DocPage
