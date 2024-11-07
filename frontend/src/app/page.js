import AchieveALotCard from "@/components/AchieveALotCard/AchieveALotCard";

export default function Home() {
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

  return (
    <div className="bg-gray-200 p-8 flex-col flex gap-[66px] px-[141px]">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[80px]">
          Achieve A Lot <span className="text-red-500">With...</span>
        </h1>
        <h3 className="text-[20px]">
          Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam
          cras sapien ipsum mi sit urna auctor facilisi. Mollis
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center bg-gray-200 gap-8">
        {cardData.map((card, index) => (
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
  );
}
