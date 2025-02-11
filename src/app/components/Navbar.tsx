import Image from "next/image";
import { paperclipLogoSmall } from "@/utils/assets";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-3 py-2 shadow-md bg-white rounded-[100px] fixed top-10 z-50 mx-auto">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={paperclipLogoSmall}
          alt="Paperclip Logo"
          width={120}
          height={40}
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-1 mx-2 md:mx-6 font-poppins font-bold text-[14px] leading-[16px] text-gray-700">
        <span className="px-2">Seller</span>
        <span className="px-2">Buyer</span>
        <span className="px-2">FAQ</span>
      </div>

      {/* Pro Badge */}
      <div className="flex items-center space-x-2 bg-[#FFF2F3] px-3 py-1 rounded-[100px] font-poppins font-bold text-[14px] leading-[16px]">
        <span className="text-gray-700 font-semibold">Pro</span>
        <span className="bg-red-500 text-white px-2 py-0.5 rounded-md text-xs font-bold">
          FREE
        </span>
      </div>
    </nav>
  );
}
