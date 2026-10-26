import Image from "next/image";
import Link from "next/link";

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

  return (
    <header className="w-full bg-orange-50">
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
        <div className="flex flex-col">
          <ul className="flex justify-end">
            {[
              "Sign In",
              "My Starbucks",
              "Customer",
              "Service & Ideas",
              "Find a Store",
            ].map((v, idx) => {
              return (
                <li
                  className={"px-2 pt-1 pb-2 text-sm hover:underline"}
                  key={idx}
                >
                  <Link href={"/"}>{v}</Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex h-full">
            {menuItems.map((item, idx) => (
              <li className="px-4" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
