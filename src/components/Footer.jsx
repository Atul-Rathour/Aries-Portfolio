import React from "react";
import Robo from "../assets/images/66278b9a852c6f78b4c02ec7_footer-bg-image-front_big-p-1080.png";
import BG from "../assets/images/66278b003d703ccbcebcf4ae_footer-bg-image-p-2000.jpg";
import Background from "../assets/images/background.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "top top",
        scrub: 0.5,
        markers: true,
      },
    });

    tl.from(".elem1", {
      height: "0%",
      duration: 2,
    });
  });

  return (
    <>
      <div className="lg:grid lg:grid-col-6 lg:gap-10 relative w-[100%] h-[100vh] mt-[40vh] overflow-hidden elem-1 mobile:mt-[20vh] ">
        <div className="w-[40%] absolute bottom-0 left-0 h-[3.5rem] mobile:h-[4.5rem] z-[2] flex justify-center items-center ">
          <img
            src={Background}
            alt=""
            className="object-cover w-[100%] h-[100%] absolute"
          />
          <div
            className="absolute top-0 w-[100%] h-[1px] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-[1px] h-[100%] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>

          <p className="text-[#66C2C5] text-[1.5rem] relative">
            {" "}
            Check out more pages{" "}
          </p>
        </div>

        <div className="w-[40%] absolute bottom-0 right-0 h-[3.5rem] mobile:h-[4.5rem] z-[2] flex justify-center items-center  ">
          <img
            src={Background}
            alt=""
            className="object-cover w-[100%] h-[100%] absolute"
          />
          <div
            className="absolute top-0 w-[100%] h-[1px] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 w-[1px] h-[100%] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>

          <p className="p1 text-[1.3rem] tracking-wide ">
            Design by Atul Rathour
          </p>
        </div>

        <div
          className="absolute bottom-0 w-[100%] h-[1px] bg-[#fff] z-[1]"
          style={{
            boxShadow:
              " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
          }}
        ></div>
        <div
          className="absolute top-0 w-[100%] h-[1px] bg-[#fff] z-[1]"
          style={{
            boxShadow:
              " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
          }}
        ></div>

        <div className="absolute top-0 -left-[-50%] -translate-x-[50%] -translate-y-[50%] w-[20%] h-[7rem] z-[2] ">
          <img
            src={Background}
            alt=""
            className="object-cover w-[100%] h-[100%]"
          />
          <div
            className="absolute bottom-0 w-[100%] h-[1px] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>
          <div
            className="absolute left-0 top-0 w-[1px] h-[100%] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>
          <div
            className="absolute right-0 top-0 w-[1px] h-[100%] bg-[#fff]"
            style={{
              boxShadow:
                " 0 0 0px #fff, 0 0 4px #fff, 0 0 29px #fff, 0 0 12px #228dff, 0 0 9px #228dff, 0 0 30px #228dff",
            }}
          ></div>
        </div>

        <img
          src={BG}
          alt=""
          className="absolute w-[100%] h-[100%] object-cover"
        />

        <div className="mt-[10rem] ms-[2rem] relative  mobile:mt-[8rem]">
          <p className="p1 text-[3rem] mobile:text-[1.5rem] relative z-[2] ">
            Wow, You've made this far!
          </p>
          <p className="p1 text-[3rem] mobile:text-[1.5rem] relative left-[4rem] z-[1]">
            Glad you're loving this journey
          </p>
        </div>

        <div className="relative flex flex-col ms-[5rem] z-[1] -top-[3rem] w-[40%] flex-wrap mobile:w-[100%] mobile:top-0 mobile:mt-[4rem] ">
          <p className="p1 text-[1.5rem] tracking-wide">Connect with me!</p>
          <div className="flex flex-wrap gap-[2rem] mt-[2rem] relative ">
            <div className="w-[12rem] h-[12rem] mobile:w-[8rem] mobile:h-[8rem] relative flex justify-center items-center border border-[#4B6E79] border-px rounded-[50px]">
              <div className="w-[10%] absolute h-[1px] top-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 left-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] top-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 left-0 bg-[#66C2C5]"></div>

              <a
                href="https://github.com/Atul-Rathour?tab=overview&from=2024-10-01&to=2024-10-14"
                className="w-[80%] h-[80%] flex justify-center items-center bg-transparent backdrop-blur relative rounded-[30px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="45%"
                  // height="100%"
                  viewBox="0 0 73 73"
                  version="1.1"
                >
                  <g
                    id="team-collaboration/version-control/github"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="container"
                      transform="translate(2.000000, 2.000000)"
                      fill-rule="nonzero"
                    >
                      <rect
                        id="mask"
                        stroke="none"
                        stroke-width="2"
                        fill="transparent"
                        x="-1"
                        y="-1"
                        width="71"
                        height="71"
                        rx="14"
                      ></rect>
                      <path
                        d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                        id="Shape"
                        fill="#4B6E79"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className="w-[12rem] h-[12rem] mobile:w-[8rem] mobile:h-[8rem] relative flex justify-center items-center border border-[#4B6E79] border-px rounded-[50px]">
              <div className="w-[10%] absolute h-[1px] top-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 left-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] top-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 left-0 bg-[#66C2C5]"></div>

              <a
                href="/Contact"
                className="w-[80%] h-[80%] flex justify-center items-center bg-transparent backdrop-blur relative rounded-[30px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 41 40"
                  fill="none"
                  class="footer-social-icon-svg"
                  className="w-[30%] h-[30%]"
                >
                  <path
                    d="M34.0518 6.66602H7.38509C5.55176 6.66602 4.05176 8.16602 4.05176 9.99935V29.9994C4.05176 31.8327 5.55176 33.3327 7.38509 33.3327H34.0518C35.8851 33.3327 37.3851 31.8327 37.3851 29.9994V9.99935C37.3851 8.16602 35.8851 6.66602 34.0518 6.66602ZM33.3851 13.7493L22.4851 20.566C21.4018 21.2493 20.0351 21.2493 18.9518 20.566L8.05176 13.7493C7.88464 13.6555 7.73829 13.5288 7.62157 13.3768C7.50485 13.2248 7.42019 13.0506 7.37272 12.865C7.32524 12.6793 7.31593 12.4859 7.34535 12.2965C7.37477 12.1071 7.44232 11.9257 7.54389 11.7632C7.64547 11.6007 7.77896 11.4604 7.9363 11.351C8.09364 11.2416 8.27154 11.1652 8.45925 11.1265C8.64696 11.0878 8.84056 11.0876 9.02835 11.1259C9.21614 11.1642 9.3942 11.2402 9.55176 11.3493L20.7184 18.3327L31.8851 11.3493C32.0427 11.2402 32.2207 11.1642 32.4085 11.1259C32.5963 11.0876 32.7899 11.0878 32.9776 11.1265C33.1653 11.1652 33.3432 11.2416 33.5005 11.351C33.6579 11.4604 33.7914 11.6007 33.893 11.7632C33.9945 11.9257 34.0621 12.1071 34.0915 12.2965C34.1209 12.4859 34.1116 12.6793 34.0641 12.865C34.0167 13.0506 33.932 13.2248 33.8153 13.3768C33.6986 13.5288 33.5522 13.6555 33.3851 13.7493Z"
                    fill="#4B6E79"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="w-[12rem] h-[12rem] mobile:w-[8rem] mobile:h-[8rem] relative flex justify-center items-center border border-[#4B6E79] border-px rounded-[50px]">
              <div className="w-[10%] absolute h-[1px] top-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 left-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] top-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 left-0 bg-[#66C2C5]"></div>

              <a
                href="https://www.linkedin.com/in/atul-rathour-8b359723b/"
                className="w-[80%] h-[80%] flex justify-center items-center bg-transparent backdrop-blur relative rounded-[30px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#4B6E79"
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="-143 145 512 512"
                  xml:space="preserve"
                  className="w-[30%] h-[30%]"
                >
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z   M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7  c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4  c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6  c35.5,0,63.3,23,63.3,72.4V508.1z" />
                </svg>
              </a>
            </div>
            <div className="w-[12rem] h-[12rem] mobile:w-[8rem] mobile:h-[8rem] relative flex justify-center items-center border border-[#4B6E79] border-px rounded-[50px]">
              <div className="w-[10%] absolute h-[1px] top-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 left-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] top-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] top-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 right-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 right-0 bg-[#66C2C5]"></div>

              <div className="w-[10%] absolute h-[1px] bottom-0 left-0 bg-[#66C2C5]"></div>
              <div className="w-[1px] absolute h-[10%] bottom-0 left-0 bg-[#66C2C5]"></div>

              <a
                href="https://www.instagram.com/aries__1159/"
                className="w-[80%] h-[80%] flex justify-center items-center bg-transparent backdrop-blur relative rounded-[30px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-[30%] h-[30%]"
                >
                  <path
                    d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z"
                    fill="#4B6E79"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <img
          src={Robo}
          alt=""
          className=" w-[100%] -bottom-0 left-[55%] absolute mobile:left-[0%]"
        />
      </div>

      <div className="mt-[10vh] w-[100%] h-[10vh] mb-[5vh] border-t border-b border-[#66C2C5] flex justify-between items-center flex-wrap pl-[4rem] pr-[4rem]">
        <a href="/" className="p1 text-[1.35rem]">
          Home
        </a>
        <a href="/Projects" className="p1 text-[1.35rem]">
          Projects
        </a>
        <a href="/About" className="p1 text-[1.35rem]">
          About
        </a>
        <a href="/Contact" className="p1 text-[1.35rem]">
          Contact
        </a>
      </div>
    </>
  );
};

export default Footer;
