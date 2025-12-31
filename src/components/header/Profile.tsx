import Image from "next/image";
import avatar from "../../../public/images/graphics/avatar.png";
import iconArrowDown from "../../../public/icons-header/icon-arrow-down.svg";
const Profile = () => {
  return (
    <div className="cursor-pointer ml-6 p-2 flex flex-1 justify-end items-center gap-2.5">
      <Image src={avatar} alt="Your profile" width={40} height={40} className="object-contain min-w-10 min-h-10" />
      <p className="hidden xl:block cursor-pointer p-2.5">Maro</p>
      <button className="hidden xl:block cursor-pointer p-2">
        <Image src={iconArrowDown} alt="Expand profile options" width={24} height={24} className="object-contain" sizes="24px" />
      </button>
    </div>
  )
}

export default Profile
