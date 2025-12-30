import Link from "next/link";
import Image from "next/image";

const LogoBlock = () => {
    return (<Link href="/" className="flex flex-row gap-3 item-center cursor-pointer">
        <div className="relative w-20 h-14">
            <Image src="/icons-header/icon-logo.svg" alt="Logo" fill sizes="100vw " />
        </div>

    </Link>);
}
export default LogoBlock;