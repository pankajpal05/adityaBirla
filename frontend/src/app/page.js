import AchieveALotCard from "@/components/AchieveALotCard/AchieveALotCard";
import Stepper from "@/components/Stepper/Stepper";
import { fetchTemplateViewData } from "@/services/templateView.service";

export default async function Home() {
  const cardData = [
    {
      icon: "icon",
      title: "Love",
      description: "A card to express love and affection.",
      className: "!border-b-red-500",
    },
    {
      icon: "icon",
      title: "Happiness",
      description: "A card to bring joy and smiles.",
      className: "!border-b-green-500",
    },
    {
      icon: "icon",
      title: "Achievement",
      description: "Celebrate your achievements and milestones.",
      className: "!border-b-blue-500",
    },
    {
      icon: "icon",
      title: "Nature",
      description: "Appreciate the beauty of nature and greenery.",
      className: "!border-b-green-500",
    },
    {
      icon: "icon",
      title: "Energy",
      description: "Feel the warmth and energy of the sun.",
      className: "!border-b-red-500",
    },
    {
      icon: "icon",
      title: "Night",
      description: "Embrace the calm and quiet of the night.",
      className: "!border-b-pink-500",
    },
  ];

  const {data} = await fetchTemplateViewData()
  if (!data) {
      return false
  }
  console.log(data);
  
  const [templateView,cardView] = data[0]
  console.log(templateView,cardView);
  

  return (
    <div>
      <div className="bg-gray-200 p-8 flex-col flex gap-[66px] px-[141px]">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[50px]">
            Achieve A Lot <span className="text-red-500">With...</span>
          </h1>
          <h3 className="text-[20px]">
            Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam
            cras sapien ipsum mi sit urna auctor facilisi. Mollis
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center bg-gray-200 gap-8">
          {templateData.map((card, index) => (
            <AchieveALotCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              className={card.className}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-200 flex-col flex  px-[141px] gap-[30px] py-10">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[50px] tracking-[-3.5px] ">
          How To Pay On Call With  <span className="text-red-500">UPI123</span>
          </h1>
          <h3 className="text-[20px] tracking-[0px]">
          Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam cras sapien ipsum mi sit urna auctor facilisi. Mollis
          </h3>
        </div>
        <div>
          <Stepper />
        </div>
      </div>
    </div>
  );
}
