import { TEMPLATE_VIEW_BORDER_COLOR } from "@/constant/global.constant";
import React from "react";

const Card = ({
  title,
  date,
  category,
  imageUrl,
  readTime,
  className,
  step,
  description,
  length,
  cardView,
  icon,
}) => {
  return (
    <div className="h-full w-full overflow-hidden rounded-xl ">
      {cardView == "stepper" || cardView == "templateView" ? (
        <div className={`relative flex-1 h-full   `}>
          {step > 0 && (
            <div className="absolute w-3 h-1 bg-red-500 top-0 max-lg:rotate-90 max-lg:left-1/2 -translate-y-[200%] lg:left-0 lg:top-1/2 lg:-translate-x-full lg:-translate-y-1/2"></div>
          )}
          <div
            className={`flex-1 h-full bg-white rounded-xl overflow-hidden shadow-md border border-gray-300 p-[30px] pb-[26px] ${TEMPLATE_VIEW_BORDER_COLOR[step]} h-full border-b-4 ${cardView == "templateView" ? "group hover:border-[rgb(202,31,52)] border" : ""}`}
          >
            {icon ? (
              <>
                <div className=" bg-gray-100 rounded-xl mb-[31.5px] w-[46px] h-[46px] ">
                  <img src={icon} className="h-10 w-10" alt="title" />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center mb-[25px] rounded-full bg-gray-100 w-fit p-1 pr-4">
                  <span className="text-[24px] font-bold text-gray-700 w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center mr-2">
                    {step + 1}
                  </span>

                  <span className="text-[14px] font-semibold text-gray-500">
                    STEP
                  </span>
                </div>
              </>
            )}
            <div
              className={`overflow-auto ${icon ? " " : "h-[180px]"} `}
              style={{ scrollbarWidth: "none" }}
            >
              <h2 className="text-[24px] relative flex items-center gap-[14px] leading-[30px] group-hover:text-[#CA1F34] font-[600]">
                {title}
                <span className="hidden group-hover:block absolute right-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.324"
                    height="11.928"
                    viewBox="0 0 16.324 11.928"
                  >
                    <path
                      id="Path_25822"
                      d="M96.25,104.779h.023c.185,0,.369,0,.554,0h12c-.225.225-.452.452-.677.679l-3.055,3.055a.668.668,0,0,0,.944.944l.008-.008c.2-.194.4-.4.592-.592q.608-.608,1.218-1.216l1.408-1.408,1.163-1.163c.162-.162.322-.324.484-.484a.658.658,0,0,0,.184-.37v0a.687.687,0,0,0-.107-.479.586.586,0,0,0-.077-.093l-.008-.008c-.194-.2-.4-.4-.592-.592l-1.216-1.216-1.408-1.408-1.163-1.163-.484-.484a.668.668,0,0,0-.944.944l.008.008c.194.2.4.4.592.592l2.621,2.623.509.509H96.25a.667.667,0,1,0,0,1.333Z"
                      transform="translate(-95.182 -98.121)"
                      fill="#ca1f34"
                      stroke="#ca1f34"
                      strokeWidth="0.8"
                    />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-600 leading-[22px]">{description}</p>
            </div>
          </div>
          {step < length - 1 && (
            <div className="absolute w-3 h-1 bg-red-500 bottom-0 max-lg:rotate-90 max-lg:left-1/2 translate-y-full lg:right-0 lg:top-1/2 lg:translate-x-full lg:-translate-y-1/2"></div>
          )}
        </div>
      ) : (
        <div className=" text-left bg-white py-4 px-6 rounded-xl hover:border-[#8A081C] shadow-md overflow-hidden w-full mx-auto border border-gray-200 hover:bg-[#FFF6F7] group transition-all duration-300 ease-in-out">
          <div className={`flex space-x-4 ${className}`}>
            <div
              className={`relative h-40 ${className == "flex-col" ? "w-full" : "w-1/3"} overflow-hidden rounded-lg`}
            >
              <img
                src={imageUrl}
                alt={title}
                className="transition-transform w-full object-cover duration-300 group-hover:scale-105"
              />
            </div>

            <div
              className={`${cardView == "Carousel" ? "mt-5 " : "mt-0"}  flex flex-col ${className == "flex-col" ? "w-full" : "w-2/3 justify-evenly"}`}
            >
              <span
                className={`max-w-max text-xs font-semibold uppercase ${
                  category === "Life Insurance"
                    ? "bg-yellow-400"
                    : "bg-green-400"
                } text-white px-2 py-1 rounded-full`}
              >
                {category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-[#8A081C] ">
                {title}
              </h3>
              <div className="mt-1 text-sm text-gray-500 flex items-center group-hover:hidden">
                <span>{readTime}</span>
                <span className="mx-1">•</span>
                <span>{date}</span>
              </div>

              <div className="mt-3 hidden group-hover:flex items-center transform translate-y-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[#8A081C] font-semibold">Read More</span>
                <span className="pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="4.993"
                    height="8.486"
                    viewBox="0 0 4.993 8.486"
                  >
                    <path
                      id="Path_22225"
                      data-name="Path 22225"
                      d="M0,0,3.182,3.182,6.365,0"
                      transform="translate(1.061 7.425) rotate(-90)"
                      fill="none"
                      stroke="#c91429"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
