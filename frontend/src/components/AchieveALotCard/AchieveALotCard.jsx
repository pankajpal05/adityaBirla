
const AchieveALotCard =({ icon, title, description , className})=> {
    return (
      <div className={`w-full mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-400  border-b-4  ${className}`}>
        <div className="flex flex-col items-start space-y-4">
          <div className="p-4 bg-gray-100 rounded-xl mb-4 ">
            {icon || "icon"} {/* Placeholder icon */}
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600 ">{description}</p>
        </div>
      </div>
    );
  }
  export default AchieveALotCard