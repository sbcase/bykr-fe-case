"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" z-10 bg-white overflow-hidden lg:bg-off-yellow top-0">
      <section className="p-4 lg:px-20 lg:py-8 lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-between items-center text-dark-brown">
          <h1 className="text-[32px] font-bold leading-9">{title}</h1>
          <button
            type="button"
            className="lg:hidden lg:invisible appearance-none outline-offset-4"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src="/header/icon/menu-scale.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>
        </div>
        {menuOpen && (
          <nav className="fixed top-0 right-0 z-50 flex flex-col items-center h-screen w-full gap-4 bg-white py-12 transition-all duration-300">
            <button
              type="button"
              className="appearance-none"
              onClick={() => setMenuOpen(false)}
            >
              <span className="absolute top-8 right-12 block w-0.5 h-7 rotate-45 bg-black" />
              <span className="absolute top-8 right-12 block w-0.5 h-7 -rotate-45 bg-black" />
            </button>
            {links?.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className={
                  link.isButton
                    ? "px-8 py-4 text-xl font-medium text-dark-brown bg-transparent border-2 border-gray-800 rounded-md"
                    : "text-xl font-medium text-dark-brown py-1"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
        <nav className="hidden lg:flex lg:gap-6 lg:items-center">
          {links?.map((link, index) =>
            link.isButton ? (
              <Link key={index} href={link.url}>
                <Button
                  label={link.label}
                  onClick={() => {}}
                  size={link.buttonProps?.size || "md"}
                  variant={link.buttonProps?.variant || "primary"}
                  disabled={link.buttonProps?.disabled || false}
                />
              </Link>
            ) : (
              <Link
                key={index}
                href={link.url}
                className="text-light-brown font-medium leading-6"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </section>
    </header>
  );
};

export default Header;
