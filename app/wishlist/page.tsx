import React from 'react'
import Link from "next/link"
import Header from "@/components/header"
import Image from "next/image"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";

import Footer from "@/components/footer"
const page = () => {
  return (
    <>
    <Header />
    
    <div className='w-full flex items-center justify-between p-4 md:p-16'>
    <h2 className=''>Wishlist (4)</h2>

    <button className='w-[150px] md:w-[223px] h-14 border border-black
    hover:bg-black hover:text-[#FAFAFA]'>
        <Link href="/">Move All To Blog</Link>
    </button>
    </div>

    <div className='w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center p-0 md:p-16'>
        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-between'>
        <Image
        src={"/images/Discount percent.png"}
        alt="Discount-percent"
        width={50}
        height={20}
        
      />
        <Link href=""> <RiDeleteBin6Line  className='w-20 h-6 mr-0 md:mr-[-20px]'/></Link>
        </div>
        <Image
        src={"/images/Frame 609.png"}
        alt="handbag"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">Gucci duffle bag</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$960</h3>
        </div>
        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-end'>
            <Link href="/">
        <RiDeleteBin6Line  className='w-10 h-6 mr-0 hover:-translate-y-6'/></Link>
        </div>
        <Image
        src={"/images/Frame 610.png"}
        alt="handbag"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">RGB liquid CPU Cooler</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$1960</h3>
        </div>

        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-end'>
        <Link href=""><RiDeleteBin6Line   className='w-10 h-6 mr-0'/></Link>
        </div>
        <Image
        src={"/images/Frame 608.png"}
        alt="handbag"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">GP11 Shooter USB Gamepad</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$550</h3>
        </div>

        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-end'>
        <Link href=""><RiDeleteBin6Line  className='w-10 h-6 mr-0'/></Link>
        </div>
        <Image
        src={"/images/Frame 607.png"}
        alt="handbag"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">Quilted Satin Jacket</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$750</h3>
        </div>
    </div>



     <div className='w-full flex items-center justify-between p-4 md:p-16'>
    <h2 className='flex items-center justify-between '><Image
        src={"/images/Category Rectangle.png"}
        alt="handbag"
        width={30}
        height={10}
        className='mr-4'
      />
     Just For You</h2>

    <button className='w-[150px] md:w-[223px] h-14 border border-black hover:bg-black hover:text-[#FAFAFA]'>
        <Link href="/">See All</Link>
    </button>
    </div>

    <div className='w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center p-0 md:p-16'>
        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-between'>
        <Image
        src={"/images/Discount percent.png"}
        alt="Discount-percent"
        width={50}
        height={20}
        
      />
       <Link href=""> <RiDeleteBin6Line  className='w-20 h-6 mr-0 md:mr-[-20px]'/></Link>
        </div>
        <Image
        src={"/images/laptop.png"}
        alt="laptop"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">ASUS FHD Gaming Laptop</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$960</h3>
        
        <div className='flex items-center'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />  (65)
        </div>
        </div>
        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-end'>
        <Link href=""><RiDeleteBin6Line  className='w-10 h-6 mr-0'/></Link>
        </div>
        <Image
        src={"/images/lcd.png"}
        alt="LCD"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">IPS LCD Gaming Monitor</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$1160</h3>
        <div className='flex items-center'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />  (65)
        </div>
        </div>

        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-between'>
        <Image
        src={"/images/New Button.png"}
        alt="New Button"
        width={50}
        height={20}
        
      />
        <Link href=""><RiDeleteBin6Line  className='w-20 h-6 mr-0 md:mr-[-20px]'/></Link>
        </div>
        <Image
        src={"/images/Frame 611.png"}
        alt="remote-control"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">HAVIT HV-G92 Gamepad</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$550</h3>
        <div className='flex items-center'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />  (65)
        </div>
        </div>

        <div className='w-11/12 md:w-1/4 mt-10 md:mt-0 '>
        <div className='bg-[#F5F5F5]'>
        <div className='flex justify-end'>
        <Link href=""><RiDeleteBin6Line  className='w-10 h-6 mr-0'/></Link>
        </div>
        <Image
        src={"/images/Frame 612.png"}
        alt="keyboard"
        width={120}
        height={80}
        className="w-64 h-60 m-auto"
      />
      </div>
      <div className='bg-black text-[#FAFAFA] flex justify-center items-center'>
      <FiShoppingCart className="w-5 h-5 mr-4" />
      <Link href="">Add to Cart</Link>
      </div>
        <h3 className="font-medium leading-7 text-base">AK-900 Wired Keyboard</h3>
        <h3 className="font-medium leading-7 text-base text-[#DB4444]">$200</h3>
        <div className='flex items-center'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />  (65)
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page
