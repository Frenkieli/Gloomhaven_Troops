// 不能用這樣的思維去撰寫，這樣 html 還會是空的

import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import styles from "./layout.module.scss";
// import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";

export default function MainContainer({ characterList, characterName = null }) {
  const [timeNow, setTimeNow] = useState(1);

  const [playerLine, setPlayerLine] = useState({});

  const [teamMember, setTeamMember] = useState({});

  const [changeTimeData, setSchangeTimeData] = useState({});

  useEffect(() => {
    let checkNowTime = 1;
    const playerObject = {};
    const changeTimeMember = {};

    for (let i = 0; i < characterList.length; i++) {
      if (!playerObject[characterList[i].player]) playerObject[characterList[i].player] = [];
      playerObject[characterList[i].player].push(characterList[i]);
      if (characterName === characterList[i].name) checkNowTime = characterList[i].start;
      changeTimeMember[characterList[i].start] = true;
    }

    for (let key in playerObject) {
      playerObject[key].sort((a, b) => {
        return a.start - b.start;
      });
    }
    for(let key in changeTimeMember) {
      changeTimeMember[key] = {};
      for(let cKey in playerObject) {
        for(let i = 1 ; i < playerObject[cKey].length ; i++) {
          if( parseInt(key) < playerObject[cKey][i].start) {
            changeTimeMember[key][cKey] = playerObject[cKey][i - 1];
            break;
          }
        }
        if(!changeTimeMember[key][cKey]) changeTimeMember[key][cKey] = playerObject[cKey][playerObject[cKey].length - 1];
      }
    }
    console.log(changeTimeMember, 'changeTimeMember');

    let keys = Object.keys(changeTimeMember).sort((a,b)=>a-b);
    let teamMember;
    console.log(keys, 'keys');
    for(let i = 1 ; i < keys.length ; i++) {
      if(checkNowTime < keys[i]) {
        teamMember = changeTimeMember[keys[i]];
        break;
      }
    }
    if(!teamMember) {
      teamMember = changeTimeMember[keys[keys.length - 1]];
    }
    setTeamMember(teamMember);
    setSchangeTimeData(changeTimeMember);
    setPlayerLine(playerObject);
    setTimeNow(checkNowTime)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const teamObject = {};
    
    console.log(timeNow, "timeNow");
  }, [timeNow]);

  return (
    <div>
      {/* {JSON.stringify(timeNow)}
      <br/>
      {JSON.stringify(playerLine)}
      <br/>
      {JSON.stringify(teamMember)}
      <br/> */}
      {JSON.stringify(changeTimeData)}
    </div>
  );
}
