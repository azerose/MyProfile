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
              <S.ImgStyle src={"/busker/buskermain.gif"} alt="포트폴리오2" />
              <div>
                <S.PortPolio2 href="https://bit.ly/9_BUSKER">
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
            <img
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

          <article style={{ display: "flex", flexDirection: "column" }}>
            <S.TitleStyle>TodoList(with Wanted-pre-onboarding)</S.TitleStyle>
            <img
              width={700}
              height={400}
              src={"/todolist.png"}
              alt="포트폴리오3"
            />
            <S.PortPolio2 href="https://github.com/azerose/wanted-pre-onboarding-frontend">
              토이프로젝트 상세히 보러가기
            </S.PortPolio2>
            <S.Description>
              <strong>description</strong>
              <br />
              <br />
              토이프로젝트: 원티드 프리온보딩 사전과제(with.RestAPI)
            </S.Description>
          </article>
          <article></article>
        </main>
        <footer></footer>
      </S.MainWrapper>
    </>
  );
};

export default MainPresetner;
