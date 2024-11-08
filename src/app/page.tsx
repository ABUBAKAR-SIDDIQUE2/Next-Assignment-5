"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { Fragment } from "react";
import { Libre_Bodoni, Rye } from "next/font/google";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

const rrye = Rye({
  subsets: ['latin'],
  weight: "400"
})

const libreBodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: "700"
})

const libreBodoni2 = Libre_Bodoni({
  subsets: ['latin'],
  weight: '500'
})

function Home(){

  // THIS FEW LINES OF CODE BELOW IS ADDED BECAUSE I MESSED-UP ON THE THE POSITIONS RATHER THAN FIXING IT I ADDED MORE MESSED-UP CODE TO ENCOUNTER THIS. 

  const [isLoading, setIsLoading] = useState(true)
  const handleContinue = () => {setIsLoading(false)}

  return[
    <Fragment>
      {isLoading ? (
        <div className='flex flex-col bg-black text-white h-screen w-screen'>
          <h1 className='text-center text-3xl mt-24 mx-24'>Hello Sir Hamza, May by you are wondering what is all this mess but i wanna tell <br /> you some bad news before continuing to the assignment <br /> <br /> 1) Turn your browser zoom to 90% <br /> <br/> I am saying this because when making this assignment i messed up some positions rather than fixing it i write more messed-up code to encounter this problem.</h1>
          <button onClick={handleContinue} className='flex items-center justify-center bg-red-700 w-32 h-14 rounded-lg mt-32 ml-[700px] hover:bg-blue-700'>CONTINUE</button>
        </div>
      ): (
        <Fragment>

    {/* THIS WHOLE PAGE IS MESSED UP IN THE NAME IF RESPONSIVENESS */}

      <header>
        <div className="flex w-screen h-[135px] bg-[#B76E79] text-[#FFFFFF] items-center">

        {/* BRAND NAME HERE WITH GOOGLE FONT NAME Rye */}

          <h1 className={`${rrye.className} text-[60px] ml-8`}>Aurum</h1>

          {/* HERE IS THE SEARCH BAR */}

          <div className="relative">
          <input
          type="text"
          placeholder="search for jewelry, diamonds, emeralds etc...."  
          className="w-[760px] h-[53px]  ml-[340px] pl-4 rounded-[13px] text-black"/>
          <CiSearch className="flex absolute ml-[1060px] size-8 bottom-3 text-black"/>
          </div>

          {/* HERE ARE THE ICONS LIKE SHOPPING, USER AND HEART */}

          <div className="flex">
          <CiHeart className="size-10 ml-20"/>
          <CiUser className="size-10 ml-9"/>
          <CiShoppingCart className="size-10 ml-9"/>
          </div>
        </div>
      </header>

      <main className="flex w-screen h-[960px] bg-white">

        {/* HERE IS THE SUB HEADING OF MAIN SECTION WITH GOOGLE FONT NAME Libre-Bodoni */}

        <h2 className={`${libreBodoni.className} flex text-[37.84px] ml-[107.49px] mt-[165.98px] `}>Uncompromising quality <br /> and <br /> exquisite refinement</h2>

        {/* THIS IS THE PARAGRAPH OF MAIN SECTION */}

        <p className={`${libreBodoni2.className} absolute text-[29.24px] ml-[107.49px] mt-[388px]`}>Experience the pinnacle of luxury with our collection <br /> of elegant  necklaces  and chains, meticulously <br /> crafted to perfection.</p>

        {/* THIS IS THE OUTLINE OF THE IMAGE */}

        <div className="absolute bg-transparent w-[380px] h-[525px] mt-[140px] ml-[1160px] border-[#FFFFFF] border-[0.86px] rounded-tl-[128px] rounded-br-[128px]"></div>

          {/* THIS IMAGE TAG WAS A HEADACHE BUT TODAY I GOT TO LEARN ABOUT NEW PROPERTIES OF BORDER */}

        <Image src={"/lady.jpeg"} alt="My Image" width={421} height={573} className=" w-[421px] h-[573px] mt-[117px] ml-[585px] object-cover rounded-tl-[128px] rounded-br-[128px]"/>
        <button className={`${libreBodoni2.className} absolute w-[247px] h-[49px] ml-[107px] mt-[575px] bg-[#A29875] text-white text-[25.8px] rounded-xl`}>Explore Now</button>
      </main>
    </Fragment>
        
      )}
    </Fragment>
  ]
}

export default Home;