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
        <link rel="shortcut icon" href={ '/images/' + characterData.class + '/icon.png' }/>
        <meta name="description" content={characterData.description}/>
        <meta name="author" content="驢子"/>
        <meta name="copyright" content="驢形工作室"/>
        <title>{characterData.name + '的冒險紀錄'}</title>
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
