
import Image from "next/image";
import iconRight from "../../public/icons-products/icon-arrow-right.svg";
import database from "@/data/database.json";
import ProductCard from "./ProductCards";

//եթե "նախորդ գնումներ" բաժնում գնած ապրանքները ցանկանում ենք գնել զեղչով, ու տեսնել դրանց համապատասխան զեղչերը՝ ապրանքի վրա
// const Purchases = () => {

// const userPurchases = database.users[0].purchases.map((purchases) => 
// { 
//   const product = database.products.find((product) => product.id === purchases.id);
//   return {
//     ...product
//   };
// }
// );
// console.log(userPurchases);


const Purchases = () => {

const userPurchases = database.users[0].purchases.map((purchases) => 
{ 
  const product = database.products.find((product) => product.id === purchases.id);
  if(!product) return undefined;
  const { discountPercent, ...rest } = product;
  void discountPercent;
  return rest;
}
).filter((item) => item !== undefined);


  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Previous Purchases</h2>
          <button className="flex flex-row items-center gap-x-2 cursor-pointer">
            <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
              See all
            </p>
            <Image
              src={iconRight}
              alt="Նախորդ գնումները"
              width={24}
              height={24}
              sizes="24px"
            />
          </button>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {
          userPurchases.slice(0,4).map((item, index) => (
            <li key={item.id} 
                className={`${index >= 4 ? "hidden" : ""}
                ${index >= 3 ? "md:hidden xl:block" : ""}
                ${index >= 4 ? "xl:hidden" : ""}
               `}   
            >
            <ProductCard {...item}/>
            </li>
            
          ))
          }
        </ul>
      </div>
    </section>
  );
};

export default Purchases;