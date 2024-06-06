import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { Global, css } from "@emotion/react";
import { Roboto, Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "300", "400", "500", "600", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  fallback: [
    // 디자이너분과 상의한 폴백 폰트 넣으시면 됩니다
    "Roboto",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});

const roboto = Roboto({
  subsets: ["latin"], // preload에 사용할 subsets입니다.
  weight: ["100", "300", "400", "500", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
  variable: "--roboto", // CSS 변수 방식으로 스타일을 지정할 경우에 사용합니다.
});

const normalCss = css`
  // reset 할 내용들
  html {
    font-size: 10px;
    font-family: sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
    font-family: ${roboto.style.fontFamily};
    font-family: ${notoSansKr.style.fontFamily};
    letter-spacing: -0.03rem;
  }

  .tsqd-parent-container {
    font-size: 16px;
  }

  /**
 * 기본 마진값을 제거.
 */

  body {
    margin: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  textarea {
    font-family: none;
  }

  p,
  ul,
  figure {
    padding: 0;
    margin: 0;
  }

  a:active,
  a:hover {
    outline: 0;
  }

  * {
    box-sizing: border-box;
  }

  * {
    /* scrollbar-width: thin;
    scrollbar-color: blue orange; */
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: #fff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray04);
    border-radius: 2px;
    border: 2px solid var(--gray04);
  }
`;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Global styles={normalCss} />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
