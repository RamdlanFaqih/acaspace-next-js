import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="flex justify-between items-center px-3 py-6 bg-white gap-5">
            <div className="flex items-center gap-[15px]">
                <button className="bg-[#eef7ff] border-0 rounded-[8px] px-[10px] py-3 cursor-pointer text-xl text-[#2997ff]">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <a href="#" className="text-[28px] font-bold text-[#2997ff]">MegaMart</a>
            </div>
            <div className="grow max-w-[650px]">
                <div className="flex items-center bg-[#f5f8fa] rounded-lg px-2 py-[15px] border-1 border-solid border-transparent focus-within:border-[#2997ff]">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input type="text" className="border-none outline-none bg-transparent w-full text-[16px] placeholder:text-[#aaa]" placeholder="Search essentials, groceries and more..." />
                    <button className="filter-button">
                        <i className="fa-solid fa-list-ul"></i>
                    </button>
                </div>
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