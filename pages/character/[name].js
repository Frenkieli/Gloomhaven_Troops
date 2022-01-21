// import Head from "next/head";
// import Layout from "../../components/layout";
// import Date from "../../components/date";
// import { getAllPostIds, getPostData } from "../../lib/posts";

// import utilStyles from "../../styles/utils.module.scss";
import getCharactersData from "../../lib/getdata";

export default function Post({ postData }) {
  return (
    <>
      {JSON.stringify(postData)}
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getCharactersData();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getCharactersData();
  return {
    props: {
      postData,
    },
  };
}
