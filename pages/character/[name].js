import Head from "next/head";
// import Layout from "../../components/layout";
// import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";

import characterStyle from "../../styles/character.module.scss";
import getCharactersData from "../../utils/getCharactersData";

import {
  siteAuthor,
  siteCopyright,
  siteNeme,
  siteUrl,
  app_id
} from "../../constants";

import GTMElement from "../../components/GTMElement";

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
      <GTMElement/>
      <div 
        className="relative w-full h-screen overflow-auto bg-no-repeat bg-cover bg-center p-2 select-none
          before:lg:inline-block before:lg:h-full before:lg:w-0 before:lg:align-middle lg:text-right"
        style={{
          backgroundImage: "url(" + siteUrl + "/images/" + characterData.class + "/background.jpg" + ")"
        }}
      >
        <main 
          className={`
            block w-full max-w-2xl mt-2 mb-2 p-4 m-auto rounded-xl 
            lg:inline-block lg:align-middle lg:text-left lg:max-w-[75%] lg:mr-14
            ` + characterStyle.bg_pergament}
        >
          <figure
            className="flex items-end lg:fixed lg:bottom-0 lg:left-0 lg:w-96"
          >
            <img 
              className="w-1/2 m-auto lg:w-3/4"
              style={{
                filter: `drop-shadow(0 0 20px ${characterData.color})`
              }}
              src={siteUrl + '/images/' + characterData.class + '/model.png'}
              alt={characterData.name}
              title={characterData.name}
            />
            { characterData.class === 'beast_tyrant' ? (
              <img 
                className="w-1/2"
                style={{
                  filter: `drop-shadow(0 0 20px ${characterData.color})`
                }}
                src={siteUrl + '/images/' + characterData.class + '/model2.png'}
                alt={characterData.name}
                title={characterData.name}
              />
            ) : ''}
            <figcaption className="mt-2 text-center text-xl mb-3 hidden"> <h2>{characterData.class + ' - ' + characterData.title}</h2></figcaption>
          </figure>

          <section>
            <h1 className="text-3xl">
              Lv.{characterData.level + ' ' + characterData.name}
              <span className="text-xl ml-2.5">
                <strong>{characterData.title}</strong><em>({characterData.class})</em>
              </span>
            </h1>
            <p className="text-lg">
              參與冒險：{characterData.start} - {characterData.end || '冒險中'}{characterData.during >= 0 ? ` (${characterData.during}場)` : ''}
              <span className="text-sm ml-1">
                ({characterData.player})
              </span>
            </p>
            <p
              className={"text-xl " + characterStyle.article_container}
              dangerouslySetInnerHTML={{
                __html: characterData.story
              }}
            />
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
