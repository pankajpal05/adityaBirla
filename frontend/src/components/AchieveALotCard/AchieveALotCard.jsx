const AchieveALotCard = ({ icon, title, description, className }) => {
  return (
    <div
      className={`w-full h-full group hover:bg-[#FEF2F3] hover:border-[#CA1F34] mx-auto bg-white rounded-[20px] shadow-md border border-gray-400  border-b-4  ${className}`}
    >
      <div className=" bg-gray-100 rounded-xl m-[34px] mb-[31.5px] w-[46px] h-[46px] ">
        <image src={icon} className="h-5 w-5" alt="title" />
      </div>
      <div className="flex flex-col items-start mx-[40px] mb-[32px]">
        <h2 className="ml-[6px] text-[24px] font-[600] text-[#111111] flex items-center gap-[14px] group-hover:text-[#CA1F34]">
          {title}
          <span className="hidden group-hover:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.324"
              height="11.928"
              viewBox="0 0 16.324 11.928"
            >
              <path
                id="Path_25822"
                dataName="Path 25822"
                d="M96.25,104.779h.023c.185,0,.369,0,.554,0h12c-.225.225-.452.452-.677.679l-3.055,3.055a.668.668,0,0,0,.944.944l.008-.008c.2-.194.4-.4.592-.592q.608-.608,1.218-1.216l1.408-1.408,1.163-1.163c.162-.162.322-.324.484-.484a.658.658,0,0,0,.184-.37v0a.687.687,0,0,0-.107-.479.586.586,0,0,0-.077-.093l-.008-.008c-.194-.2-.4-.4-.592-.592l-1.216-1.216-1.408-1.408-1.163-1.163-.484-.484a.668.668,0,0,0-.944.944l.008.008c.194.2.4.4.592.592l2.621,2.623.509.509H96.25a.667.667,0,1,0,0,1.333Z"
                transform="translate(-95.182 -98.121)"
                fill="#ca1f34"
                stroke="#ca1f34"
                strokeWidth="0.8"
              />
            </svg>
          </span>
        </h2>
        <p className="ml-[6px] text-[18px] leading-[22px] font-normal ">
          {description}
        </p>
      </div>
    </div>
  );
};
export default AchieveALotCard;
