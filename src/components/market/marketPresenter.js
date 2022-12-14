import * as S from "./marketStyles";

const MarketPresenter = () => {
  return (
    <>
      <h1>중고마켓</h1>
      <S.DateWrapper>
        <S.StartDay>
          <div>start</div>
          <div>29 Aug. 2022 </div>
        </S.StartDay>
        <S.StartDay>
          <div>finish</div>
          <div>28 Oct. 2022 </div>
        </S.StartDay>
      </S.DateWrapper>
      <div>
        <img
          width={700}
          height={400}
          src={"/freeboard/firstPage.gif"}
          alt="번개장터 랜딩페이지"
        />
      </div>
      <S.Description>
        <strong>description</strong>
        <br />
        <br />
        번개장터를 모방한 중고마켓 기능과 자유게시판
      </S.Description>
      <main>
        <S.TitleWrapper>Skills</S.TitleWrapper>
        <S.SkillWrapper>
          <S.SkillStyle1>
            <span>Next.js</span>
          </S.SkillStyle1>
          <S.SkillStyle2>
            <span>Javascript</span>
          </S.SkillStyle2>
          <S.SkillStyle1>
            <span>React</span>
          </S.SkillStyle1>
          <S.SkillStyle2>
            <span>Apollo-Client</span>
          </S.SkillStyle2>
          <S.SkillStyle1>
            <span>GraphQL</span>
          </S.SkillStyle1>
          <S.SkillStyle2>
            <span>Emotion</span>
          </S.SkillStyle2>
          <S.SkillStyle1>
            <span>HTML5</span>
          </S.SkillStyle1>
          <S.SkillStyle2>
            <span>CSS3</span>
          </S.SkillStyle2>
        </S.SkillWrapper>
        <h2>프로젝트 목표</h2>
        <S.Description>
          Next.js를 사용하여 API연결 및 여러기능들을 학습하고 직접 프로젝트에
          구현해보기위한 프로젝트
        </S.Description>
        <h2>
          깃허브링크 :
          <a href="https://github.com/azerose/frontend-jw">
            https://github.com/azerose/frontend-jw{" "}
          </a>
        </h2>
        <div>
          <h2>초기화면</h2>
          <img
            width={400}
            height={400}
            src={"/freeboard/firstPage.gif"}
            alt="랜딩페이지"
          />
          <h2>권한분기</h2>
          <S.DateWrapper>
            (로그인 하지 않으면 로그인창으로 보내기)
          </S.DateWrapper>
          <img
            width={400}
            height={300}
            src={"/freeboard/Auth.gif"}
            alt="권한분기"
          />
          <h2>회원가입</h2>
          <img
            width={400}
            height={300}
            src={"/freeboard/signup.gif"}
            alt="회원가입"
          />
        </div>
        <h2>로그인</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/login.gif"}
          alt="로그인"
        />
        <h2>상품등록</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/enrollProduct.gif"}
          alt="상품등록"
        />
        <h2>상품문의,수정,삭제</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/comment.gif"}
          alt="상품댓글"
        />
        <h2>충전</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/charge.gif"}
          alt="충전기능"
        />
        <h2>게시글 등록</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/boardEnroll.gif"}
          alt="게시글등록"
        />
        <h2>게시글 수정</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/editBoard.gif"}
          alt="게시글수정"
        />
        <h2>게시글 삭제</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/deleteBoard.gif"}
          alt="게시글삭제"
        />
        <h2>게시글 검색</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/search.gif"}
          alt="게시글 검색"
        />
        <h2>댓글 CRUD</h2>
        <img
          width={400}
          height={300}
          src={"/freeboard/commentEnroll.gif"}
          alt="댓글 등록"
        />
      </main>
    </>
  );
};

export default MarketPresenter;
