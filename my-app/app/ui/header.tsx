import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, useState } from "react";

export default () => {
  const menuItems = [
    {
      topTitle: "COFFEE",
      linkitems: [
        {
          title: "커피",
          list: [
            "스타벅스 원두",
            "스타벅스 비아",
            "스타벅스 오리가미",
            "나와 어울리는 커피",
          ],
        },
        {
          title: "커피 이야기",
          list: [
            "농장에서 우리의 손으로",
            "최상의 아라비카 원두",
            "스타벅스 로스트 스펙트럼",
            "스타벅스 디카페인",
          ],
        },
        {
          title: "스타벅스 리저브",
          list: ["RESERVE MAGAZINE"],
        },
        {
          title: "에스프레소 음료",
          list: [
            "도피오",
            "에스프레소 마키아또",
            "아메리카노",
            "마키아또",
            "카푸치노",
            "라떼",
            "모카",
          ],
        },
        {
          title: "최상의 커피를 즐기는 법",
          list: ["커피 프레스", "푸어 오버", "아이스 푸어 오버", "커피 메이커"],
        },
      ],
    },
    {
      topTitle: "MENU",
      linkitems: [
        {
          title: "음료",
          list: [
            "콜드 브루",
            "브루드 커피",
            "에스프레소",
            "프라푸치노",
            "블렌디드",
            "스타벅스 리프레셔",
            "스타벅스 피지오",
            "티(티바나)",
            "기타 제조 음료",
            "스타벅스 주스(병음료)",
          ],
        },
        {
          title: "푸드",
          list: [
            "브레드",
            "케이크",
            "샌드위치 & 샐러드",
            "따뜻한 푸드",
            "과일 & 요거트",
            "스낵 & 미니 디저트",
            "아이스크림",
          ],
        },
        {
          title: "상품",
          list: [
            "머그",
            "글라스",
            "플라스틱 텀블러",
            "스테인리스 텀블러",
            "보온병",
            "액세서리",
            "선물세트",
            "커피 용품",
            "패키지 티(티바나)",
            "시럽",
          ],
        },
        {
          title: "카드",
          list: ["실물카드", "스타벅스 모바일 카드"],
        },
        {
          title: "메뉴 이야기",
          list: ["스타벅스 티바나", "스타벅스 콜드 브루"],
        },
      ],
    },
    {
      topTitle: "STORE",
      linkitems: [
        {
          title: "매장 찾기",
          list: ["퀵 검색", "지역 검색"],
        },
        {
          title: "드라이브 스루 매장",
          list: [],
        },
        {
          title: "스타벅스 리저브 매장",
          list: [],
        },
        {
          title: "커뮤니티 스토어 매장",
          list: [],
        },
      ],
    },
    {
      topTitle: "ESG",
      linkitems: [
        {
          title: "커뮤니티",
          list: [
            "커뮤니티 스토어",
            "청년 지원 프로그램",
            "국가유산 지킴이",
            "재능기부 카페",
            "희망배달 캠페인",
          ],
        },
        {
          title: "친환경",
          list: ["친환경 활동", "다회용컵 사용 캠페인", "커피박 재활용"],
        },
        {
          title: "윤리 구매",
          list: ["윤리적 원두 구매", "공정무역"],
        },
        {
          title: "ESG 정보",
          list: [],
        },
      ],
    },
    {
      topTitle: "STARBUCKS REWARDS",
      linkitems: [
        {
          title: "스타벅스 리워드",
          list: [
            "스타벅스 리워드 소개",
            "등급 및 혜택",
            "스타벅스 별",
            "자주 하는 질문",
          ],
        },
        {
          title: "스타벅스 카드",
          list: [
            "스타벅스 카드 소개",
            "스타벅스 카드 갤러리",
            "자주 하는 질문",
          ],
        },
        {
          title: "스타벅스 모바일 카드",
          list: [
            "스타벅스 모바일 카드 소개",
            "이용안내",
            "선물하기",
            "자주 하는 질문",
          ],
        },
      ],
    },
    {
      topTitle: "CORPORATE SALES",
      linkitems: [
        {
          title: "단체 및 기업 구매 안내",
          list: [
            "MD 상품",
            "실물카드",
            "스타벅스 모바일 카드(MMS)",
            "스타벅스 모바일 카드(BULK)",
          ],
        },
        {
          title: "단체 주문 배달 안내",
          list: ["단체 주문 배달 안내", "단체 주문 신청", "신청 내역 조회"],
        },
      ],
    },
    {
      topTitle: "WHAT'S NEW",
      linkitems: [
        {
          title: "이벤트",
          list: ["전체", "스타벅스 카드", "스타벅스 리워드", "온라인"],
        },
        {
          title: "뉴스",
          list: [
            "전체",
            "상품 출시",
            "스타벅스와 문화",
            "스타벅스 사회공헌",
            "스타벅스 카드출시",
          ],
        },
        {
          title: "매장별 이벤트",
          list: ["일반 매장", "신규 매장"],
        },
        {
          title: "공지사항",
          list: [],
        },
        {
          title: "월페이퍼",
          list: [],
        },
      ],
    },
  ];

  const [isClick, setClick] = useState(false);
  const [menuHover, setMenuHover] = useState<number>(-1);
  return (
    <header className="w-full bg-orange-50 relative z-10">
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
                  menuHover == idx && "underline text-green-600 bg-zinc-800",
                )}
                key={idx}
                onHoverStart={() => setMenuHover(idx)}
              >
                <Link
                  href={"/"}
                  className="flex items-center w-full h-full px-4"
                >
                  {item.topTitle}
                </Link>
                {menuHover == idx && (
                  <motion.div
                    className="absolute left-0 top-[100%] w-screen bg-zinc-800 overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    transition={{ ease: "easeOut" }}
                  >
                    <ul className="grid grid-cols-5 max-w-275 w-full mx-auto py-4 px-4">
                      {item.linkitems.map((v, idx) => (
                        <li key={idx}>
                          <h2 className="text-white pb-2">
                            <Link className="hover:underline" href={"/"}>
                              {v.title}
                            </Link>
                          </h2>
                          {v.list.map((menuLink, idx) => (
                            <div key={idx}>
                              <Link
                                className="text-sm hover:underline text-gray-400"
                                href={"/"}
                              >
                                {menuLink}
                              </Link>
                            </div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </header>
  );
};
