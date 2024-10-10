import React from "react";
import Chart from "../../../assets/images/chart.png";
import Xbox from "../../../assets/images/x-box.png";

const Web3 = () => {
  return (
    <div id="web3" className="flex justify-center w-full z-20 flex-col">
      <div class="flex justify-center scale-[0.85] lg:scale-90 xl:scale-[0.94] 2xl:scale-[0.97] 3xl:scale-100">
        <div class="w-[290px] lg:mr-[24px] p-3 border border-[#66C2C5]/[0.4] bg-[#212320]/[0.6] backdrop-blur-[1px]">
          <div class="font-bold text-[#3B6C6C] opacity-60">TOTAL GAIN</div>
          <div class="flex text-[#66C2C5] font-bold text-[1.25rem]">
            $<div>5</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <span>.00</span>
          </div>
          <div class="flex items-end w-full h-[150px] mt-[12px] mb-[18px] border-b border-black bg-black">
            <img src={Chart} alt="" class="w-full h-[85%] object-cover" />
          </div>
          <div class="w-full h-[11px] bg-[#3B6C6C]"></div>
          <div class="w-[30%] h-[11px] mt-[12px] mb-[22px] bg-[#3B6C6C]/[0.5]"></div>
        </div>
        <div class="hidden lg:block">
          <div class="flex items-center justify-between">
            <div class="w-[56px] h-[30px] p-px rounded-full bg-[#66C2C5]/[0.8] backdrop-blur">
              <div class="w-[50%] h-full rounded-full bg-[#3B6C6C]"></div>
            </div>
            <div class="flex items-center">
              <img src={Xbox} alt="" class="w-[40px] h-auto ml-[24px]" />
              <img src={Xbox} alt="" class="w-[40px] h-auto ml-[12px]" />
            </div>
          </div>
          <div class="mt-[30px]">
            <div class="flex w-[330px] h-[110px] p-[12px] border border-[#66C2C5]/[0.5]">
              <div class="w-auto h-full aspect-square bg-[#3B6C6C]"></div>
              <div class="flex-grow ml-[12px]">
                <div class="w-full h-[11px] bg-[#3B6C6C]"></div>
                <div class="w-[35%] h-[11px] mt-[12px] bg-[#3B6C6C]"></div>
              </div>
            </div>
            <div class="flex w-[330px] h-[110px] -mt-[30px] ml-[50px] p-[12px] border border-[#66C2C5]/[0.3] bg-[#212320]/[0.6] backdrop-blur-[2px]">
              <div class="w-auto h-full aspect-square bg-[#3B6C6C]"></div>
              <div class="flex-grow ml-[12px]">
                <div class="w-full h-[11px] bg-[#3B6C6C]"></div>
                <div class="w-[35%] h-[11px] mt-[12px] bg-[#3B6C6C]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mobile:ms-5 mobile:me-5 flex items-center justify-center lg:ms-40 mt-5 lg:me-40 text-center text-[#66C2C5]">
        We create websites that are not only visually appealing but also highly
        functional, ensuring that users can navigate and interact with ease.
      </div>
    </div>
  );
};

export default Web3;
