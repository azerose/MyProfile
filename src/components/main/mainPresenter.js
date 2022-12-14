import Image from "next/image";
import * as S from "./mainStyles";

const MainPresetner = () => {
  return (
    <>
      <S.MainWrapper>
        <main>
          <article>
            <h2>중고마켓</h2>
            <Image
              width={700}
              height={400}
              src={"/freeboard/firstPage.gif"}
              alt="포트폴리오1"
            />
            <div>
              <S.Description>
                <strong>description</strong>
                <br />
                <br />
                번개장터를 모방한 중고마켓 기능과 자유게시판
              </S.Description>
            </div>
          </article>
          <article>
            <h2>BUSKER(with codecamp 9th)</h2>
            <Image width={700} height={400} src={""} alt="포트폴리오2" />
            <S.PortPolio2 href="https://www.notion.so/dingco/3-e2d64b040e144ad98d68d0f0caaec5e0">
              BUSKER 자세히 보러가기
            </S.PortPolio2>
            <S.Description>
              <strong>description</strong>
              <br />
              <br />
              버스커와 버스킹을 즐기는 사람들을 위한 정보제공 서비스
            </S.Description>
          </article>
          <article>
            <h2>TodoList(with Wanted-pre-onboarding)</h2>
          </article>
        </main>
        <footer></footer>
      </S.MainWrapper>
    </>
  );
};

export default MainPresetner;
