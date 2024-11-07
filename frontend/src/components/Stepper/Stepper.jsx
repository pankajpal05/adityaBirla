// components/Stepper.js
const steps = [
    {
        number: 1,
        title: "Explore Our Card Options",
        description: "Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam cras sapien ipsum.",
        borderColor: "border-b-yellow-500",
    },
    {
        number: 2,
        title: "Submit Your Application",
        description: "Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam cras sapien ipsum.",
        borderColor: "border-b-green-500",
    },
    {
        number: 3,
        title: "Activate And Enjoy",
        description: "Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam cras sapien ipsum.",
        borderColor: "border-b-yellow-500",
    },
];

const Stepper = () => {
    return (
        <div>
            <div className="flex justify-between gap-8">
                {steps.map((step, index) => (
                    <div key={step.number} className="relative flex-1">
                    {index > 0 && (
                        <div className="absolute top-1/2 left-0 transform -translate-x-full -translate-y-1/2 w-3 h-1 bg-red-500"></div>
                    )}
                    <div
                        className={`flex-1 bg-white rounded-xl shadow-md border border-gray-300 p-[30px] pb-[26px] h-full ${step.borderColor} border-b-4`}
                    >
                        <div className="flex items-center mb-[25px] rounded-full bg-gray-100 w-fit p-1 pr-4">
                            <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center mr-2">
                                <span className="text-[24px] font-bold text-gray-700">{step.number}</span>
                            </div>
                            <span className="text-[14px] font-semibold text-gray-500">STEP</span>
                        </div>
                        <h2 className="text-[24px] font-[600]">{step.title}</h2>
                        <p className="text-gray-600 text-[18px] leading-[22px]">{step.description}</p>
                    </div>
                    {index < steps.length -1 && (
                        <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-3 h-1 bg-red-500"></div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Stepper