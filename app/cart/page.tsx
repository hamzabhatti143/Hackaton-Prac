import React from 'react'
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
const page = () => {
  return (
    <>
    <Header />
      <div className='w-full flex items-center justify-between p-4 md:p-16'>
    <h2 className='flex items-center justify-between text-slate-300 tracking-wide'> Home / <span className=' text-black'> Cart</span></h2>
    </div>

    <div className='p-4 md:p-16'>
        <table className='w-full mt-0 md:mt-[-50px]'>
            <tr>
                <th className='shadow-lg'>Product</th>
                <th className='shadow-lg'>Price</th>
                <th className='shadow-lg'>Quantity</th>
                <th className='shadow-lg'>Subtotal</th>
            </tr>

            <tr>
                <td className='shadow-md flex flex-col md:flex-row items-center p-4'>
                    <Image src={"/images/lcd.png"}
                    alt='LCD'
                    width={70}
                    height={30}
                    className='mr-4'/> <span >LCD Monitor</span>
                </td>
                <td className='shadow-md text-center'>$650</td>
                <td className='shadow-md'>
                <input type="number" name="" value="1" id="" className='border-2 border-black w-14 md:w-20'/>
                </td>
                <td className='shadow-md text-center'>$650</td>
            </tr>

            <tr>
            <td className='shadow-md flex flex-col md:flex-row items-center p-4'>
                    <Image src={"/images/Frame 611.png"}
        alt="remote-control"
                    width={70}
                    height={30}
                    className='mr-4'/> <span >H1 Gamepad</span>
                </td>                
                <td className='shadow-md text-center'>$550</td>
                <td className='shadow-md'>
                <input type="number" name="" value="2" id="" className='border-2 border-black w-14 md:w-20'/>
                </td>
                <td className='shadow-md text-center'>$1100</td>
            </tr>
        </table>
    </div>

    <div className='w-full flex items-center justify-between p-4 pt-0 md:pt-0 md:p-16 gap-4'>
    <button className='w-[150px] md:w-[223px] h-14 border 
    border-black hover:bg-black hover:text-[#FAFAFA]'>
        <Link href="/">Return to Shop</Link>
    </button>

    <button className='w-[150px] md:w-[223px] h-14 border border-black hover:bg-black hover:text-[#FAFAFA]'>
        <Link href="/">Update Cart</Link>
    </button>
    </div>


    <div className='w-full flex flex-col md:flex-row justfy-between p-16 gap-6'>
      <div className='w-1/2 flex flex-col md:flex-row justify-between'>
       <input type="text" name="" id=""
        className='w-60 border border-black ml-[-20px] p-4 rounded-lg h-14' placeholder='Coupon Code'/>

<button className='w-[150px] bg-[#DB4444] mt-10 md:mt-0 text-white md:w-[223px] 
h-14 hover:bg-white hover:text-[#DB4444] hover:border hover:border-[#DB4444]'>
        <Link href="/">Apply Coupon</Link>
    </button>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center md:justify-end'>
      <div className='w-full md:w-3/5 p-4 border border-black'>
      <h2 className='font-medium text-xl leading-7'>Card Total</h2>
      <div className='flex justify-between mt-4 border-b-2 border-b-slate-400'>
        <p>Subtotal:</p>
        <p className='mb-4'>$1750</p>
      </div>

      <div className='flex justify-between mt-4 border-b-2 border-b-slate-400'>
        <p>Shipping:</p>
        <p className='mb-4'>Free</p>
      </div>

      <div className='flex justify-between mt-4 border-b-2 border-b-slate-400'>
        <p>Total:</p>
        <p className='mb-4'>$1750</p>
      </div>
      <button className='w-[150px] mt-6 md:w-[223px] h-14 text-white bg-[#DB4444] hover:border hover:border-[#DB4444]  hover:bg-white hover:text-[#DB4444]'>
        <Link href="/" className='font-medium text-base leading-6'>Procees to checkout</Link>
    </button>
      </div>
      </div>
    </div>






    <Footer />

    </>
  )
}

export default page
