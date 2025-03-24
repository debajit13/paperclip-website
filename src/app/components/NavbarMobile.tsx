"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { paperClipLogo, paperclipLogoSmall } from "@/utils/assets";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center p-4 pt-10">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full bg-white shadow-md rounded-full px-4 py-2">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center">
            <Image
              src={paperClipLogo}
              alt="Paperclip Logo"
              width={100}
              height={40}
            />
          </div>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-full bg-red-100 text-[#F71D3B]"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg relative">
            <div className="flex justify-between items-center">
              {/* Logo & Title */}
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                <div className="flex items-center">
                  <Image
                    src={paperClipLogo}
                    alt="Paperclip Logo"
                    width={120}
                    height={40}
                  />
                </div>
              </Link>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Menu Options */}
            <div className="mt-4 text-lg space-y-2">
              {/* <p className="text-black text-left font-semibold font-poppins text-[24px] leading-[36px]">
                Seller
              </p>
              <p className="text-black text-left font-semibold font-poppins text-[24px] leading-[36px]">
                Buyer
              </p> */}
              <Link
                onClick={() => setIsOpen(false)}
                href={"/get-started"}
                className="flex items-center gap-2"
              >
                <div className="flex items-center gap-2 font-poppins text-[24px] leading-[36px]">
                  <p className="text-black font-semibold text-left">Pro</p>
                  <span className="bg-red-100 text-[#F71D3B] text-xs px-2 py-1 rounded-full">
                    FREE
                  </span>
                </div>
              </Link>
            </div>

            {/* Footer */}
            <p className="font-poppins text-[12px] leading-[24px] text-gray-500 mt-6">
              Crafted with ❤️ from London
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
