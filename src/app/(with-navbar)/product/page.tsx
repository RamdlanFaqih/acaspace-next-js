// SERVER COMPONENTS

import React from 'react'
import CardProduct from '@/components/CardProduct'
import { ProductResponse } from '@/types/product'

const Product = async () => {
  const res = await fetch('http://localhost:2000/api/products')
  const data: ProductResponse = await res.json()
  const product = data.results

  console.log(res)
  console.log(product)
  return (
    <>
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
    </>
  )
}

export default Product