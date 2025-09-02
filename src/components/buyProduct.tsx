'use client'

import React from 'react'
import {useRouter} from 'next/navigation'

const BuyProduct = () => {
  const router = useRouter()

  const handleClick = () => {
    // API Post /beli-product
    router.push('/product/id')
  }

  return (
    <>
    <button className='border-2 px-5 py-1 cursor-pointer' onClick={handleClick}>Beli</button>
    </>
  )
}

export default BuyProduct