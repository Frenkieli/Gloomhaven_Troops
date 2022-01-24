import Document, { Html, Head, Main, NextScript } from "next/document";



// 這些是必要的屬性
// Html, Head, Main, NextScript

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="zh-tw"
        className="bg-orange-300"
      >
        <Head prefix="my_namespace: https://ogp.me/ns/article#"/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
