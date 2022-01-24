import Head from "next/head";
// import Layout from "../../components/layout";
// import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";

import character from "../../styles/character.module.scss";
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
      <div 
        className="w-screen h-screen bg-no-repeat bg-cover bg-center box-border p-2"
        style={{
          backgroundImage: "url(" + siteUrl + "/images/" + characterData.class + "/background.jpg" + ")"
        }}
      >
        <main 
          className="block w-full max-w-2xl mt-2 mb-2 p-4 m-auto"
          style={{
            backgroundImage: "url(" + siteUrl + "/images/pergament.jpg" + ")"
          }}
        >
          <figure>
            <img 
              className="w-1/2 m-auto"
              src={siteUrl + '/images/' + characterData.class + '/model.png'}
              alt={characterData.name}
              title={characterData.name}
            />
            <figcaption className="mt-2 text-center text-xl">Lv.{characterData.level + ' ' + characterData.name + ' - ' + characterData.title}</figcaption>
          </figure>

          <section>
            <h1 className="text-3xl">
              {characterData.name}的冒險故事
            </h1>
            <p
              className={"text-xl " + character.article_container}
              dangerouslySetInnerHTML={{
                __html: characterData.story
              }}
            />
          </section>

          <section>
            
          </section>
        </main>
      </div>
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

  characterData.story = characterData.story.replace(/<br>/g, "</span><span>");

  characterData.story = "<span>" + characterData.story + "</span>"

  return {
    props: {
      characterData
    },
  };
}
