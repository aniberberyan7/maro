import Image from "next/image"

const SlideOne = () => {
  return (
    <div className="relative bg-[url('/images/graphics/slide-1-1.jpg')] bg-repeat bg-contain overflow-hidden flex justify-center h-20 md:h-40 xl:h-50">
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative flex flex-row items-center gap-x-2 xl:gap-x-4 z-10">
        <div className="relative hidden md:block md:w-50 md:h-33 xl:w-75 xl:h-50 top-7">
            <Image src="/images/graphics/food-3.png" alt="Delivery" fill sizes="(max-width: 768px) 50px, (max-width:1200px) 75px, 100px" />
        </div>
        
        <h2 className="text-lg md:text-2xl xl:text-3xl font-bold text-[#414141]"> Free delivery on orders over $ 50 </h2>
      </div>
    </div>
  )
}

export default SlideOne
