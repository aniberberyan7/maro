import Image from "next/image";

const InputBlock = () => {
  return (
    <div className="relative min-w-[261px] flex-grow">
        <input type="text" placeholder="find product" className="w-full h-10 rounded p-2 outline outline-(--color-primary) focus:shadow-(--shadow-button-default) text-[#8F8F8F] text-base leading-[150%]" />
        <button className="absolute top-2 right-2 cursor-pointer">
            <Image src="/icons-header/icon-search.svg" alt="Search" width={24} height={24} />
        </button>
    </div>
  )
}

export default InputBlock
