import Image from "next/image";

export default () => {
  return (
    <div>
      <section className="relative aspect-2000/646 bg-[url(/2026_christmasPh1_top_bg_261015.jpg)] bg-no-repeat bg-cover bg-center">
        <div className="flex max-w-[77vw] w-full mx-auto h-full">
          <div className="flex flex-col items-center gap-4 justify-center h-full">
            <div className="relative aspect-516/181 w-[27vw]">
              <Image
                src={"/2026_christmasPh1_top_slogan_261015.png"}
                alt="2026_christmasPh1_top_slogan_261015"
                style={{ objectFit: "cover" }}
                fill
              ></Image>
            </div>
            <button className="hover:underline border-2 border-white rounded-md px-4 py-1 text-white w-35 cursor-pointer hover:bg-white hover:text-red-600 transition-colors duration-500 ease-in-out">
              자세히 보기
            </button>
          </div>
          <div className="w-full flex">
            <div className="h-1/2 aspect-297/477">
              <div className="absolute h-1/2 aspect-290/308">
                <Image
                  src={"/2026_christmasPh1_top_drink01_261015.png"}
                  alt="2026_christmasPh1_top_drink01_261015.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="h-1/2 aspect-297/477">
              <div className="absolute h-1/2 aspect-290/308">
                <Image
                  src={"/2026_christmasPh1_top_drink01_261015.png"}
                  alt="2026_christmasPh1_top_drink01_261015.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="h-1/2 aspect-297/477">
              <div className="absolute h-1/2 aspect-290/308">
                <Image
                  src={"/2026_christmasPh1_top_drink01_261015.png"}
                  alt="2026_christmasPh1_top_drink01_261015.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="h-1/2 aspect-297/477">
              <div className="absolute h-1/2 aspect-290/308">
                <Image
                  src={"/2026_christmasPh1_top_drink01_261015.png"}
                  alt="2026_christmasPh1_top_drink01_261015.png"
                  fill
                ></Image>
              </div>
            </div>
            <div className="h-1/2 aspect-297/477">
              <div className="absolute h-1/2 aspect-290/308">
                <Image
                  src={"/2026_christmasPh1_top_drink01_261015.png"}
                  alt="2026_christmasPh1_top_drink01_261015.png"
                  fill
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};
