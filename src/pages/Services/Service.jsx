import React from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/about_us1.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import service1 from "../../assets/images/Building-Maintenance-Technician_resized.jpg";
import service2 from "../../assets/images/Commercial-Carpet-Cleaning-Mistakes.jpg";
import service3 from "../../assets/images/Furniture-Cleaning-Banner.jpg";
import service4 from "../../assets/images/Locate-a-Car-Detailing-Near-You.jpg";
import service5 from "../../assets/images/Squeegeeing-Window-e1643659548152.webp";
import service6 from "../../assets/images/Clean-The-Floors.jpg";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";

function Service() {
  const serviceCards = [
    {
      image: service1,
      name: "Home Cleaning",
      pricing: "Starting from 20cedis",
      link: "/cleaning-services",
    },
    {
      image: service2,
      name: "Apartment cleaning",
      pricing: "Starting from 700cedis",
      link: "/apartment-cleaning",

    },
    {
      image: service3,
      name: "Sofa Cleaning",
      pricing: "Starting from 450cedis",
      link: "/sofa-cleaning",

    },
    {
      image: service4,
      name: "Mattress Cleaning",
      pricing: "Starting from 180cedis",
      link: "/mattress-cleaning",

    },
    {
      image: service5,
      name: "Car Washing and Detailing",
      pricing: "Starting from 265cedis",
      link: "/car-cleaning",

    },
    {
      image: service6,
      name: "Home Cleaning",
      pricing: "Starting from 20cedis",
    },
  ];

  const textCards = [
    {
      text: "",
    },
    {
      text: "",
    },
  ];

  return (
    <section>
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute top-10 h-full flex flex-col pl-20 w-[800px] justify-center  left-0 p-8 space-y-5">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Our Services</h1>
          </div>
          <h1 className="text-white text-[48px] leading-tight  font-bold w-[80%]">
            Professional cleaning services for your homes and offices
          </h1>
          <p className="text-white w-[60%]">
            We are a professional cleaning company founded in 1997 and providing
            leading commercial and residential cleaning solutions in the United
            States.
          </p>
          <button className="uppercase w-[30%] bg-[#EEB000] text-white p-2 flex items-center justify-center space-x-3 rounded-md">
            <p>Request a demo</p>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="flex flex-col px-12 justify-between py-7 space-y-5">
        <div className="flex gap-2 items-center w-full justify-center">
          <hr className="bg-black h-[5px] w-[100px]" />
          <h1 className="text-black uppercase">our sevices</h1>
          <hr className="bg-black h-[5px] w-[100px]" />
        </div>
        <h1 className="flex justify-center items-center text-3xl font-semibold px-[600px] text-center">
          We are providing all kind of cleaning services
        </h1>
      </div>
      <div className="grid grid-cols-3 w-full gap-y-10 place-items-center pb-40 p-10 px-60">
        {serviceCards.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              className="md:w-80 h-80   hover:scale-[1.02] rounded-lg duration-150"
            >
              <div className="flex w-full h-full border relative rounded-lg hover:cursor-pointer flex-col justify-between shadow-md bg-cover object-contain bg-white">
                <div className="rounded-lg bg-contain h-[75%] w-full object-scale-down bg-black property-img ">
                  <img
                    src={item?.image}
                    alt="..."
                    className=" h-full object-fill rounded-t-lg"
                  />
                </div>
                <div className="p-3 flex rounded-lg w-full space-y-1 items-center justify-center">
                  <div className="flex flex-col w-[80%]">
                    <h3>{item?.name}</h3>
                    <h6 className="font-extralight">{item?.pricing}</h6>
                  </div>
                  <div className="h-10 w-10 border rounded-full flex items-center justify-center">
                    <FaArrowRight className="text-blue-500" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-gray-100 py-20 w-full flex items-center justify-center">
        <div className="px-10">
          <div className="flex justify-center gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">testimonials</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>

          <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="pt-6 justify-center item-center w-29 text-[32px] px-[600px] text-center font-semibold">
              Trusted by thousand of people & companies.{" "}
            </h1>
            <div className="grid grid-cols-2 w-full place-items-center pb-40 px-80">
              {textCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="md:w-[450px] h-72 hover:scale-[1.02] duration-150"
                  >
                    <div className="flex w-full h-full border relative hover:cursor-pointer flex-col justify-between shadow-md bg-cover object-contain bg-white"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-contain h-96 w-[100%] relative object-scale-down bg-black property-img ">
        <img
          src={serviceBg}
          alt="..."
          className="h-full w-full object-cover absolute"
          // onError={() => setImageError(true)}
        />
        <div className="bg-blue-900 w-full h-full text-white absolute opacity-70 z-10"></div>
        <div className="absolute flex w-full h-full justify-center z-20 gap-2 items-center -mt-28">
          <hr className="bg-white h-[5px] w-[100px]" />
          <h1 className="text-white uppercase">cost calculator</h1>
          <hr className="bg-white h-[5px] w-[100px]" />
        </div>
        <div className="absolute flex w-full h-full justify-center items-center z-20 gap-2 -mt-16">
          <h1 className="pt-6 justify-center item-center w-29 text-[32px] px-[600px] text-center font-semibold text-white">
            Be a part of hundreds of happy families
          </h1>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center bg-transparent -mt-40 z-50 relative">
        <div className="bg-white w-[80%] h-fit border rounded p-10">
          <div className="w-full h-full grid grid-cols-3 gap-40 place-items-center">
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p>Choose a servive</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Your name</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Type of cleaning</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Zip code</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
            <div className="w-full flex flex-col space-y-10">
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Total floor area</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
              <label htmlFor="" className="flex flex-col space-y-1">
                <p> Email address</p>
                <input
                  type="text"
                  className="border p-2 w-full bg-gray-100 rounded"
                />
              </label>
            </div>
          </div>
          <div className="w-full h-full grid grid-cols-3 gap-40 place-items-center py-10">
            <div className="w-full">
              <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
                <p>Submit</p>
              </button>
            </div>
            <div>
              <p className="font-extralight text-sm">
                Submit this information and we will send you the cost for the
                service.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-full h-96 py-10">
        <div></div>
      </div>
    </section>
  );
}

export default Service;
