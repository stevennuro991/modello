import React from "react";
import banner from "../../assets/images/banner.png";
import aboutUs from "../../assets/images/about_us1.png";
import missionLogo from "../../assets/icons/mission.svg";
import visionLogo from "../../assets/icons/eye.svg";
import teamholder from "../../assets/icons/teamholder.svg";
import builderLogo from "../../assets/icons/builder.svg";
import { IoCheckmarkCircle } from "react-icons/io5";
import {
  FaArrowRight,
  FaRegCircleCheck,
  FaStudiovinari,
  FaThumbsUp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import serviceBg from "../../assets/images/disinfection-worker-spraying-subway-staircase-due-covid19-pandemic.jpg";
import { GrUserSettings } from "react-icons/gr";
import { GiDelicatePerfume } from "react-icons/gi";
import service1 from "../../assets/images/Building-Maintenance-Technician_resized.jpg";
import service2 from "../../assets/images/Commercial-Carpet-Cleaning-Mistakes.jpg";
import service3 from "../../assets/images/Furniture-Cleaning-Banner.jpg";
import service4 from "../../assets/images/Locate-a-Car-Detailing-Near-You.jpg";
import service5 from "../../assets/images/Squeegeeing-Window-e1643659548152.webp";
import service6 from "../../assets/images/Clean-The-Floors.jpg";

function Home() {
  const serviceicons = [
    {
      icon: <GrUserSettings />,
      name: "Pick a suitable Plan",
      description:
        "Rule first third above first tree saw Grass subdue great eep saying forth rule hath to the replenish.",
    },
    {
      icon: <GiDelicatePerfume />,
      name: "Set your schedule",
      description:
        "Rule first third above first tree saw Grass subdue great eep saying forth rule hath to the replenish.",
    },
    {
      icon: <FaStudiovinari />,
      name: "Get things done",
      description:
        "Rule first third above first tree saw Grass subdue great eep saying forth rule hath to the replenish.",
    },
  ];
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
  const surroundingCards = [
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
    {
      image: service1,
      name: "Residential, services",
      pricing: "Things to know choosing a cleaning service",
      link: "/cleaning-services",
    },
   
  ];
  const serviceIcons = [
    {
      icon: <GrUserSettings />,
      name: "Experienced Staff",
      description: "Rule first third above first treeth  the replenish.",
    },
    {
      icon: <GiDelicatePerfume />,
      name: "Fast Service ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaStudiovinari />,
      name: "Natural products ",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
    },
    {
      icon: <FaThumbsUp />,
      name: "Best Equipment",
      description:
        "If you have a great idea, or something to discuss - we are ready to help.",
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
        <div className="absolute top-10 h-full flex flex-col pl-20 w-[800px] justify-center left-0 p-8 space-y-5">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">INTRODUCING MODELLO</h1>
          </div>
          <h1 className="text-white text-[48px] leading-tight  font-bold w-[80%]">
            Worried about your home & office cleaning?
          </h1>
          <p className="text-white w-[60%]">
            Hire us! We are a professional cleaning company offering all type of
            cleaning and maintenance services.
          </p>
          <button className="uppercase w-[30%] bg-[#EEB000] text-white p-2 flex items-center justify-center space-x-3 rounded-md">
            <p>Request a demo</p>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-white py-20 w-full flex items-center justify-center px-80 space-x-10">
        <div className="w-[50%]">
          <div className="flex justify-start gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black text-ls uppercase">About Company</h1>
          </div>

          <div className="flex flex-col space-y-10">
            <div className="">
              <h1 className="pt-6 text-[32px] font-semibold">
                Why Will You Choose Our Services?
              </h1>
              <p>
                Modello Services is a property maintenance company that was
                birthed in 2018 which pays royalties to Modello and Gem Limited,
                considered one of the leading fabric and PVC vinyl faux leather
                wholesale providers in Ghana, West Africa. The core value of
                this company is to bring convenience to customers and clients
                while ensuring they get value for services.
              </p>
              <Link to="/" className="text-blue-500 text-sm underline">
                Learn more about the company
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-fit flex justify-center items-center relative -mt-60">
          <div className="w-full h-full flex items-center justify-center">
            <div className="h-fit w-full bg-white rounded-xl shadow-md flex flex-col items-center space-y-10 p-10">
              <p className="text-xl"> Book a Service</p>
              <div className="w-full flex flex-col space-y-10">
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p>Your name</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>
                <label htmlFor="" className="flex flex-col space-y-1">
                  <p> Phone number</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>

                <label htmlFor="" className="flex flex-col space-y-1">
                  <p> Choose a service</p>
                  <input
                    type="text"
                    className="border p-2 w-full bg-gray-100 rounded"
                  />
                </label>

                <div className="w-full">
                  <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
                    <p>Submit Details</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-contain h-[600px] w-[100%] relative object-scale-down bg-black property-img ">
        <img
          src={serviceBg}
          alt="..."
          className="h-full w-full object-cover absolute"
          // onError={() => setImageError(true)}
        />
        <div className="bg-blue-900 w-full h-full text-white absolute opacity-70 z-10"></div>
        <div className="absolute flex w-full h-full justify-center z-20 gap-2 items-center -mt-60">
          <hr className="bg-white h-[5px] w-[100px]" />
          <h1 className="text-white uppercase">how it works</h1>
          <hr className="bg-white h-[5px] w-[100px]" />
        </div>
        <div className="absolute flex w-full h-full justify-center items-center z-20 gap-2 -mt-40">
          <h1 className="pt-6 justify-center item-center w-29 text-[32px] px-[680px] text-center font-semibold text-white">
            Get amazing cleaning in 3 simple steps{" "}
          </h1>
        </div>
        <div className="grid grid-cols-3 w-full place-items-center gap-10 z-30 relative h-full px-60">
          {serviceicons.map((item, index) => {
            return (
              <div
                key={index}
                className=" hover:scale-[1.02] duration-150 w-full "
              >
                <div className="flex flex-col w-full h-full relative hover:cursor-pointer p-5 justify-center items-center rounded-md">
                  <div className="w-20 h-20 rounded-full bg-[#F19C4F] flex items-center justify-center">
                    <p className="text-white text-3xl">{item?.icon}</p>
                  </div>
                  <div className="flex flex-col text-center text-white">
                    <p className="font-bold">{item?.name}</p>
                    <p className="">{item?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex px-60 justify-between py-7 space-y-5">
        <div className="flex flex-col space-y-5 w-[40%] ">
          <div className="flex gap-2 items-center w-full justify-start">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black uppercase">Services</h1>
            <hr className="bg-black h-[5px] w-[100px]" />
          </div>
          <h1 className="flex justify-start items-center text-3xl font-semibold pr-52">
            Offering Best Cleaning Services{" "}
          </h1>
        </div>
        <div className="w-[40%] ">
          <p>
            We are proving all type of cleaning solutions for every small and
            big businesses, organizations and homes
          </p>
        </div>
        <div>
          <div className="w-full">
            <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
              <p>More Services</p>
            </button>
          </div>
        </div>
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
      <div className="relative">
        <img src={banner} alt="Banner description" className="w-full" />
        <div className="absolute top-10 h-full flex flex-col pl-20 w-[800px] justify-center right-0 p-8 space-y-5">
          <div className="flex gap-2 items-center">
            <hr className="bg-white h-[5px] w-[100px]" />
            <h1 className="text-white text-ls">Founders Message</h1>
          </div>
          <p className="text-white w-[60%]">
            “Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí,"
          </p>
          <p className="text-white w-[60%]">Kwame Boakye Founder, Moppers</p>
        </div>
      </div>
      <div className="flex px-12 justify-between py-7">
        <div className="">
          <div className="flex gap-2 items-center">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black">WHY CHOOSE US</h1>
          </div>
          <h1 className="font-bold w-[400px] text-4xl pt-6">
            Amazing benefits with us
          </h1>
          <p className="w-[600px] pt-2">
            Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en
            una pieza cl´sica de la literatura del Latin
          </p>
          <Link to="/" className="text-blue-500 text-sm underline">
            Book a service now
          </Link>
          <div className="grid grid-cols-2 w-full place-items-center gap-10">
            {serviceIcons.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" hover:scale-[1.02] duration-150 w-full"
                >
                  <div className="flex w-full h-fit relative hover:cursor-pointer p-5 justify-center items-center object-contain space-y-5 rounded-md space-x-5">
                    <div className="w-20 h-20 rounded-full bg-[#F19C4F] flex items-center justify-center">
                      <p className="text-white text-3xl">{item?.icon}</p>
                    </div>
                    <div className="flex flex-col w">
                      <p className="font-bold">{item?.name}</p>
                      <p className="text-xs">{item?.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <img className="h-1/2 w-1/2" src={aboutUs} alt="" />
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
      <div className="flex px-60 justify-between py-7 space-y-5">
        <div className="flex flex-col space-y-5 w-[40%] ">
          <div className="flex gap-2 items-center w-full justify-start">
            <hr className="bg-black h-[5px] w-[100px]" />
            <h1 className="text-black uppercase">Blog</h1>
          </div>
          <h1 className="flex justify-start items-center text-3xl font-semibold pr-52">
            Tips to keep the surroundings clean
          </h1>
        </div>

        <div>
          <div className="w-full">
            <button className="uppercase w-[100%] bg-blue-500 text-white p-2 flex items-center justify-center rounded-md">
              <p>More Services</p>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full place-items-center gap-10 px-40 pb-20">
        {surroundingCards.map((item, index) => {
          return (
            <Link
              key={index}
              to={item?.link}
              className="md:w-80 h-80   hover:scale-[1.02] rounded-lg duration-150"
            >
              <div className="flex w-full h-full relative rounded-lg hover:cursor-pointer flex-col justify-between  bg-cover object-contain bg-transparent">
                <div className="rounded-lg bg-contain h-[75%] w-full object-scale-down bg-black property-img ">
                  <img
                    src={item?.image}
                    alt="..."
                    className=" h-full object-fill rounded-lg relative shadow-md"
                  />
                </div>
                <div className="p-3 flex rounded-lg abolute w-full space-y-1 items-center justify-center">
                  <div className="flex w-full -mt-40 z-50 bg-white shadow-md py-2 items-center justify-center mx-auto rounded-lg">
                    <div className="flex flex-col w-[80%] ">
                      <h3>{item?.name}</h3>
                      <h6 className="font-extralight text-sm">{item?.pricing}</h6>
                    </div>
                    {/* <div className="h-10 w-10 border rounded-full flex items-center justify-center">
                      <FaArrowRight className="text-blue-500" />
                    </div> */}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Home;
