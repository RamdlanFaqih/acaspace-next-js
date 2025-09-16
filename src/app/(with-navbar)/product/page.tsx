// SERVER COMPONENTS

import React from 'react'
import CardProduct from '@/components/CardProduct'
import { ProductResponse } from '@/types/product'
import Link from 'next/link'

interface Props {
  searchParams: {
    page?: string
  }
}

const Product = async ({searchParams}: Props) => {
  const page = Number(searchParams.page) || 1
  console.log("number page:", page)

  const res = await fetch(`http://localhost:2000/api/products?page=${page}`)

  const data: ProductResponse = await res.json()
  const product = data.results
  console.log(res)
  console.log(product)
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex gap-[20px] overflow-x-auto pb-5'>
        {product.map((item) => (
          <CardProduct
            id={item.id}
            current_price={item.current_price}
            discount={item.discount}
            image={item.image}
            name={item.name}
            original_price={item.original_price}
            savings={item.savings}
            key={item.id} />
        ))}
      </div>
        {/* pagination control */}
            <div className='flex items-center gap-12'>
                <Link
                    href={`?page=${page - 1}`}
                    className='cursor-pointer'
                >
                    Previous
                </Link>

                <span>
                 
                </span>

                <Link
                    href={`?page=${page + 1}`}
                    className='cursor-pointer'
                >
                    Next
                </Link>
            </div>
    </div>
  )
}

export default Product