import Head from "next/head";
import getCharactersData from "../utils/getCharactersData";
import {
  siteAuthor,
  siteCopyright,
  siteNeme,
  siteDescription,
  siteUrl,
  app_id
} from "../constants";
export default function Home({characterList}) {
  return (
    <>
      <Head>
        {/* header icon */}
        <link rel="shortcut icon" href={ siteUrl + '/images/icon.jpg'}/>
        {/* 手機用 icon -precomposed 意思是說不要反光*/}
        <link rel="apple-touch-icon-precomposed" sizes="192x192" href={siteUrl + '/images/icon.jpg'}/>
        <title>{siteNeme}</title>
        <meta name="author" content={siteAuthor}/>
        <meta name="copyright" content={siteCopyright}/>
        <meta name="name" content={siteNeme}/>
        <meta name="image" content={siteUrl + '/images/share.jpg'}/>
        <meta name="description" content={siteDescription}/>
        <meta property="og:title" content={siteNeme}/>
        <meta property="og:type" content="article"/>
        <meta property="article:section" content="table of contents"/>
        {/* 在fb他只能設定同網域的位置，除非可以驗證該網域的網站 */}
        <meta property="og:url" content="https://www.facebook.com/lyumage"/>
        <meta property="og:image" content={siteUrl + '/images/share.jpg'}/>
        <meta property="og:description" content={siteDescription} />
        <meta property="og:site_name" content={siteNeme} />
        <meta property="fb:app_id" content={app_id} />
      </Head>
    </>
  );
}

export async function getStaticProps() {
  const characterList = await getCharactersData();

  return {
    props: {
      characterList
    },
  };
}