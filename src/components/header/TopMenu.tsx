import Image from "next/image"
import iconHeart from "../../../public/icons-header/icon-heart.svg"
import iconBox from "../../../public/icons-header/icon-box.svg"
import iconCart from "../../../public/icons-header/icon-cart.svg"
import iconMenuMobile from "../../../public/icons-header/icon-menu-mob.svg"

const TopMenu = () => {
  return (
    <div>
        <ul className="flex flex-row gap-x-10 items-end">
            <li className="flex flex-col gap-1.5 items-center md:hidden w-11 cursor-pointer">
                <Image src={iconMenuMobile} alt="Menu" width={24} height={24} className="object-contain w-6 h-6" />
                <span>Catalog</span>
            </li>
            
            <li className="flex flex-col gap-1.5 items-center w-11 cursor-pointer">
                <Image src={iconHeart} alt="Favorites" width={24} height={24} className="object-contain w-6 h-6" />
                <span>Favorites</span>
            </li>

            <li className="flex flex-col gap-1.5 items-center w-11 cursor-pointer">
                <Image src={iconBox} alt="Orders" width={24} height={24} className="object-contain w-6 h-6" />
                <span>Orders</span>
            </li>

            <li className="flex flex-col gap-1.5 items-center w-11 cursor-pointer">
                <Image src={iconCart} alt="Cart" width={24} height={24} className="object-contain w-6 h-6" />
                <span>Card</span>
            </li>
            
        </ul>
        
        
        
        
    </div>
  )
}

export default TopMenu
