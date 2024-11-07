import Image from 'next/image';
import React from 'react'

const Card = ({ title, date, category, readTime,className }) => {
    return (
        <div className=" text-left bg-white py-4 px-6 rounded-lg hover:border-[#8A081C] shadow-md overflow-hidden w-full mx-auto border border-gray-200 hover:bg-[#FFF6F7] group transition-all duration-300 ease-in-out">
          <div className={`flex space-x-4 ${className}`}>
            {/* Image Column */}
            <div className={`relative h-40 ${className == "flex-col" ?"w-full":"w-1/3"} overflow-hidden rounded-lg`}>
              <Image
                src="/images/img.png"
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
    
            {/* Content Column */}
            <div className={`flex flex-col ${className == "flex-col" ?"w-full":"w-2/3 justify-evenly"}`}>
              <span
                className={`max-w-max text-xs font-semibold uppercase ${
                  category === "Life Insurance" ? "bg-yellow-400" : "bg-green-400"
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
      );
}

export default Card
