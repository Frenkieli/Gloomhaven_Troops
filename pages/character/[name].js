import Head from "next/head";
// import Layout from "../../components/layout";
// import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";

// import utilStyles from "../../styles/utils.module.scss";
import getCharactersData from "../../utils/getCharactersData";

import {
  siteAuthor,
  siteCopyright,
  siteNeme,
  siteUrl,
  app_id
} from "../../constants";

export default function Post({ 
  characterData
}) {
  return (
    <>
      <Head>
        {/* header icon */}
        <link rel="shortcut icon" href={ siteUrl + '/images/' + characterData.class + '/icon.png' }/>
        {/* 手機用 icon -precomposed 意思是說不要反光*/}
        <link rel="apple-touch-icon-precomposed" sizes="192x192" href={ siteUrl + '/images/icon.png'}/>
        <title>{characterData.name + '：' + siteNeme}</title>
        <meta name="author" content={siteAuthor}/>
        <meta name="copyright" content={siteCopyright}/>
        <meta name="name" content={characterData.name + '：' + siteNeme}/>
        <meta name="image" content={ siteUrl + '/images/' + characterData.class + '/share.jpg' }/>
        <meta name="description" content={characterData.description}/>
        <meta property="og:title" content={characterData.name + '：' + siteNeme}/>
        <meta property="og:type" content="article"/>
        <meta property="article:section" content={characterData.name}/>
        {/* 在fb他只能設定同網域的位置，除非可以驗證該網域的網站 */}
        <meta property="og:url" content="https://www.facebook.com/lyumage"/>
        <meta property="og:image" content={ siteUrl + '/images/' + characterData.class + '/share.jpg' }/>
        <meta property="og:description" content={characterData.description} />
        <meta property="og:site_name" content={siteNeme}/>
        <meta property="fb:app_id" content={app_id} />
      </Head>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getCharactersData();

  for(let i = 0 ; i < paths.length ; i++) {
    paths[i] = {
      params: paths[i]
    }
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const characterList = await getCharactersData();
  let characterData;
  
  for(let i = 0 ; i < characterList.length ; i++) {
    if(characterList[i].name === params.name) {
      characterData = characterList[i];
      break;
    }
  }

  return {
    props: {
      characterData
    },
  };
}
