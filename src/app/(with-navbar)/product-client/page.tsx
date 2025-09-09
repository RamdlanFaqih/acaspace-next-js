// CLIENT SIDE
"use client"

import React, { useEffect, useState } from 'react'
import CardProduct from '@/components/CardProduct'
import { ProductResponse, type Product } from '@/types/product'

const Product = () => {
    const [data, setData] = useState<Product[]>()
    const [page, setPage] = useState(2)

    const fetchData = async () => {
        try {
            const res = await fetch('http://localhost:2000/api/products')
            const data: ProductResponse = await res.json()
            const product = data.results
            console.log(product)
            setData(product)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <h1>Hello From Client Side</h1>
            <div className='flex gap-[20px] overflow-x-auto pb-5'>
                {data?.map((item) => (
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