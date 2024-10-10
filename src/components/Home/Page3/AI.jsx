import React, { useEffect, useState } from "react";
import Eth from "../../../assets/images/eth.png";
import nft from "../../../assets/images/nft.png";
import nft2 from "../../../assets/images/nft2.png";
import GUSTD from "../../../assets/images/usdt-gray.png";
import USTD from "../../../assets/images/usdt.png";
import Mayc from "../../../assets/images/mayc-6289.png";
import BTC from "../../../assets/images/btc-gray.png";
import SOL from "../../../assets/images/sol-gray.png";

const AI = () => {
  const arr = [nft, Mayc, nft2];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const imageIntervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % arr.length);
    }, 1000);

    return () => {
      clearInterval(imageIntervalId);
    };
  }, []);
  return (
    <div id="AI" class="flex justify-center w-full z-20 flex-col">
      <div class="w-full scale-[1] lg:scale-90 xl:scale-95  2xl:scale-100 3xl:scale-[1.05]">
        <div class="flex items-start justify-center">
          <div class="hidden lg:block relative shrink-0 w-[390px] -mr-[12px] p-3 py-4 border border-[#66C2C5]/[0.4] bg-[#212320]/[0.6] backdrop-blur-[1px] -rotate-[0deg]">
            <div class="font-bold text-[#66C2C5] text-[.9rem]">SWAP</div>
            <div class="relative flex items-center justify-between w-full h-[50px] mt-[20px] pl-2 py-1 bg-[#404140]">
              <div>
                <div class="font-bold font-bold text-[#66C2C5] text-[.9rem]">
                  0.00
                </div>
                <div class="text-[0.8rem] font-bold text-[#66C2C5] opacity-60">
                  Balance
                </div>
              </div>
              <div class="flex items-center w-[110px] h-full pl-3 border-l border-[#66C2C5]">
                <img src={Eth} alt="" class="w-auto lg:w-[1.8rem] mr-2" />
                <span class="font-bold text-[#66C2C5]">ETH</span>
              </div>
            </div>
            <div class="flex items-center justify-center relative w-[42px] h-auto aspect-square -my-3 mx-auto rounded-full bg-[#212320] z-20">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="w-[22px] h-auto aspect-square text-[#66C2C5]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                ></path>
              </svg>
            </div>
            <div class="relative font-bold text-[#66C2C5] flex items-center justify-between w-full h-[50px] pl-2 py-1 bg-[#404140]">
              <div>
                <div class="font-bold text-[.9rem]">0.00</div>
                <div class="text-[0.8rem] opacity-60">Balance</div>
              </div>
              <div class="flex items-center w-[110px] h-full pl-3 border-l border-[#66C2C5]">
                <img src={USTD} alt="" class="w-auto lg:w-[1.8rem] mr-2" />
                <span class="font-bold">USDT</span>
              </div>
            </div>
            <div class="w-[50%] h-[11px] mt-[28px] bg-[#3B6C6C]/[0.4]"></div>
            <div class="flex items-center text-[#66C2C5] justify-center w-full h-[40px] mt-[30px] mb-[6px] bg-[#3B6C6C] font-bold">
              CONNECT
            </div>
            <img
              src={GUSTD}
              alt=""
              class="hidden lg:block absolute top-[35%] -left-[25%] w-[35px] h-auto -rotate-[15deg] opacity-70"
            />
          </div>
          <div class="relative">
            <div class="flex w-auto mt-[8px] lg:mt-[40px] p-3 pl-0 border border-[#66C2C5]/[0.2] bg-black/[0.6] backdrop-blur-[4px] rotate-[15deg]">
              <div class="flex w-[40px] pt-4">
                <div class="flex tracking-wide text-[#66C2C5] justify-center w-full h-[30px] font-bold text-[0.9rem] -rotate-90">
                  #1235
                </div>
              </div>
              <div class="flex-grow ">
                <div className="w-[175px] h-[175px] relative  ">
                  {arr.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`NFT ${index + 1}`}
                      className={`w-[100%] h-[100%] object-fit absolute transition-opacity duration-1000 ${
                        index === currentImage ? "scale-1" : "scale-0"
                      }`}
                    />
                  ))}
                </div>
                <div class="w-full h-[11px] mt-[16px] bg-[#3B6C6C]"></div>
                <div class="w-[60%] h-[11px] mt-[12px] mb-[10px] bg-[#3B6C6C] opacity-50"></div>
              </div>
            </div>
            <img
              src={BTC}
              alt=""
              class="hidden lg:block absolute -right-[30%] bottom-[12%] w-[34px] h-auto opacity-70"
            />
            <img
              src={SOL}
              alt=""
              class="hidden lg:block absolute top-[10%] -right-[50%] w-[35px] h-auto -rotate-[15deg] opacity-70"
            />
          </div>
        </div>
      </div>
      <div className="relative mobile:ms-5 mobile:me-5 flex items-center justify-center lg:ms-40 mt-5 lg:me-40 text-center text-[#66C2C5]">
        Our expertise in Web3 technologies allows us to help clients navigate
        and capitalize on the emerging decentralized web.
      </div>
    </div>
  );
};

export default AI;
