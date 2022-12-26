import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Footer from "./footer/footer";

const MainWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  box-shadow: 0px -10px 10px 0px gray;
  align-items: center;
  padding: 30px 0;
`;

const HomBtn = styled.button`
  margin: 3rem;
  font-size: 3rem;
  border: none;
  background-color: lightgray;
  opacity: 0.6;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;

const Layout = (props) => {
  const router = useRouter();

  const onClickMoveHome = () => {
    void router.push("/");
  };

  return (
    <>
      <MainWrapper>
        <div>{props.children}</div>
        <HomBtn onClick={onClickMoveHome}>HOME</HomBtn>
        <Footer />
      </MainWrapper>
    </>
  );
};

export default Layout;
