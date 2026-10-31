import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y", align: "center", dragFree: false },
    [Autoplay()],
  );
  const slideItemList = [
    "개인정보처리방침 개정 안내",
    "사이렌 오더/딜리버스 음료 기본 설정 변경 안내 (ICED → HOT)",
    "개인정보처리방침 개정 안내",
    "시스템 개선 및 서비스 점검 안내",
    "스타벅스 카드 이용약관 개정 안내",
  ];
  return (
    <>
      <TopSection />
      <section>
        <div
          className="relative"
          style={{
            background: "linear-gradient(90deg, #111 50%, #f6f5ef 50% 100%",
          }}
        >
          <div className="flex max-w-320 w-full py-4 mx-auto text-white bg-[url(/line_notice_bg.jpg)]">
            <div className="w-182.5 flex items-end pl-20">
              <h3 className="text-lg mr-3 cursor-default font-semibold">
                공지사항
              </h3>
              <div className="grow-1 embla">
                <div
                  className="embla__viewport"
                  ref={emblaRef}
                  style={{ overflow: "hidden", height: "1.35rem" }}
                >
                  <div
                    className="embla__container"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {slideItemList.map((v, idx) => (
                      <div
                        className="embla__slide truncate text-sm"
                        key={idx}
                        style={{ flex: "0 0 100%", minHeight: 0 }}
                      >
                        <Link href="/" className="block w-full hover:underline">
                          {v}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pr-6">
                <Link
                  className="block w-8 aspaect-square border border-white rounded-full p-1"
                  href={"/"}
                >
                  <PlusIcon strokeWidth={"3"} />
                </Link>
              </div>
            </div>
            <div className="w-92.5 flex items-center justify-end">
              <button className="flex items-center cursor-pointer gap-16">
                <span className="text-lg text-black font-semibold">
                  스타벅스 프로모션
                </span>
                <span className="block w-8 border rounded-full aspect-square text-black px-0.5 pt-0.5">
                  <ChevronDownIcon strokeWidth={3} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const TopSection = () => {
  return (
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
          <div className="h-[56%] aspect-297/477 pt-[18%]">
            <div className="absolute h-[56%] aspect-280/308">
              <Image
                src={"/2026_christmasPh1_top_drink01_261015.png"}
                alt="2026_christmasPh1_top_drink01_261015.png"
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[56%] aspect-297/477 pt-[14%]">
            <div className="absolute h-[48%] aspect-330/308">
              <Image
                src={"/2026_christmasPh1_top_drink02_261015.png"}
                alt="2026_christmasPh1_top_drink02_261015.png"
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[60%] aspect-297/477 pt-[14%]">
            <div className="absolute h-[48%] aspect-340/308">
              <Image
                src={"/2026_christmasPh1_top_drink03_261015.png"}
                alt="2026_christmasPh1_top_drink03_261015.png"
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[56%] aspect-297/477 pt-[22%]">
            <div className="absolute h-[48%] aspect-330/308">
              <Image
                src={"/2026_christmasPh1_top_drink04_261015.png"}
                alt="2026_christmasPh1_top_drink04_261015.png"
                fill
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
