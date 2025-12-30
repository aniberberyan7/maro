import Image from "next/image";
const ButtonSearch = () => {
    return (
        <button className="bg-(--color-primary) hover:shadow-(--shadow-button-default) active:shadow-(--shadow-button-active) hidden md:flex w-10 lg:w-35 p-2 gap-4 cursor-pointer duration-300 rounded">
            <Image src="/icons-header/icon-menu.svg" alt="Menu" width={24} height={24} className="hidden md:block" />
            <span className="text-bsae text-white hidden lg:block">Կատալոգ</span>
        </button>
    );
}
export default ButtonSearch;    

