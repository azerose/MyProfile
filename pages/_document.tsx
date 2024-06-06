import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { Provider } from "jotai";
import Document, { Head, Html, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";
import { ExampleStore } from "../src/core/jotai-store/example";

export default function MyDocument() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body>
        <Provider store={ExampleStore}>
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
