const steps = [
  {
    borderColor: "border-b-yellow-500",
  },
  {
    borderColor: "border-b-green-500",
  },
  {
    borderColor: "border-b-yellow-500",
  },
];

const Stepper = ({ step, title, description,length }) => {
  return (
    <div>
      <div className="relative flex-1">
        {
          step > 0 && <div className="absolute w-3 h-1 bg-red-500 left-0 top-1/2 -translate-x-full -translate-y-1/2"></div>
        }
        <div
          className={`flex-1 h-full bg-white rounded-xl shadow-md border border-gray-300 p-[30px] pb-[26px] ${steps[step].borderColor} h-full border-b-4`}
        >
          <div className="flex items-center mb-[25px] rounded-full bg-gray-100 w-fit p-1 pr-4">
            <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center mr-2">
              <span className="text-[24px] font-bold text-gray-700">
                {step+1}
              </span>
            </div>
            <span className="text-[14px] font-semibold text-gray-500">
              STEP
            </span>
          </div>
          <h2 className="text-[24px] font-[600]">{title}</h2>
          <p className="text-gray-600 leading-[22px]">
            {description}
          </p>
        </div>
        {
          step < length-1 && <div className="absolute w-3 h-1 bg-red-500 right-0 top-1/2 translate-x-full -translate-y-1/2"></div>
        }
      </div>
    </div>
  );
};
export default Stepper;
