import { Product } from '@/types/product'
import React from 'react'

const CardProduct = (product: Product) => {
    return (
        <div className="relative border border-solid border-[#e0e0e0] rounded-[8px] text-center bg-white min-w-[210px] transition ease-in-out duration-1000 hover:border-[#2874f0]">
            <div className="absolute top-0 right-0 bg-primary text-white px-1 py-2 text-[12px] font-bold rounded-tr-[8px] rounded-bl-[8px]">{product.discount}</div>
            <div className="max-w-full h-[160px] object-contain mb-[15px]">
                <img src={"/samsungs22.png"} alt="TEST" />
            </div>
            <div className="text-left">
                <h3 className="text-[14px] font-semibold mt-2 text-[#212121]">{product.name}</h3>
                <div className="product-price">
                    <span className="current-price">{product.current_price}</span>
                    <span className="original-price">{product.original_price}</span>
                </div>
                <div className="product-savings">{product.savings}</div>
            </div>
        </div>
    )
}

export default CardProduct