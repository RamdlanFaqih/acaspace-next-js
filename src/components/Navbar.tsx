'use client'

import { Product, ProductResponse } from '@/types/product'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [data, setData] = useState<Product[]>([])
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")


    useEffect(() => {
        // sweet spot
        const handleDebounce = setTimeout(() => {
            setDebouncedSearch(search)
        }, 1000)

        return () => clearTimeout(handleDebounce)
    })
    useEffect(() => {
        const fetchData = async () => {
            if (debouncedSearch.length < 2) {
                setData([])
                return
            }
            const res = await fetch(`http://localhost:2000/api/products?search=${debouncedSearch}`)

            const data: ProductResponse = await res.json()

            const result = data.results



            setData(result)
        }

        fetchData()
    }, [debouncedSearch])

    console.log("navbar data", data)
    return (
        <header className="flex justify-between items-center px-3 py-6 bg-white gap-5">
            <div className="flex items-center gap-[15px]">
                <button className="bg-[#eef7ff] border-0 rounded-[8px] px-[10px] py-3 cursor-pointer text-xl text-[#2997ff]">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="#" className="text-[28px] font-bold text-[#2997ff]">MegaMart</a>
            </div>
            <div className="grow max-w-[650px] relative">
                <div className="flex items-center bg-[#f5f8fa] rounded-lg px-2 py-[15px] border-1 border-solid border-transparent focus-within:border-[#2997ff]">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input
                        type="text"
                        className="border-none outline-none bg-transparent w-full text-[16px] placeholder:text-[#aaa]"
                        placeholder="Search essentials, groceries and more..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="filter-button">
                        <i className="fa-solid fa-list-ul"></i>
                    </button>
                </div>

                {/* Dropdown Result */}
                {data.length > 0 && (
                    <div className='absolute top-full bg-white left-0 w-full mt-2 border rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto'>
                        {data.map((item) => (
                            <Link
                                key={item.id}
                                href={'#'}
                                className='flex items-center gap-3 p-3 hover:bg-gray-100 transition'
                            >
                                <img
                                    src={'/samsungs22.png'}
                                    alt={item.name}
                                />
                                <div className='flex flex-col'>
                                    <p>{item.name}</p>
                                    <p>{item.current_price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex items-center gap-[30px]">
                <Link href="/login" className="flex items-center gap-2 text-[#333] text-[16px] font-medium">
                    <i className="fa-regular fa-user"></i>
                    <span>Sign Up/Sign In</span>
                </Link>
            </div>
        </header>
    )
}

export default Navbar