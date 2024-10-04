import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const PlansPricing = () => {
  const cardData = [
    {
      id: 1,
      title: "Basic",
      description: "  For those who are starting in content creation",
      price: "$499",
      duration: "per month",
      list1Text: "   Up to 2 minutes of edited video",
      list2Text: "  Royalty-free background music",
    },

    {
      id: 2,
      title: "Standard",
      description:
        "For those who want to grow their shorts & increase visibility",
      price: "$999",
      duration: "per month",
      list1Text: " Up to 5 minutes of edited video",
      list2Text: "Advanced editing",
      list3Text: "Script assistance",
      list4Text: "2 revisions",
    },

    {
      id: 3,
      title: "Premium",
      description: "  For those with an agency or video editors",
      price: "$1,499",
      duration: "per month",
      list1Text: "Up to 10 minutes of edited video",
      list2Text: "Professional editing",
      list3Text: "Scriptwriting & storyboard ",
      list4Text: "Priority support",
    },
  ];
  return (
    <>
      <div className="h-full plnasWrapper bg-[#E9F3FD] pb-[100px]">
        <div className="inner w-[80%] mx-auto pt-[100px] flex flex-col items-center gap-5">
          <div className="py-2 px-3 rounded-2xl bg-[white]">
            <button className="text-[#29145b] text-[12px] font-semibold">
              Transparent Pricing
            </button>
          </div>

          <h2 className="font-bold text-[#29145b] text-[48px]">
            Plans And Pricing
          </h2>
          <div className="pricingCardContainer flex gap-7 ">
          {
            cardData.map((data)=>(
                <div className="priceCard w-[281px] py-[16px] px-[14px] rounded-xl flex flex-col gap-4 items-start bg-[white]">
              <div className="flex flex-col" key={data.id}>
                <h5 className="text-[24px] font-bold">{data.title}</h5>
                <p className="text-[14px] font-bold">
                 {data.description}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-[28px] font-bold">{data.price}</p>
                <p className="text-[14px] font-semibold">{data.duration}</p>
              </div>

              <button className="w-full p-3 flex font-bold items-center justify-center border-[1px] border-[#E4DDF6] border-solid rounded-xl">
                Get Started
              </button>
              <hr />
              <div className="textContainer flex flex-col items-start gap-3">
                <p className="font-medium text-[gray]">What's included</p>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-2 justify-start text-[14px] font-semibold">
                    <Icon
                      icon="mdi:tick"
                      width="18px"
                      height="18px"
                      style={{ color: "#29145b" }}
                    />
                 {data.list1Text}
                  </li>

                  <li className="flex gap-2 justify-start text-[14px] font-semibold">
                    <Icon
                      icon="mdi:tick"
                      width="18px"
                      height="18px"
                      style={{ color: "#29145b" }}
                    />
                 {data.list2Text}
                  </li>
                  {data.list3Text && (
  <li className="flex gap-2 justify-start text-[14px] font-semibold">
    <Icon
      icon="mdi:tick"
      width="18px"
      height="18px"
      style={{ color: "#29145b" }}
    />
    {data.list3Text}
  </li>
)}
{data.list4Text && (
  <li className="flex gap-2 justify-start text-[14px] font-semibold">
    <Icon
      icon="mdi:tick"
      width="18px"
      height="18px"
      style={{ color: "#29145b" }}
    />
    {data.list4Text}
  </li>
)}

                </ul>
              </div>
            </div>
            ))
          }
           
          </div>
        </div>
      </div>
    </>
  );
};

export default PlansPricing;
