import styled from "@emotion/styled";

const LinkStyle = styled.a`
  :hover {
    background-color: pink;
    opacity: 0.6;
  }
`;

const Email = styled.span`
  :hover {
    background-color: pink;
    opacity: 0.6;
  }
`;

const ContactStyle = styled.div`
  padding-top: 20px;
`;

const AboutMe = () => {
  return (
    <>
      <div>
        <h2>About</h2>
        <div>
          참신한 기획과 누구나 이해 할 수 있는 코드를 작성하기위해
          사고하는개발자.
          <br />
          <strong>이정우</strong> 입니다.
          <br />
          <ContactStyle>
            Contact
            <br />
            Email :<Email> woojjang8671@naver.com</Email>
            <br />
            Blog :
            <LinkStyle href="https://velog.io/@azerose">
              https://velog.io/@azerose
            </LinkStyle>
            <br />
            GitHub :
            <LinkStyle href="https://github.com/azerose">
              https://github.com/azerose
            </LinkStyle>
          </ContactStyle>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
