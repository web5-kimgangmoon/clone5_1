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
import { useScrollCheck } from "../library/scrollCheck";

export default () => {
  return (
    <>
      <TopSection />
      <NoticeSection />
      <EventSection />
      <ChristmasBlendSection />
      <ChristmasBoxSection />
      <CardSection />
      <AutumnSection />
      <StoreFindSection />
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
    const onSelect = () => setActiveNum(emblaApiX.selectedScrollSnap());
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
                      "relative grow-0 shrink-0 basis-[40%] min-w-0 mr-4",
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

const EventSection = () => {
  return (
    <section className="bg-emerald-950">
      <div className="flex gap-8 mx-auto max-w-250 py-8 text-white">
        <Link href={"/"}>
          <Image
            src={"/rewards-logo.png"}
            alt="rewards-logo.png"
            width={180}
            height={180}
          ></Image>
        </Link>
        <div className="grow-1">
          <div className="flex justify-between items-end border-b border-gray-500 pb-2">
            <div>
              <h2 className="text-[1.75rem] pb-2">
                스타벅스만의 특별한 혜택, <strong>스타벅스 리워드</strong>
              </h2>
              <p className="text-lg">
                <strong>스타벅스 회원이세요?</strong> 로그인을 통해 나만의
                리워드를 확인해보세요.
                <br />
                <strong>스타벅스 회원이 아니세요?</strong> 가입을 통해 리워드
                혜택을 즐기세요.
              </p>
            </div>
            <div className="pb-4 flex">
              <Link
                className="px-5 py-2 bg-emerald-800 rounded-sm hover:underline mr-3 text-sm"
                href={"/"}
              >
                회원가입
              </Link>
              <Link
                className="flex items-center px-5 py-1 border-2 border-white rounded-sm hover:underline text-sm"
                href={"/"}
              >
                로그인
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="pt-3">
                회원 가입 후, 스타벅스 모바일 카드를
                <strong>
                  "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
                </strong>
                <br />
                카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
                무료 음료쿠폰을 드립니다!
              </p>
            </div>
            <div>
              <Link
                href={"/"}
                className="text-sm hover:underline border border-white border-2 rounded-sm px-1 py-2"
              >
                스타벅스 모바일 카드 선물하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChristmasBlendSection = () => {
  const { targetRef, isAnimateTarget } = useScrollCheck();

  return (
    <section
      className="bg-[url(/2026_christmasPh1_promotion_bg_261015.jpg)] bg-cover bg-no-repeat bg-center py-4 h-140 overflow-hidden"
      ref={targetRef}
    >
      <div className="flex w-full mx-auto max-w-220">
        <div className="w-full">
          <div className="relative h-full max-h-[497px] aspect-396/497 grow-0 shrink-0">
            <motion.div
              className="absolute top-1/7 w-full h-full"
              initial={{ opacity: 0, left: "-100vw" }}
              animate={
                isAnimateTarget
                  ? { opacity: 1, left: "3rem" }
                  : { opacity: 0, left: "-100vw" }
              }
              transition={{
                duration: isAnimateTarget ? 1.5 : 5,
                ease: "easeOut",
              }}
            >
              <Image
                src={"/2026_christmasPh1_promotion_beans_261015.png"}
                alt="2026_christmasPh1_promotion_beans_261015.png"
                fill
              ></Image>
            </motion.div>
          </div>
        </div>
        <div className="mt-25 mb-30 w-full relative">
          <motion.div
            className="absolute w-full h-full"
            initial={{ opacity: 0, left: "100vw" }}
            animate={
              isAnimateTarget
                ? { opacity: 1, left: "-6rem" }
                : { opacity: 0, left: "100vw" }
            }
            transition={{
              duration: isAnimateTarget ? 1.7 : 5,
              ease: "easeOut",
            }}
          >
            <div className="relative h-full max-h-[206px] aspect-543/206">
              <Image
                src={"/2026_christmasPh1_promotion_txt_261015.png"}
                alt="2026_christmasPh1_promotion_txt_261015.png"
                fill
              ></Image>
            </div>
            <button
              className={clsx(
                "hover:underline border-2 border-white rounded-md px-5 py-1 text-white cursor-pointer hover:bg-white hover:text-red-600 transition-colors duration-500 ease-in-out text-sm",
                "mt-10",
              )}
            >
              자세히 보기
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ChristmasBoxSection = () => {
  const { targetRef, isAnimateTarget } = useScrollCheck();
  return (
    <section
      className="bg-[url(/261021_pc_reserve_bg.jpg)] overflow-hidden"
      ref={targetRef}
    >
      <div className="flex relative mx-auto w-full max-w-270 h-100">
        <div className="absolute top-0 left-0 mt-20 ml-10 w-full max-w-[539px] z-1">
          <div className="relative w-full aspect-539/160">
            <Image
              src={"/261021_pc_reserve_title.png"}
              alt="261021_pc_reserve_title"
              fill
            ></Image>
          </div>
          <div className="w-max mx-auto pt-15">
            <button
              className={clsx(
                "hover:underline border-2 border-yellow-500 rounded-md px-6 py-[0.35rem] text-yellow-500 w-max cursor-pointer hover:bg-yellow-500 hover:text-white transition-colors duration-500 ease-in-out",
                "ml-[68%]",
              )}
            >
              자세히 보기
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full">
          <motion.div
            className="absolute top-0 right-[-450px] w-[2000px] aspect-[5]"
            initial={{ opacity: "0%" }}
            animate={isAnimateTarget && { opacity: "100%" }}
            transition={{
              ease: "linear",
              duration: 1.7,
            }}
          >
            <Image
              src={"/261021_pc_reserve_coffee.png"}
              alt="261021_pc_reserve_coffee.png"
              fill
            ></Image>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CardSection = () => {
  const { targetRef, isAnimateTarget } = useScrollCheck();

  return (
    <section
      className="relative bg-[url(/2026_christmasPh1_pick_bg_261015.jpg)] h-[800px] bg-fixed bg-no-repeat bg-position-[bottom,center] overflow-hidden"
      style={{ backgroundSize: "auto 87%" }} // 스타벅스표 코드. 전체 height=800px, 헤더=120px, 이미지가 87%일 경우 뷰포트(내 노트북 기준 945px)를 기준으로=822.15px을 차지한다. background-size에 따라, 120.85px이 본래 빈 배경이 되어야하지만, 헤더가 120px만큼 가려주고, 0.85px은 렌더링 과정에서 반올림되거나 눈에 띄지 않게 된다.
      // 이는 해당 고찰 근거. W3C 문서에 기록되어 있다.
      // If background images are specified, this property specifies whether they are fixed with regard to the viewport (fixed) or scroll along with the box (scroll) or its contents (local). The property’s value is given as a comma-separated list of <attachment> keywords where
      // <attachment> = scroll | fixed | local
      ref={targetRef}
    >
      <div className="mx-auto flex items-center justify-end max-w-360 h-full">
        <div className="flex flex-col justify-center items-end">
          <div className="relative w-[257px] aspect-257/202">
            <motion.div
              className="absolute w-full top-0"
              initial={{ left: "-50vw", opacity: 0 }}
              animate={
                isAnimateTarget
                  ? { left: "4vw", opacity: "100%" }
                  : { left: "-50vw", opacity: 0 }
              }
              transition={
                isAnimateTarget
                  ? { duration: 1.8, ease: "circOut" }
                  : { duration: 4 }
              }
            >
              <Image
                src={"/2025_january_pick_txt01.png"}
                alt="2025_january_pick_txt01"
                width={257}
                height={202}
              ></Image>
            </motion.div>
          </div>
          <div className="relative w-[363px] aspect-363/153 mt-15">
            <motion.div
              className="absolute w-full top-0"
              initial={{ left: "-50vw", opacity: 0 }}
              animate={
                isAnimateTarget
                  ? { left: "4vw", opacity: "100%" }
                  : { left: "-50vw", opacity: 0 }
              }
              transition={
                isAnimateTarget
                  ? { duration: 2, ease: "circOut" }
                  : { duration: 4 }
              }
            >
              <Image
                src={"/2025_january_pick_txt02.png"}
                alt="2025_january_pick_txt02"
                width={363}
                height={153}
              ></Image>
            </motion.div>
          </div>
          <div className="relative mt-10 h-9 w-35">
            <motion.button
              className={clsx(
                "hover:underline border-2 border-white rounded-md px-4 py-1 text-white w-35 h-9 cursor-pointer hover:bg-white hover:text-black transition-colors duration-500 ease-in-out",
                "absolute top-0 left-[3vw]",
              )}
              initial={{ opacity: 0 }}
              animate={isAnimateTarget ? { opacity: 1 } : { opacity: 0 }}
              transition={
                isAnimateTarget
                  ? { duration: 1.2, ease: "circOut" }
                  : { duration: 4 }
              }
            >
              자세히 보기
            </motion.button>
          </div>
        </div>
        <div className="relative w-[953px] aspect-953/615">
          <div className="absolute top-0 left-[6vw] w-full">
            <Image
              src={"/2026_christmasPh1_pick_img_261015.png"}
              alt="2026_christmasPh1_pick_img_261015.png"
              width={953}
              height={615}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

const AutumnSection = () => {
  const { targetRef, isAnimateTarget } = useScrollCheck();
  return (
    <section
      className="bg-[url(/reserve_bg_pc.png)] bg-position-[bottom,center] bg-cover bg-no-repeat"
      style={{ backgroundSize: "auto 353px" }}
      ref={targetRef}
    >
      <div className="max-w-250 h-[400px] flex mx-auto justify-end">
        <div className="relative flex flex-col justify-center items-center h-full">
          <div className="relative w-[588px] aspect-588/96">
            <div className="absolute w-full h-full top-0 left-4">
              <Image
                src={"/reserve_text_pc.png"}
                alt="reserve_text_pc.png"
                fill
              ></Image>
            </div>
          </div>
          <button
            className={clsx(
              "hover:underline border-2 border-black rounded-md py-1 text-black w-30 cursor-pointer hover:bg-black hover:text-white transition-colors duration-500",
              "absolute bottom-20 left-[50%] translate-x-[-3.2rem]",
            )}
          >
            자세히 보기
          </button>
        </div>
        <motion.div
          initial={{ opacity: "0%" }}
          animate={isAnimateTarget && { opacity: "100%" }}
          transition={{
            ease: "linear",
            duration: 1.7,
          }}
        >
          <Image
            src={"/reserve_visual_pc.png"}
            alt="reserve_visual_pc.png"
            width={348}
            height={378}
          ></Image>
        </motion.div>
      </div>
    </section>
  );
};

const StoreFindSection = () => {
  const { targetRef, isAnimateTarget } = useScrollCheck();
  return (
    <section
      className="relative bg-[url(/store_bg.jpg)] overflow-hidden"
      ref={targetRef}
    >
      <Image
        className="absolute top-[-61px] left-[50%] translate-x-[-171px]"
        src={"/store_exp_img03.png"}
        alt="store_exp_img03.png"
        width={343}
        height={132}
      ></Image>
      <div className="relative flex justify-between max-w-230 h-[400px] mx-auto mb-10">
        <Image
          className="absolute bottom-[-2.5rem] left-[100%] translate-x-[-105px]"
          src={"/store_exp_img04.png"}
          alt="store_exp_img04.png"
          width={230}
          height={102}
        ></Image>
        <motion.div
          className="relative"
          initial={{ opacity: "0%" }}
          animate={isAnimateTarget && { opacity: "100%" }}
          transition={{
            ease: "linear",
            duration: 1.7,
          }}
        >
          <Image
            src={"/221212_main_story_1.png"}
            alt="221212_main_story_1.png"
            width={363}
            height={310}
          ></Image>
          <Image
            className="absolute top-[50%] left-[50%]"
            src={"/221212_main_story_2.png"}
            alt="221212_main_story_2.png"
            width={225}
            height={225}
          ></Image>
        </motion.div>
        <div className="relative flex flex-col justify-center h-full">
          <div className="relative w-[374px] aspect-374/55 mb-4">
            <motion.div
              className="absolute top-0 w-full h-full"
              initial={{ left: "50vw", opacity: "20%" }}
              animate={
                isAnimateTarget
                  ? { left: 0, opacity: "100%" }
                  : { left: "50%", opacity: "20%" }
              }
              transition={{
                ease: "circOut",
                duration: isAnimateTarget ? 1.7 : 5,
              }}
            >
              <Image
                src={"/221212_pc_main_story_txt_1.png"}
                alt="221212_pc_main_story_txt_1.png"
                fill
              ></Image>
            </motion.div>
          </div>
          <div className="relative w-[374px] aspect-374/91">
            <motion.div
              className="absolute top-0 w-full h-full"
              initial={{ left: "50vw", opacity: "20%" }}
              animate={
                isAnimateTarget
                  ? { left: 0, opacity: "100%" }
                  : { left: "50vw", opacity: "20%" }
              }
              transition={{
                ease: "circOut",
                duration: isAnimateTarget ? 2.5 : 5,
              }}
            >
              <Image
                src={"/221212_pc_main_story_txt_2.png"}
                alt="221212_pc_main_story_txt_2.png"
                width={374}
                height={91}
              ></Image>
            </motion.div>
          </div>
          <motion.button
            className={clsx(
              "hover:underline border-2 border-black rounded-sm py-1 text-black w-27 cursor-pointer hover:bg-black hover:text-white transition-colors duration-500",
              "absolute bottom-15 left-0",
            )}
            initial={{ left: "50vw", opacity: "20%" }}
            animate={
              isAnimateTarget
                ? { left: 0, opacity: "100%" }
                : { left: "50vw", opacity: "20%" }
            }
            transition={{
              ease: "circOut",
              duration: isAnimateTarget ? 3 : 5,
            }}
          >
            매장 찾기
          </motion.button>
        </div>
      </div>
    </section>
  );
};
