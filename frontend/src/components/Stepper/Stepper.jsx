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

const Stepper = ({ step, title, description }) => {
  return (
    <div>
      <div className="relative flex-1">
        <div
          className={`flex-1 w-[340px] bg-white rounded-xl shadow-md border border-gray-300 p-[30px] pb-[26px] ${steps[step].borderColor} h-full border-b-4`}
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
          <p className="text-gray-600 text-[18px] leading-[22px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stepper;
