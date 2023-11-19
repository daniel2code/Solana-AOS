import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import logo from "./assets/logo.png";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import video from "./assets/vid.mp4";

const Landing = () => {
  return (
    <div className="w-full">
      <nav className="bg-gray-200 w-full border-b-2 border-black">
        <div className="container mx-auto  max-w-[1200px] w-full flex items-center justify-between py-4 px-[5%]">
          {/* Logo */}
          <div>
            <img src={img2} alt="Logo" className="h-10 rounded-full" />
            {/* <h2 className="text-[45px]">AOS</h2> */}
          </div>

          {/* Hamburger Menu for small screens */}
          <div className="lg:hidden">
            <button className="text-2xl text-gray-800 focus:outline-none">
              &#8801;
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex space-x-4 ">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a
              href="https://jup.ag/swap/SOL-6F8tWzpfhWBJSciFqyDqZ4YmHNuVSYwyHwZp8i5kMaZV"
              className="nav-link"
            >
              How to Buy
            </a>
            <a href="#" className="nav-link">
              Birdeye
            </a>
            <a href="#" className="nav-link">
              Dexscreener
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex space-x-4">
            <div
              className="border-2 border-black p-2 rounded"
              onClick={() => window.open("https://twitter.com/TickerAOS")}
            >
              <FaTwitter className="text-black text-xl" />
            </div>
            <div className="border-2 border-black p-2 rounded">
              <FaTelegram className="text-black text-xl" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white min-h-screen py-[40px] md:py-0 flex items-center justify-center">
        <div className="container flex-col md:flex-row mx-auto max-w-[1200px] gap-x-[5%] w-full px-[5%] flex items-center">
          {/* Left Side */}
          <div className="flex flex-col pr-8">
            <h1 className="text-[40px] md:text-[70px] font-bold mb-4">
              Apes On Solana ($AOS)
            </h1>
            <p className="text-[25px] md:text-[40px] mb-4 max-w-[600px] ">
              Apes have arrived on Solana $AOS 🦍
            </p>
            <button className="border-2 w-[163px] rounded-[15px] mt-[20px] text-[20px] text-[#000] bg-[#fff] border-black px-4 py-2">
              BUY NOW
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-shrink-0 mt-[30px] md:mt-0 ">
            {/* <img
              src={img2}
              alt="Hero Image"
              className="w-full md:w-[400px] h-auto md:h-[400px] rounded-full border-[10px] border-[#000] "
            /> */}
            <div className="w-full md:w-[450px] h-auto md:h-[450px] border-[10px] border-[#000]  overflow-hidden rounded-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" autoPlay />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}

      <div className="w-full py-[100px] bg-green-500 flex justify-center flex-col items-center ">
        <button className="border-2 h-[30px] rounded-[15px] mt-[20px] text-[15px] text-[#000] bg-[#9945ff] border-black px-4">
          About Us
        </button>

        <h2 className="text-[30px] md:text-[50px] text-[#000] text-center max-w-[600px] w-full md:leading-[55px] my-[30px] px-[5%] ">
          Welcome to APES ON SOLANA ($AOS) , <br />
          Apes have arrived on Solana $AOS 🦍.
        </h2>

        <div className="container mx-auto max-w-[1200px] mt-[20px] w-full px-[5%] flex-wrap justify-between gap-y-[30px] flex items-center">
          <div className="w-full md:w-[48%] border-[2px] border-[#000] rounded-[5px] px-[30px] py-[20px] flex items-center gap-x-[20px] bg-[#fff] ">
            <div className="w-[74px] h-[74px] flex justify-center items-center rounded-full border-[2px] border-[#000]">
              <img
                alt="icon"
                src=""
"
              />
            </div>

            <div>
              <p className="text-[24px] font-[700] text-[#000] ">Token Tax</p>
              <p className="text-[16px] font-[400] mt-[1px] text-[#000] ">
                0% Buy and Sell Tax
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] border-[2px] border-[#000] rounded-[5px] px-[30px] py-[20px] flex items-center gap-x-[20px] bg-[#fff] ">
            <div className="w-[74px] h-[74px] flex justify-center items-center rounded-full border-[2px] border-[#000]">
              <img
                alt="icon"
                src="https://ribbitonsolana.com/images/6447df45c13f480d25b05f1d_icon-1.svg
"
              />
            </div>

            <div>
              <p className="text-[24px] font-[700] text-[#000] ">Burnt LP</p>
              <p className="text-[16px] font-[400] mt-[1px] text-[#000] ">
                100% Burnt Liquidity Pool
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] border-[2px] border-[#000] rounded-[5px] px-[30px] py-[20px] flex items-center gap-x-[20px] bg-[#fff] ">
            <div className="w-[74px] h-[74px] flex justify-center items-center rounded-full border-[2px] border-[#000]">
              <img
                alt="icon"
                src="https://ribbitonsolana.com/images/6447df45c13f480d25b05f1d_icon-1.svg
"
              />
            </div>

            <div>
              <p className="text-[24px] font-[700] text-[#000] ">
                Total Supply
              </p>
              <p className="text-[16px] font-[400] mt-[1px] text-[#000] ">
                420,000,000,000
              </p>
            </div>
          </div>

          <div className="w-full md:w-[48%] border-[2px] border-[#000] rounded-[5px] px-[30px] py-[20px] flex items-center gap-x-[20px] bg-[#fff] ">
            <div className="w-[74px] h-[74px] flex justify-center items-center rounded-full border-[2px] border-[#000]">
              <img
                alt="icon"
                src="https://ribbitonsolana.com/images/6447df45c13f480d25b05f1d_icon-1.svg
"
              />
            </div>

            <div>
              <p className="text-[24px] font-[700] text-[#000] ">
                Contract Address
              </p>
              <p
                className="text-[14px] sm:text-[16px] font-[400] mt-[1px] text-[#000] "
                style={{ overflowWrap: "normal" }}
              >
                6F8tWzpfhWBJSciFqyDqZ4YmHNuVSYwyHwZp8i5kMaZV
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="w-full bg-[#9945ff] ">
        <div className="container mx-auto max-w-[1200px] py-[80px] px-[5%]">
          <div className=" flex-col md:flex-row flex gap-x-[5%] items-center">
            {/* Image on the Left */}
            <div className="flex-shrink-0">
              <img
                src={img1}
                alt="Roadmap Image"
                className="w-[280px] md:w-[580px] h-[280px] md:h-[580px] rounded-full border-[2px] border-[#000] "
              />
            </div>

            {/* Roadmap on the Right */}
            <div className="ml-8 border-l-2 border-black pl-8 mt-[40px] md:mt-0 ">
              <button className="border-2 h-[30px] rounded-[15px] mb-[20px] ml-4 text-[15px] text-[#000] bg-[#9945ff] border-black px-4">
                How to buy
              </button>

              {/* Roadmap Item 1 */}
              <div className="relative">
                {/* <div className="border-r-2 border-black h-full absolute left-1/2 transform -translate-x-1/2"></div> */}
                <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center absolute left-[-32px] transform -translate-x-1/2">
                  1
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">USE JUPITER DEX :</h3>
                  <p className="text-[15px] font-[300] mt-[10px] ">
                    1. Open https://jup.ag/swap/SOL-AOS
                  </p>

                  <p className="text-[15px] font-[300] mt-[10px] ">
                    2. Connect your Solana Wallet
                  </p>

                  <p className="text-[15px] font-[300] mt-[10px] ">
                    3. Click the swap button!
                  </p>
                </div>
              </div>

              {/* Roadmap Item 2 */}
              <div className="relative mt-8">
                {/* <div className="border-r-2 border-black h-full absolute left-1/2 transform -translate-x-1/2"></div> */}
                <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center absolute left-[-32px] transform -translate-x-1/2">
                  2
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold">USE RAYDIUM :</h3>
                  <p className="text-[15px] font-[300] mt-[10px] ">
                    1. Open: https://raydium.io/swap/
                  </p>

                  <p className="text-[15px] font-[300] mt-[10px] ">
                    2. Connect wallet (Phantom / Solflare / Backpack)
                  </p>

                  <p className="text-[15px] font-[300] mt-[10px] ">
                    3. Click the swap button!
                  </p>
                </div>
              </div>

              {/* Add more roadmap items as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-gray-200 border-t-2 border-black">
        <div className="container mx-auto flex-col md:flex-row max-w-1200 flex items-center justify-between p-4">
          {/* Left Side */}
          <div className="flex items-center  ">
            <div>
              {/* <img src={logo} alt="Logo" className="h-8" /> */}
              <img src={img2} alt="Logo" className="h-8 rounded-full" />
              {/* <h2 className="text-[35px]">AOS</h2> */}
            </div>
            <div className="flex space-x-4 ml-4">
              <div className="border-2 border-black p-2 rounded">
                <FaTwitter
                  className="text-black text-xl"
                  onClick={() => window.open("https://twitter.com/TickerAOS")}
                />
              </div>
              <div className="border-2 border-black p-2 rounded">
                <FaTelegram className="text-black text-xl" />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex space-x-4 mt-[20px] md:mt-0 ">
        
            <a href="https://birdeye.so/token/6F8tWzpfhWBJSciFqyDqZ4YmHNuVSYwyHwZp8i5kMaZV?chain=solana" className="footer-link text-[14px] sm:text-[16px] ">
              Birdeye
            </a>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
