import Image from "next/image";
// import MapLibre from "@/components/MapLibre";
import Actions from "../components/Actions";
import Slider from "@/components/Slider/Slider";
import NewProducts from "@/components/NewProducts";
import Purchases from "@/components/Purchases";
import SpecialOffer from "@/components/SpecialOffer";
import MapYandex from "@/components/MapYandex";
import Articles from "@/components/Articles";
import NewYearPopup from "@/components/Slider/NewYearPopup";


export default function Home() {
  return (
   <main className="w-full mx-auto mb-20">
    <Slider />
    <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
      <Actions />
      <NewProducts />
      <Purchases />
      <SpecialOffer />
      {/* <MapLibre /> */}
      <MapYandex />
      <Articles />
      <NewYearPopup />

    </div>
   </main>
  );
}
