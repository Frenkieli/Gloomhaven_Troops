import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* header icon */}
        <link rel="shortcut icon" href='https://frenkieli.github.io/Gloomhaven_Troops/images/icon.png'/>
        {/* 手機用 icon -precomposed 意思是說不要反光*/}
        <link rel="apple-touch-icon-precomposed" sizes="192x192" href='https://frenkieli.github.io/Gloomhaven_Troops/images/icon.png'/>
        <title>冒險紀錄－幽港迷城</title>
        <meta name="author" content="驢子"/>
        <meta name="copyright" content="驢形工作室"/>
        <meta name="name" content="冒險紀錄－幽港迷城"/>
        <meta name="image" content='https://frenkieli.github.io/Gloomhaven_Troops/images/share.jpg'/>
        <meta name="description" content="幽暗港內一群傭兵正默默的活動著，因為各自的利益和生活組成了一個團體進行各種活動。"/>
        <meta property="og:title" content="冒險紀錄－幽港迷城"/>
        <meta property="og:type" content="article"/>
        <meta property="article:section" content="table of contents"/>
        {/* 在fb他只能設定同網域的位置，除非可以驗證該網域的網站 */}
        <meta property="og:url" content="https://www.facebook.com/lyumage"/>
        <meta property="og:image" content='https://frenkieli.github.io/Gloomhaven_Troops/images/share.jpg'/>
        <meta property="og:description" content="幽暗港內一群傭兵正默默的活動著，因為各自的利益和生活組成了一個團體進行各種活動。" />
        <meta property="og:site_name" content="冒險紀錄－幽港迷城" />
        <meta property="fb:app_id" content="674189663950207" />
      </Head>
    </>
  );
}
