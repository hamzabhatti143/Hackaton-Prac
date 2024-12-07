import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { CiLocationArrow1 } from "react-icons/ci";

function footer() {
  return (
    <>
      <div className="w-full bg-black text-[#FAFAFA] md:h-[400px]">
        <div className="flex flex-col md:flex-row flex-wrap">
          <div className="w-full md:w-1/5	flex flex-col justify-center h-80  p-10">
            <h2 className="font-bold leading-6 text-2xl mt-6 md:mt-0">Exclusive</h2>
            <h3 className="font-medium leading-7 text-xl mt-6">Subscribe</h3>
            <p className=" mt-6">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-transparent border p-2 rounded-md	 mt-6"
              />
              <Link href="">
                <CiLocationArrow1 className="w-7 h-7 mt-8" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/5	flex flex-col justify-center h-80  p-10">
            <h3 className="font-medium leading-7 text-xl">Support</h3>
            <p className="mt-6 text-base leading-6">
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p className="mt-6">exclusive@gmail.com</p>
            <p className="mt-4">+88015-88888-9999</p>
          </div>
          <div className="w-full md:w-1/5	flex flex-col text-center justify-center h-80  p-10">
            <h3 className="font-medium leading-7 text-xl mt-14">Account</h3>
            <p className="mt-6">My Account</p>
            <p className="mt-6">Login / Register</p>
            <p className="mt-6">Cart</p>
            <p className="mt-6">Wishlist</p>
            <p className="mt-6">Shop</p>
          </div>
          <div className="w-full md:w-1/5	flex flex-col text-center justify-center h-80  p-10">
            <h3 className="font-medium leading-7 text-xl mt-4">Quick Link</h3>
            <p className="mt-6">Privacy Policy</p>
            <p className="mt-6">Term of Use</p>
            <p className="mt-6">FAQ</p>
            <p className="mt-6">Contact</p>
          </div>
          <div className="w-full md:w-1/5	flex flex-col justify-center h-80  p-6">
            <h3 className="font-medium leading-7 text-xl">Download App</h3>
            <p className="mt-6 leading-[18px] text-xs">
              Save $3 with App New User Only
            </p>

            <div className="flex mt-6">
              <div>
                <Image
                  src={"/images/Qr Code.png"}
                  alt="search-bar"
                  width={80}
                  height={10}
                />
              </div>
              <div>
                <Image
                  src={"/images/GooglePlay.png"}
                  alt="search-bar"
                  width={100}
                  height={10}
                />

                <Image
                  src={"/images/AppStore.png"}
                  alt="search-bar"
                  width={100}
                  height={10}
                />
              </div>
            </div>

            <div className="flex justify-around items-center mt-4">
              <Link href="">
                <FaFacebookF />
              </Link>
              <Link href="">
                <LuTwitter />
              </Link>
              <Link href="">
                <FaInstagram />
              </Link>
              <Link href="">
                <LuLinkedin />
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default footer;
