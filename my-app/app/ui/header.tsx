import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default () => {
  const menuItems = [
    "COFFEE",
    "MENU",
    "STORE",
    "ESG",
    "STARBUCKS REWARDS",
    "CORPORATE SALES",
    "WHAT'S NEW",
  ];

  const [isClick, setClick] = useState(false);
  const [menuHover, setMenuHover] = useState<number>(-1);
  return (
    <header className="w-full bg-orange-50 relative">
      <div className="flex justify-between h-30 max-w-275 w-full mx-auto pt-2">
        <div className="flex justify-start items-center h-30">
          <Image
            height={75}
            width={75}
            src={"/logo.png"}
            alt="logo.png"
            className="block"
          ></Image>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex justify-end [&>:nth-child(5)]:after:content-none">
            {[
              "Sign In",
              "My Starbucks",
              "Customer",
              "Service & Ideas",
              "Find a Store",
            ].map((v, idx) => {
              return (
                <li key={idx}>
                  <Link
                    className={clsx(
                      "relative px-4 pt-1 pb-2 text-sm hover:underline",
                      "after:absolute after:top-[50%] after:right-0 after:translate-y-[-50%] after:h-3 after:border-r after:border-gray-300 after:content-['']",
                    )}
                    href={"/"}
                  >
                    {v}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                className="flex border-gray-300 border rounded-sm px-1 py-0.5 bg-white cursor-pointer "
                onClick={() => setClick(true)}
              >
                <motion.input
                  className={clsx("text-sm")}
                  initial={{ width: 0 }}
                  animate={
                    isClick && { width: "10rem", paddingInline: "0.5rem" }
                  }
                  placeholder="통합검색"
                  name="find"
                />
                <MagnifyingGlassIcon className="w-5 aspect-square" />
              </button>
            </li>
          </ul>
          <motion.ul
            className="flex h-full"
            onHoverEnd={() => setMenuHover(-1)}
          >
            {menuItems.map((item, idx) => (
              <motion.li
                className={clsx(
                  menuHover == idx && "underline text-green-600 bg-gray-900",
                )}
                key={idx}
                onHoverStart={() => setMenuHover(idx)}
              >
                <Link
                  href={"/"}
                  className="flex items-center w-full h-full px-4"
                >
                  {item}
                </Link>
                <motion.div
                  className="absolute left-0 top-[100%] w-screen bg-black"
                  initial={{ height: 0 }}
                  animate={
                    menuHover == idx ? { height: "10rem" } : { height: 0 }
                  }
                  transition={{ ease: "easeOut" }}
                ></motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </header>
  );
};
