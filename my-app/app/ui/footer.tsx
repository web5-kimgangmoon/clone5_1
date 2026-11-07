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
    "footer_award_2211_01_T.jpg",
    "footer_award_2211_02_T.jpg",
    "footer_award_2211_03_T.jpg",
    "footer_award_2211_04_T.jpg",
    "footer_award_2211_05_T.jpg",
    "footer_award_2211_06_T.jpg",
    "footer_award_2211_07_T_02.jpg",
  ];

  return (
    <footer className="bg-taupe-800">
      <section className="h-60 pt-10 mb-20">
        <nav className="w-full max-w-270 mx-auto grid grid grid-cols-5 text-white text-sm bg-[url(/footer_logo.png)] bg-no-repeat bg-right-top">
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
      <section className="h-20 bg-neutral-900">
        <nav className="max-w-270 mx-auto">
          <ul>
            {logoList.map((v, idx) => (
              <li key={idx}>
                <Link href={"/"}>
                  <Image src={"/" + v} alt={v} width={200} height={200}></Image>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="h-40"></section>
    </footer>
  );
};
