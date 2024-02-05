'use client'
import React from 'react'
import Card from "../Components/Card"
import Background from '@/Components/Background'
import DocPage from '@/Components/DocPage'

const page = () => {
  return (
    <div className='relative h-screen w-full'>
      <Background/>
      <DocPage/>
    </div>
  )
}

export default page
