import {
  ChevronDownIcon,
  PauseIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default () => {
  return (
    <>
      <TopSection />
      <NoticeSection />
      <section className="bg-emerald-950/90">
        <div className="mx-auto max-w-250 flex py-8 text-white">
          <Image
            src={"/rewards-logo.png"}
            alt="rewards-logo.png"
            width={180}
            height={180}
          ></Image>
          <div>
            <h2 className="text-[1.75rem]">
              스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
            </h2>
            <p>
              스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.
              스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
            </p>
            <p>
              회원 가입 후, 스타벅스 모바일 카드를 "나에게 선물하기"로
              구매하시고, 편리하게 등록하세요! 카드를 등록하여 스타벅스 리워드
              회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
            </p>
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
              className="appearAnimate opacity-0"
              src={"/2026_christmasPh1_top_slogan_261015.png"}
              alt="2026_christmasPh1_top_slogan_261015"
              style={{ objectFit: "cover" }}
              fill
            ></Image>
          </div>
          <button
            className={clsx(
              "hover:underline border-2 border-white rounded-md px-4 py-1 text-white w-35 cursor-pointer hover:bg-white hover:text-red-600 transition-colors duration-500 ease-in-out",
              "opacity-0 appearAnimate",
            )}
            style={{ animationDelay: "3s" }}
          >
            자세히 보기
          </button>
        </div>
        <div className="w-full flex">
          <div className="h-[56%] aspect-297/477 pt-[18%]">
            <div className="absolute h-[56%] aspect-280/308">
              <Image
                className="opacity-0 appearAnimate"
                src={"/2026_christmasPh1_top_drink01_261015.png"}
                alt="2026_christmasPh1_top_drink01_261015.png"
                style={{ animationDelay: "0.6s" }}
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[56%] aspect-297/477 pt-[14%]">
            <div className="absolute h-[48%] aspect-330/308">
              <Image
                className="opacity-0 appearAnimate"
                src={"/2026_christmasPh1_top_drink02_261015.png"}
                alt="2026_christmasPh1_top_drink02_261015.png"
                style={{ animationDelay: "1.2s" }}
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[60%] aspect-297/477 pt-[14%]">
            <div className="absolute h-[48%] aspect-340/308">
              <Image
                className="opacity-0 appearAnimate"
                src={"/2026_christmasPh1_top_drink03_261015.png"}
                alt="2026_christmasPh1_top_drink03_261015.png"
                style={{ animationDelay: "1.8s" }}
                fill
              ></Image>
            </div>
          </div>
          <div className="h-[56%] aspect-297/477 pt-[22%]">
            <div className="absolute h-[48%] aspect-330/308">
              <Image
                className="opacity-0 appearAnimate"
                src={"/2026_christmasPh1_top_drink04_261015.png"}
                alt="2026_christmasPh1_top_drink04_261015.png"
                style={{ animationDelay: "2.4s" }}
                fill
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NoticeSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, axis: "y", align: "center", watchDrag: false },
    [Autoplay()],
  );
  const [emblaRefX, emblaApiX] = useEmblaCarousel(
    { loop: true, align: "center", watchDrag: false },
    [Autoplay()],
  );
  const [isOpen, SetIsOpen] = useState(false);
  const slideItemList = [
    "개인정보처리방침 개정 안내",
    "사이렌 오더/딜리버스 음료 기본 설정 변경 안내 (ICED → HOT)",
    "개인정보처리방침 개정 안내",
    "시스템 개선 및 서비스 점검 안내",
    "스타벅스 카드 이용약관 개정 안내",
  ];

  const [activeNum, setActiveNum] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!emblaApiX) return;
    const onSelect = () => setActiveNum(emblaApiX.selectedScrollSnap);
    const onAutoPlay = () => setIsAutoplay(true);
    const offAutoPlay = () => setIsAutoplay(false);

    emblaApiX.on("select", onSelect);
    emblaApiX.on("autoplay:play", onAutoPlay);
    emblaApiX.on("autoplay:stop", offAutoPlay);

    onSelect();
    setIsAutoplay(emblaApiX?.plugins().autoplay.isPlaying() ?? false);

    return () => {
      emblaApiX.off("select", onSelect);
      emblaApiX.off("autoplay:play", onAutoPlay);
      emblaApiX.off("autoplay:stop", offAutoPlay);
    };
  }, [emblaApiX]);
  return (
    <section>
      <div
        className="relative"
        style={{
          background: "linear-gradient(90deg, #111 50%, #f6f5ef 50% 100%",
        }}
      >
        <div className="flex max-w-320 w-full py-4 mx-auto text-white bg-linear-[90deg,#111_57%,#f6f5ef_57%_100%]">
          <div className="w-[57%] flex items-end pl-20">
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
          <div className="w-[43%] flex items-center justify-end pr-28">
            <button
              className="flex items-center cursor-pointer gap-16"
              onClick={() => {
                SetIsOpen((v) => !v);
              }}
            >
              <span className="text-lg text-black font-semibold">
                스타벅스 프로모션
              </span>
              <span className="block w-8 border rounded-full aspect-square text-black px-0.5 pt-0.5">
                <ChevronDownIcon
                  strokeWidth={3}
                  className={clsx(isOpen && "rotate-180")}
                />
              </span>
            </button>
          </div>
        </div>
        <motion.div
          className="bg-[#f6f5ef] overflow-hidden"
          initial={{ height: 0 }}
          animate={isOpen ? { height: "40rem" } : { height: 0 }}
        >
          <div className="h-130 bg-[#f6f5ef] mt-10">
            <div className={"overflow-hidden"} ref={emblaRefX}>
              <ul className="flex h-130">
                {[
                  "YX52Xh_20261021150546062.jpg",
                  "RjbBDh_20261026081626419.jpg",
                  "YX52Xh_20261021150546062.jpg",
                  "RjbBDh_20261026081626419.jpg",
                ].map((v, idx) => (
                  <li
                    className={clsx(
                      "relative grow-0 shrink-0 basis-[50%] min-w-0 mr-4",
                      activeNum === idx ? "opacity-100" : "opacity-60",
                    )}
                    key={idx}
                  >
                    <Image src={`/${v}`} alt={v} fill></Image>
                    <Link
                      href={"/"}
                      className={clsx(
                        "absolute bottom-0 left-1/2 translate-x-[-50%]",
                        "hover:underline border-2 border-black rounded-sm px-6 py-1 text-black text-sm cursor-pointer hover:bg-black hover:text-white transition-colors duration-500 ease-in-out hover:font-bold",
                      )}
                    >
                      자세히 보기
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-center h-4 mt-6 mb-10 items-center gap-2">
            <button
              onClick={() => {
                emblaApiX?.plugins().autoplay.isPlaying()
                  ? emblaApiX?.plugins().autoplay.stop()
                  : emblaApiX?.plugins().autoplay.play();
              }}
              className="w-4 aspect-square text-gray-400 cursor-pointer"
            >
              {isAutoplay ? (
                <PauseIcon strokeWidth={3} />
              ) : (
                <PlayIcon fill="lab(65.9269% -.832707 -8.17473)" />
              )}
            </button>
            <button
              onClick={() => {
                if (activeNum % 2 === 0) return;
                emblaApiX?.scrollPrev();
                emblaApiX?.plugins().autoplay.stop();
              }}
              className={clsx(
                "border border-[3px] border-gray-400 bg-gray-400 rounded-full w-3 grow-0 shrink-0 aspect-square cursor-pointer",
                activeNum % 2 === 0
                  ? "bg-transparent border-green-700"
                  : "border-gray-400",
              )}
            ></button>
            <button
              onClick={() => {
                if (activeNum % 2 === 1) return;
                emblaApiX?.scrollNext();
                emblaApiX?.plugins().autoplay.stop();
              }}
              className={clsx(
                "border border-[3px] bg-gray-400 rounded-full w-3 grow-0 shrink-0 aspect-square cursor-pointer",
                activeNum % 2 === 1
                  ? "bg-transparent border-green-700"
                  : "border-gray-400",
              )}
            ></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
