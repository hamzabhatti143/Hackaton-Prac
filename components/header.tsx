import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

function header() {
  return (
    <>
      <nav className="w-full hidden md:flex bg-black justify-evenly h-8">
        <h1 className="text-sm text-[#FAFAFA] flex justify-center items-center text-center w-3/4 leading-6">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link
            href="/"
            className="font-semibold ml-6 text-sm leading-6 
        underline underline-offset-4"
          >
            Show Now
          </Link>
        </h1>

        <select name="lang" className="bg-transparent text-[#FAFAFA]" id="lang">
          <option value="English" className="text-slate-900">
            English
          </option>
          <option value="Urdu" className="text-slate-900">
            Urdu
          </option>
          <option value="Chinese" className="text-slate-900">
            Chinese
          </option>
        </select>
      </nav>

      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-between p-8 md:p-16">
          <h2 className="font-bold leading-6 text-2xl w-1/2">Exclusive</h2>
          <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-around">
            <Link href="">Home</Link>
            <Link href="">Contact</Link>
            <Link href="">About</Link>
            <Link href="">Shop</Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-around ">
          <div className="flex">
            <input
              type="search"
              name="search"
              placeholder="What are you looking for ?"
              id=""
              className="h-10 mt-14"
            />
            <IoIosSearch className="w-6 h-6 mt-16" />
          </div>
          <Link href="wishlist">
            <FaRegHeart className="w-5 h-5 md:mt-16" />
          </Link>

          <Link href="">
            <FiShoppingCart className="w-5 h-5 md:mt-16" />
          </Link>
        </div>
      </div>
      <Image
        src={"/images/Line 3.png"}
        alt="divider-line"
        width={100}
        height={100}
        className="w-full mt-6 md:mt-[-20px]"
      />
    </>
  );
}

export default header;
