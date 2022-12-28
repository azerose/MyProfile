import Image from "next/image";
import * as S from "./mainStyles";

const MainPresetner = (props) => {
  return (
    <>
      <S.MainWrapper>
        <main>
          <article>
            <S.TitleStyle>
              <S.PortPolio2 href="https://coral-writer-e11.notion.site/7efcfd9184a4442b8b9a23a0b51924a4">
                자기소개서로 돌아가기
              </S.PortPolio2>
            </S.TitleStyle>
            <article>
              <S.TitleStyle>BUSKER(with codecamp 9th)</S.TitleStyle>
              <Image
                width={700}
                height={400}
                src={"/busker/buskermain.gif"}
                alt="포트폴리오2"
              />
              <div>
                <S.PortPolio2 href="https://www.notion.so/dingco/3-e2d64b040e144ad98d68d0f0caaec5e0">
                  BUSKER 자세히 보러가기
                </S.PortPolio2>
                <S.Description>
                  <strong>description</strong>
                  <br />
                  <br />
                  버스커와 버스킹을 즐기는 사람들을 위한 정보제공 서비스
                </S.Description>
              </div>
            </article>
            <S.TitleStyle>중고마켓</S.TitleStyle>
            <Image
              width={700}
              height={400}
              src={"/freeboard/firstPage.gif"}
              alt="포트폴리오1"
            />
            <div>
              <S.PortPolio1 onClick={props.onClickMoveMarket}>
                중고마켓 자세히 보러가기
              </S.PortPolio1>
              <S.Description>
                <strong>description</strong>
                <br />
                <br />
                번개장터를 모방한 중고마켓 기능과 자유게시판
              </S.Description>
            </div>
          </article>

          <article>
            <S.TitleStyle>TodoList(with Wanted-pre-onboarding)</S.TitleStyle>
          </article>
          <article></article>
        </main>
        <footer></footer>
      </S.MainWrapper>
    </>
  );
};

export default MainPresetner;
