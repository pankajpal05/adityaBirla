import AchieveALotCard from "@/components/AchieveALotCard/AchieveALotCard";
import Stepper from "@/components/Stepper/Stepper";
import { fetchTemplateViewData } from "@/services/templateView.service";
import _get from "lodash/get";
import { getImageUrl } from "@/utils/common.util";
import { fetchStepperData } from "@/services/stepper.service";
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

  const templateData = (await fetchTemplateViewData()) || [];
  const stepperData = (await fetchStepperData()) || [];

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
          {templateData.map((card, index) => {
            const imageUrl = getImageUrl(_get(card.templateView, "Image.url"));
            const title = card.templateView.title;
            const description = card.templateView.description;
            return (
              <AchieveALotCard
                key={index}
                icon={imageUrl}
                title={title}
                description={description}
                className={cardData[index].className}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-gray-200 flex-col flex  px-[141px] gap-[30px] py-10">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[50px] tracking-[-3.5px] ">
            How To Pay On Call With <span className="text-red-500">UPI123</span>
          </h1>
          <h3 className="text-[20px] tracking-[0px]">
            Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam
            cras sapien ipsum mi sit urna auctor facilisi. Mollis
          </h3>
        </div>
        <div className="flex gap-8">
          {stepperData.map((card, index) => {
            const title = card.stepper.title;
            const description = card.stepper.description;
            return (
              <Stepper
                key={index}
                step={index}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
