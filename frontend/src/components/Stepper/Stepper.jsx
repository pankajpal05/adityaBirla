import { STEPPER_BORDER_COLOR } from "@/constant/global.constant";
const Stepper = ({ step, title, description, length }) => {
  return (
    <div>
      <div className="relative flex-1 ">
        {step > 0 && (
          <div className="absolute w-3 h-1 bg-red-500 top-0 max-lg:rotate-90 max-lg:left-1/2 -translate-y-[200%] lg:left-0 lg:top-1/2 lg:-translate-x-full lg:-translate-y-1/2"></div>
        )}
        <div
          className={`flex-1 h-full bg-white rounded-xl shadow-md border border-gray-300 p-[30px] pb-[26px] ${STEPPER_BORDER_COLOR[step]} h-full border-b-4`}
        >
          <div className="flex items-center mb-[25px] rounded-full bg-gray-100 w-fit p-1 pr-4">
            <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center mr-2">
              <span className="text-[24px] font-bold text-gray-700">
                {step + 1}
              </span>
            </div>
            <span className="text-[14px] font-semibold text-gray-500">
              STEP
            </span>
          </div>
          <div
            className="h-[180px] overflow-auto "
            style={{ scrollbarWidth: "none" }}
          >
            <h2 className="text-[24px] font-[600]">{title}</h2>
            <p className="text-gray-600 leading-[22px]">{description}</p>
          </div>
        </div>
        {step < length - 1 && (
          <div className="absolute w-3 h-1 bg-red-500 bottom-0 max-lg:rotate-90 max-lg:left-1/2 translate-y-full lg:right-0 lg:top-1/2 lg:translate-x-full lg:-translate-y-1/2"></div>
        )}
      </div>
    </div>
  );
};
export default Stepper;
