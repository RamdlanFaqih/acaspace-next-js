// CLIENT SIDE
"use client"

import React, { useEffect, useState } from 'react'
import CardProduct from '@/components/CardProduct'
import { ProductResponse, type Product } from '@/types/product'


const Product = () => {
    const [data, setData] = useState<Product[]>()
    const [page, setPage] = useState(1)
    const [pageSize] = useState(5)
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:2000/api/products?page=${page}&pageSize=${pageSize}`)
            const data: ProductResponse = await res.json()
            // set total pages
            setTotalPages(data.totalPages)

            // set data
            const product = data.results
            console.log(product)
            setData(product)
        } catch (error) {
            console.log(error)
        } finally {
            // setTimeout(() => {

            //     setLoading(false)
            // }, 2000)

            // kalau misal mau langsung
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])
    return (
        <div className='w-full flex flex-col items-center'>
            <h1>Hello From Client Side</h1>
            <div className='flex gap-[20px] overflow-x-auto pb-5'>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    data?.map((item) => (
                        <CardProduct
                            id={item.id}
                            current_price={item.current_price}
                            discount={item.discount}
                            image={item.image}
                            name={item.name}
                            original_price={item.original_price}
                            savings={item.savings}
                            key={item.id} />
                    ))
                )}

            </div>
            {/* pagination control */}
            <div className='flex items-center gap-12'>
                <button
                    className='cursor-pointer'
                    onClick={() => setPage((prev) => prev - 1)}
                    disabled={page === 1}
                >
                    Previous
                </button>

                <span>
                    Page {page} / Total {totalPages}
                </span>

                <button
                    className='cursor-pointer'
                    onClick={() => setPage((prev) => prev + 1)}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Product