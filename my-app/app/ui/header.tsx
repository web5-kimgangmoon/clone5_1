import Image from "next/image";

export default () => {
  return (
    <header className="w-full bg-orange-50">
      <div className="flex justify-between h-30 max-w-275 w-full mx-auto">
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
          <ul className="flex">
            {[
              "Sign In",
              "My Starbucks",
              "Customer",
              "Service & Ideas",
              "Find a Store",
            ].map((v, idx) => {
              return (
                <li className={"px-2 text-sm"} key={idx}>
                  {v}
                </li>
              );
            })}
          </ul>
          <ul className="flex">
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>ESG</li>
            <li>STARBUCKS REWARDS</li>
            <li>CORPORATE SALES</li>
            <li>WHAT'S NEW</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
