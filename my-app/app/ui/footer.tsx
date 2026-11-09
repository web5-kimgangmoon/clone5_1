import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default () => {
  const menuLinkList = [
    {
      title: "COMPANY",
      list: [
        "한눈에 보기",
        "스타벅스 사명",
        "스타벅스 소개",
        "컴플라이언스",
        "국내 뉴스룸",
        "세계의 스타벅스",
        "글로벌 뉴스룸",
      ],
    },
    {
      title: "CORPORATE SALES",
      list: ["단체 및 기업 구매 안내", "단체 주문 배달 안내"],
    },
    {
      title: "PARTNERSHIP",
      list: ["신규 입점 제의", "협력 고객사 등록신청", "중개업체 확인"],
    },
    {
      title: "ONLINE COMMUNITY",
      list: ["페이스북", "트위터", "유튜브", "인스타그램"],
    },
    {
      title: "RECRUIT",
      list: ["채용 소개", "채용 지원하기"],
    },
  ];

  const logoList = [
    ["footer_award_2211_01.jpg", 140],
    ["footer_award_2211_02.jpg", 141],
    ["footer_award_2211_03.jpg", 163],
    ["footer_award_2211_04.jpg", 228],
    ["footer_award_2211_05.jpg", 228],
    ["footer_award_2211_06.jpg", 170],
    ["footer_award_2211_07.jpg", 111],
  ];

  const footerLinks = [
    "개인정보처리방침",
    "영상정보처리기기 운영관리 방침",
    "홈페이지 이용약관",
    "위치정보 이용약관",
    "스타벅스 카드 이용약관",
    "신세계 유니버스 클럽 이용약관",
    "비회원 이용약관",
    "My DT Pass 서비스 이용약관",
    "윤리경영 핫라인",
  ];

  return (
    <footer className="bg-taupe-800">
      <section className="h-60 pt-10 mb-20">
        <nav className="w-full max-w-290 mx-auto grid grid grid-cols-5 text-white text-sm bg-[url(/footer_logo.png)] bg-no-repeat bg-right-top">
          {menuLinkList.map((v, idx) => {
            return (
              <div key={idx}>
                <h4 className="mb-3">{v.title}</h4>
                <ul>
                  {v.list.map((v, idx) => (
                    <li key={idx} className="mt-1">
                      <Link className="hover:underline" href="/">
                        {v}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </section>
      <section className="bg-[#282828]">
        <nav className="max-w-290 h-20 mx-auto">
          <ul className="h-full flex items-center">
            {logoList.map((v, idx) => (
              <li key={idx}>
                <Link href={"/"}>
                  <Image
                    src={"/" + v[0]}
                    alt={String(v[0])}
                    width={Number(v[1])}
                    height={40}
                  ></Image>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="">
        <nav className="max-w-290 h-40 mx-auto">
          <ul className="flex text-xs text-gray-300">
            {footerLinks.map((v, idx) => {
              return (
                <li key={idx}>
                  <Link
                    href={"/"}
                    className={clsx(
                      (idx === 0 || idx === 3) && "text-green-400 font-bold",
                    )}
                  >
                    {v}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </footer>
  );
};
