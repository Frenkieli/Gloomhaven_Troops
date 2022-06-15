import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import getCharactersData from "../../utils/getCharactersData";
import {
  siteAuthor,
  siteCopyright,
  siteNeme,
  siteDescription,
  siteUrl,
  app_id
} from "../../constants";

import GTMElement from "../../components/GTMElement";

import { Base3dClass } from "../../threejs/base";
import { Topography } from "../../threejs/topography";
import { Mercenary } from "../../threejs/mercenary";

import indexStyle from "../../styles/index.module.scss";

import Script from "next/script";
import getProgressData from "../../utils/getProgressData";

export default function Home({progressData}) {
  const coverRef = useRef();
  const progressRef = useRef();
  const startRef = useRef();

  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    let gloomhaven3D = new Base3dClass(document.getElementById('gloomhaven'), setProgress);
    console.log(progressData)
    gloomhaven3D.init();
    gloomhaven3D.initTool();
    let gloomhavenTopography = new Topography(gloomhaven3D);
    gloomhavenTopography.setTopography('construct');
    let gloomhavenMercenary = new Mercenary(gloomhaven3D, gloomhavenTopography);
    gloomhavenMercenary.comeOut(progressData.mvp, progressData.member);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    if(progress === 100) {
      console.log('100');
      progressRef.current.classList.add('opacity-0');
      startRef.current.classList.add('cursor-pointer');
      startRef.current.classList.remove('opacity-0');
    }
  }, [progress])

  function canvasClearEffect(canvas) {
    let ctx = canvas.getContext('2d');

    let row = Math.ceil(canvas.width / 10);
    let col = Math.ceil(canvas.height / 10);
    let arr = [];

    for(let i = 0 ; i < row ; i++) {
      arr[i] = [];
      for(let j = 0 ; j < col ; j++) {
        arr[i].push([10 * i, 10 * j, 10, 10]);
      }
    }
    let dur = Math.floor(arr.length * arr[0].length / 100);

    let clearTime = setInterval(() => {
      for(let time = 0 ; time < dur ; time++){
        let i = Math.floor(Math.random() * arr.length); 
        let j = Math.floor(Math.random() * arr[i].length);
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = '#fa0';
        ctx.rect(arr[i][j][0], arr[i][j][1], arr[i][j][2], arr[i][j][3]);
        ctx.fill();
        ctx.closePath();
        arr[i].splice(j, 1);
        if(arr[i].length === 0) {
          arr.splice(i, 1)
          console.log('消失一個');
        };
        if(arr.length === 0) {
          canvas.remove();
          clearInterval(clearTime);
          console.log('關閉');
          break;
        };
      }
    }, 2);
  }
  
  function startEvent() {
    if(progress === 100) {
      console.log('start');
      html2canvas(coverRef.current, {
        removeContainer: true,
        useCORS: true,
        scrollY: 0,
        scrollX: 0,
        dpi: 96,
        onrendered: ()=> {console.log("完成")}
      }).then(function(canvas) {
        // canvas.className = 'z-10 fixed top-0 left-0';
        // document.body.appendChild(canvas);
        let img = document.createElement('img');
        img.src = canvas.toDataURL();
        img.onload = (()=>{
          let ccc = document.createElement('canvas');
          let cctx = ccc.getContext('2d');
          ccc.width = img.width;
          ccc.height = img.height;
          cctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight);
          ccc.className = 'z-10 fixed top-0 left-0';
          document.body.appendChild(ccc);
          coverRef.current.remove();
          canvasClearEffect(ccc);

        })
      })
    }
  }

  return (
    <>
      <Head>
        {/* header icon */}
        <link rel="shortcut icon" href={ siteUrl + '/images/icon.jpg'}/>
        {/* 手機用 icon -precomposed 意思是說不要反光*/}
        <link rel="apple-touch-icon-precomposed" sizes="192x192" href={siteUrl + '/images/icon.jpg'}/>
        <title>{progressData.name} ： {siteNeme}</title>
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
      <Script src="../lib/html2canvas.js"></Script>
      <GTMElement/>
      <div
        ref={ coverRef }
        className={`
        uppercase tracking-widest md:tracking-one ${indexStyle["font-DotGothic16"]} 
        z-10 fixed top-0 right-0 bottom-0 left-0 
        cursor-default select-none`}
      >
        <div className="
          h-full w-full
          flex flex-col justify-center items-center
        text-white bg-black
        "
        >
          <h1 className="text-4xl md:text-7xl font-black leading-9 md:leading-normal">gloomhaven</h1>
          <h3 className="text-xl md:text-3xl font-medium leading-9 md:leading-normal">{siteNeme}</h3>
          <h2 className="text-3xl md:text-6xl font-black leading-9 md:leading-normal">{progressData.name}</h2>
          <div 
              ref={progressRef}
            className="
              fixed bottom-20 w-1/2 h-6
              border border-solid border-white rounded-2xl
              overflow-hidden
              duration-300
              "
          >
            <span className="
              tracking-widest
              absolute left-1/2 top-1/2
              translate-x-center
              translate-y-center
              text-white mix-blend-difference
            ">
              {Math.floor(progress) + '%'}
            </span>
            <div className="
              h-full
              bg-white rounded-2xl
              duration-100
            "
              style={{
                width: progress + '%'
              }}
            />
          </div>
          <div 
            ref={startRef}
            className="
              duration-300
              opacity-0
              fixed bottom-20
              overflow-hidden
              text-white text-6xl md:text-9xl
              "
            onClick={startEvent}
          >
            START
          </div>
        </div>
      </div>
      <div 
        className={`
          bg-cover bg-center
          ${indexStyle["bg-pergament"]}
        `}
      >
        <canvas id="gloomhaven"/>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getProgressData();

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

export async function getStaticProps({params}) {

  const rawProgressData = await getProgressData();
  const characterList = await getCharactersData();
  let progressData = rawProgressData[params.progress - 1];
  let member = progressData.member.split('_');

  member.splice(member.indexOf(progressData.mvp), 1);
  progressData.mvp = characterList[progressData.mvp];
  for(let i = 0 ; i < member.length ; i++) {
    member[i] = characterList[member[i]];
  }
  progressData.member = member;

  return {
    props: {
      progressData
    },
  };
}