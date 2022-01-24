import Head from "next/head";
// import Layout from "../../components/layout";
// import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";

// import utilStyles from "../../styles/utils.module.scss";
import getCharactersData from "../../lib/getdata";

export default function Post({ characterData }) {
  return (
    <>
      <Head>
        {/* header icon */}
        <link rel="shortcut icon" href={ '/images/' + characterData.class + '/icon.png' }/>
        {/* 手機用 icon -precomposed 意思是說不要反光*/}
        <link rel="apple-touch-icon-precomposed" sizes="192x192" href={ 'https://frenkieli.github.io/Gloomhaven_Troops/images/' + characterData.class + '/icon.png' }/>
        <title>{characterData.name + '：冒險紀錄－幽港迷城'}</title>
        <meta name="author" content="驢子"/>
        <meta name="copyright" content="驢形工作室"/>
        <meta name="name" content={characterData.name + '：冒險紀錄－幽港迷城'}/>
        <meta name="image" content={ 'https://frenkieli.github.io/Gloomhaven_Troops/images/' + characterData.class + '/share.jpg' }/>
        <meta name="description" content={characterData.description}/>
        <meta property="og:title" content={characterData.name + '：冒險紀錄－幽港迷城'}/>
        <meta property="og:type" content="article"/>
        <meta property="article:section" content={characterData.name}/>
        {/* 在fb他只能設定同網域的位置，除非可以驗證該網域的網站 */}
        <meta property="og:url" content="https://www.facebook.com/lyumage"/>
        <meta property="og:image" content={ 'https://frenkieli.github.io/Gloomhaven_Troops/images/' + characterData.class + '/share.jpg' }/>
        <meta property="og:description" content={characterData.description} />
        <meta property="og:site_name" content="冒險紀錄－幽港迷城" />
        <meta property="fb:app_id" content="674189663950207" />
      </Head>
      {JSON.stringify(characterData)}
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
  const data = await getCharactersData();
  let characterData;
  for(let i = 0 ; i < data.length ; i++) {
    if(data[i].name === params.name) {
      characterData = data[i];
      break;
    }
  }
  return {
    props: {
      characterData: characterData,
    },
  };
}
