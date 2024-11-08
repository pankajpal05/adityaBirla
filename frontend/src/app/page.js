import TemplateView from "@/components/TemplateView/TemplateView";
import Stepper from "@/components/Stepper/Stepper";
import { fetchTemplateViewData } from "@/services/templateView.service";
import _get from "lodash/get";
import { getImageUrl } from "@/utils/common.util";
import { fetchStepperData } from "@/services/stepper.service";
import Card from "@/components/Card/Card";
import { fetchListViewData } from "@/services/listView.service";
import { fetchGridViewData } from "@/services/gridView.service";
import Carousel from "@/components/Carousel/Carousel";
import { TEMPLATE_VIEW_BORDER_COLOR } from "@/constant/global.constant";
export default async function Home() {
  const templateData = (await fetchTemplateViewData()) || [];
  const stepperData = (await fetchStepperData()) || [];
  const listViewData = (await fetchListViewData()) || [];
  const gridViewData = (await fetchGridViewData()) || [];

  return (
    <div>
      {/* templateView */}
      <div className="bg-gray-200 p-8 flex-col flex gap-[66px] lg:px-[141px]">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold lg:text-[50px] text-[32px]">
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
              <TemplateView
                key={index}
                icon={imageUrl}
                title={title}
                description={description}
                className={TEMPLATE_VIEW_BORDER_COLOR[index]}
              />
            );
          })}
        </div>
      </div>

      {/* stepper component */}
      <div className="bg-gray-200 flex-col flex px-8 lg:px-[141px] gap-[30px] py-10">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold lg:text-[50px] text-[32px] tracking-[-3.5px] ">
            Getting Started With{" "}
            <span className="text-[#8B151B]">ABC Credit Card</span>
          </h1>
          <h3 className="text-[20px] text-[#000000] opacity-80 tracking-[0px]">
            Sollicitudin vitae eu nulla amet ut vestibulum senectus enim. Etiam
            cras sapien ipsum mi sit urna auctor facilisi. Mollis
          </h3>
        </div>
        <div className="flex gap-8 justify-between  max-lg:flex-col">
          {stepperData.map((card, index) => {
            const title = card.stepper.title;
            const description = card.stepper.description;
            return (
              <Stepper
                key={index}
                step={index}
                title={title}
                description={description}
                length={stepperData.length}
              />
            );
          })}
        </div>
      </div>

      <div className="p-6 bg-gray-100 ">
        <div className="flex justify-between">
          <div>
            <h2 className="lg:text-[50px] text-[32px] font-bold text-gray-800 mb-6">
              Latest In <span className="text-[#8A081C]">Insurance</span>
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-base bg-white text-[#8A081C] border-2 border-[#8A081C] hover:bg-[#8A081C] hover:text-white px-8 py-2 rounded-full  uppercase">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {gridViewData.map((article, index) => {
            const imageUrl = getImageUrl(_get(article.cardGrid, "Image.url"));
            const title = article.cardGrid.title;
            const date = article.dateComponent.date;
            const category = article.tag;
            const readTime = article.dateComponent.readTime;

            return (
              <Card
                key={index}
                title={title}
                date={date}
                category={category}
                readTime={readTime}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>

      {/* cards Carousel */}
      <div className="p-6 bg-gray-100">
        <div className="flex justify-between">
          <div>
            <h2 className="lg:text-[50px] text-[32px] font-extrabold text-gray-800 mb-6">
              Trending <span className="text-[#8A081C]">Articles</span>
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-base bg-[#8A081C] px-8 py-2 rounded-full text-white uppercase">
              VIEW ALL
            </button>
          </div>
        </div>

        <div className="">
          <Carousel />
        </div>
      </div>

      {/* list view */}
      <div className="p-6 bg-gray-100">
        <div className="grid grid-cols-1 gap-4">
          {listViewData.map((article, index) => {
            const imageUrl = getImageUrl(
              _get(article.cardListView, "Image.url")
            );
            const title = article.cardListView.title;
            const date = article.dateComponent.date;
            const category = article.tag;
            const readTime = article.dateComponent.readTime;
            return (
              <Card
                key={index}
                title={title}
                date={date}
                category={category}
                readTime={readTime}
                imageUrl={imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
