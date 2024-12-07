import Header from "@/components/header";
import Footer from "@/components/footer";
import Timer from "@/components/timer";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineStarPurple500 } from "react-icons/md";
export default function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center text-[#DB4444] p-4 md:p-16">
        <Image
          src={"/images/Category Rectangle.png"}
          alt="Rectangle"
          width={30}
          height={10}
          className="mr-4"
        />
        <h2>This Month</h2>
      </div>

      <div className="w-full flex items-center justify-between p-4 mt-0 md:mt-[-110px] md:p-16">
        <h2 className="text-lg md:text-4xl font-semibold leading-6 md:leading-[48px]">
          Best Selling Products
        </h2>

        <button className="w-[150px] md:w-[223px] h-14 text-white bg-[#DB4444] hover:border hover:border-[#DB4444]  hover:bg-white hover:text-[#DB4444]">
          <Link href="/">View All</Link>
        </button>
      </div>

      <div
        className="w-full flex flex-col md:flex-row justify-center gap-4	
    md:justify-around items-center p-0 md:p-16"
      >
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <div className="flex justify-between">
              <Image
                src={"/images/Discount percent.png"}
                alt="Discount-percent"
                width={50}
                height={20}
              />
              <Link href="">
                {" "}
                <RiDeleteBin6Line className="w-20 h-6 mr-0 md:mr-[-20px]" />
              </Link>
            </div>
            <Image
              src={"/images/laptop.png"}
              alt="laptop"
              width={120}
              height={80}
              className="w-64 h-60 m-auto"
            />
          </div>
          <div className="bg-black text-[#FAFAFA] flex justify-center items-center">
            <FiShoppingCart className="w-5 h-5 mr-4" />
            <Link href="">Add to Cart</Link>
          </div>
          <h3 className="font-medium leading-7 text-base">
            ASUS FHD Gaming Laptop
          </h3>
          <h3 className="font-medium leading-7 text-base text-[#DB4444]">
            $960
          </h3>

          <div className="flex items-center">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 /> (65)
          </div>
        </div>
        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <div className="flex justify-end">
              <Link href="">
                <RiDeleteBin6Line className="w-10 h-6 mr-0" />
              </Link>
            </div>
            <Image
              src={"/images/lcd.png"}
              alt="LCD"
              width={120}
              height={80}
              className="w-64 h-60 m-auto"
            />
          </div>
          <div className="bg-black text-[#FAFAFA] flex justify-center items-center">
            <FiShoppingCart className="w-5 h-5 mr-4" />
            <Link href="">Add to Cart</Link>
          </div>
          <h3 className="font-medium leading-7 text-base">
            IPS LCD Gaming Monitor
          </h3>
          <h3 className="font-medium leading-7 text-base text-[#DB4444]">
            $1160
          </h3>
          <div className="flex items-center">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 /> (65)
          </div>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <div className="flex justify-between">
              <Image
                src={"/images/New Button.png"}
                alt="New Button"
                width={50}
                height={20}
              />
              <Link href="">
                <RiDeleteBin6Line className="w-20 h-6 mr-0 md:mr-[-20px]" />
              </Link>
            </div>
            <Image
              src={"/images/Frame 611.png"}
              alt="remote-control"
              width={120}
              height={80}
              className="w-64 h-60 m-auto"
            />
          </div>
          <div className="bg-black text-[#FAFAFA] flex justify-center items-center">
            <FiShoppingCart className="w-5 h-5 mr-4" />
            <Link href="">Add to Cart</Link>
          </div>
          <h3 className="font-medium leading-7 text-base">
            HAVIT HV-G92 Gamepad
          </h3>
          <h3 className="font-medium leading-7 text-base text-[#DB4444]">
            $550
          </h3>
          <div className="flex items-center">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 /> (65)
          </div>
        </div>

        <div className="w-11/12 md:w-1/4 mt-10 md:mt-0 ">
          <div className="bg-[#F5F5F5]">
            <div className="flex justify-end">
              <Link href="">
                <RiDeleteBin6Line className="w-10 h-6 mr-0" />
              </Link>
            </div>
            <Image
              src={"/images/Frame 612.png"}
              alt="keyboard"
              width={120}
              height={80}
              className="w-64 h-60 m-auto"
            />
          </div>
          <div className="bg-black text-[#FAFAFA] flex justify-center items-center">
            <FiShoppingCart className="w-5 h-5 mr-4" />
            <Link href="">Add to Cart</Link>
          </div>
          <h3 className="font-medium leading-7 text-base">
            AK-900 Wired Keyboard
          </h3>
          <h3 className="font-medium leading-7 text-base text-[#DB4444]">
            $200
          </h3>
          <div className="flex items-center">
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 />
            <MdOutlineStarPurple500 /> (65)
          </div>
        </div>
      </div>

      <div className="w-full p-4 md:p-16">
        <div className="bg-black h-full flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 p-4 md:p-14">
            <h3 className="text-base font-semibold leading-5 text-[#00FF66]">
              Categories
            </h3>
            <h2 className="text-5xl font-semibold leading-[60px] text-white">
              Enhance Your Music Experience
            </h2>
            <Timer targetDate="2024-12-31T23:59:59" />

            <button className='w-[150px] md:w-[223px] h-14 text-white 
            bg-[#00FF66] hover:border hover:border-[#00FF66]  hover:bg-white 
            hover:text-[#00FF66]'>
        <Link href="/" className='font-medium text-base leading-6'>Buy Now!</Link>
    </button>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={"/images/headphone.svg"}
              alt="New Product"
              width={100}
              height={100}
              className="w-full p-16"
            />
            
          </div>
        </div>
      </div>

      <div className="flex items-center text-[#DB4444] p-4 md:p-16">
        <Image
          src={"/images/Category Rectangle.png"}
          alt="Rectangle"
          width={30}
          height={10}
          className="mr-4"
        />
        <h2>Our Products</h2>
      </div>

      <div className="w-full flex items-center justify-between p-4 mt-0 md:mt-[-110px] md:p-16">
        <h2 className="text-lg md:text-4xl font-semibold leading-6 md:leading-[48px]">
          Explore Our Products
        </h2>

        <button className="w-[150px] md:w-[223px] h-14 text-white bg-[#DB4444] hover:border hover:border-[#DB4444]  hover:bg-white hover:text-[#DB4444]">
          <Link href="/">View All</Link>
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
<div className="w-full flex justify-center items-center">
    <button className="w-[150px] md:w-[223px] h-14 text-white bg-[#DB4444] hover:border hover:border-[#DB4444]  hover:bg-white hover:text-[#DB4444]">
          <Link href="/">View All</Link>
        </button>
        </div>

        <div className="flex items-center text-[#DB4444] p-4 md:p-16">
        <Image
          src={"/images/Category Rectangle.png"}
          alt="Rectangle"
          width={30}
          height={10}
          className="mr-4"
        />
        <h2>Featured</h2>
      </div>

      <div className="w-full flex items-center justify-between p-4 mt-0 md:mt-[-110px] md:p-16">
        <h2 className="text-lg md:text-4xl font-semibold leading-6 md:leading-[48px]">
          New Arrival
        </h2>
      </div>

     
      <Footer />
    </>
  );
}
