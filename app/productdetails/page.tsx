import React from 'react'
import Image from "next/image"
import Header from "@/components/header"
import Counter from "@/components/counter"
import Footer from "@/components/footer"
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";
const page = () => {
  return (
    <>
      <Header />

      <div className='w-full flex items-center justify-between p-4 md:p-16'>
    <h2 className='flex items-center justify-between text-slate-300 tracking-wide'> Account / Gaming / <span className=' text-black'> Havic HV G-92 Gamepad</span></h2>

    </div>
      <div className='w-full p-4 md:p-10 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 flex flex-row md:flex-col 
            justify-cener items-center gap-y-10	'>
            <Image src={"/images/sidecard1.png"} 
            alt='Product' 
            width={100} 
            height={200} 
            className='w-[100px] h-[50px] md:h-16'/>

            <Image src={"/images/sidecard2.png"} 
            alt='Product' 
            width={100} height={200} 
            className='w-[100px] h-[50px] md:h-16 '/>

            <Image src={"/images/sidecard3.png"} 
            alt='Product' 
            width={100} 
            height={200} 
            className='w-[100px] h-[50px] md:h-16 '/>

            <Image src={"/images/sidecard4.png"} 
            alt='Product' 
            width={100} 
            height={200} 
            className='w-[100px] h-[50px] md:h-16 '/>
            </div>

            <div className='w-full md:w-1/2  mt-4 md:mt-0' >
            <Image 
            src={"/images/product.png"}
            alt='Product'
            width={600}
            height={500}
            className='md:w-[650px] h-[400px] ml-0 md:ml-[-80px]'
            />
            </div>
        </div>
        <div className='w-1/2 p-4'>
        <div className='border-b-2'>
        <h3 className="font-semibold leading-6 text-2xl">Havic HV G-92 Gamepad</h3>
        <div className='flex justify-around items-center w-1/2'>
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarPurple500 />
        <MdOutlineStarBorderPurple500 />
        (150 Reviews)  |  <p className='text-[#00FF66]'>In Stock</p>

        </div>
        <h2 className='leading-6 text-2xl'>$192.00</h2>
        <p className='w-3/4 text-justify mt-4'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy 
            bubble free install & mess free removal Pressure sensitive.</p>
            </div>

            <div>
                <div className='flex justify-around items-center w-1/2 mt-4'>
                    <h2>Colors:  </h2>
                    <div className='w-1/2 flex'>
                    <p className='w-7 h-7 rounded-full border-2 bg-blue-300'></p>
                    <p className='w-7 h-7 rounded-full border-2 bg-red-500'></p>
                    </div>
                </div>

                <div className='flex justify-around items-center w-1/2 mt-4 mb-10'>
                    <h2>Size: </h2>
                    <p className='w-7 h-7 rounded-md border-2 text-center'>XS</p>
                    <p className='w-7 h-7 rounded-md border-2 text-center'>S</p>
                    <p className='w-7 h-7 rounded-md border-2 text-center'>M</p>
                    <p className='w-7 h-7 rounded-md border-2 text-center'>L</p>
                    <p className='w-7 h-7 rounded-md border-2 text-center'>XL</p>
                </div>
            </div>
            <Counter />
            <div className="w-full md:w-3/4 mt-10 h-20 flex items-center border-2 border-black">
          <TbTruckDelivery className='text-5xl m-auto'/>

          <div className="flex items-center w-3/4 flex-col">
            <h5 className="text-base font-medium leading-6">
            Free Delivery
            </h5>
            <p className="text-xs font-medium underline underline-offset-4 leading-[18px]">Enter your postal code for Delivery Availability</p>
          </div>
        </div>
        <div className="w-full md:w-3/4 h-20 flex items-center border-2 border-black">
          <Image src={"/images/Icon-return.png"} alt='retrun-icon' width={20} height={40} className='m-auto w-10'/>

          <div className="flex items-center w-3/4 flex-col">
            <h5 className="text-base font-medium leading-6">
            Return Delivery
            </h5>
            <p className="text-xs font-medium  
            leading-[18px]">Free 30 Days Delivery Returns. <span className='underline underline-offset-2'>Details</span></p>
          </div>
        </div>

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
     <span className='text-base	font-semibold leading-5	text-[#DB4444]'> Related Items</span></h2>

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
