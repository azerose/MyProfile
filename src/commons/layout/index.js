import styled from "@emotion/styled";
import Footer from "./footer/footer";

const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  box-shadow: 0px 0px 10px gray;
  align-items: center;
  padding: 30px 0;
`;

const Layout = (props) => {
  return (
    <>
      <MainWrapper>
        <div>{props.children}</div>
        <Footer />
      </MainWrapper>
    </>
  );
};

export default Layout;
