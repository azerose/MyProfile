import styled from "@emotion/styled";
import { breakPoints } from "../../commons/style/globalStyles";

export const MainWrapper = styled.section`
  width: 100%;
  margin: 0 auto;
  @media ${breakPoints.mobile} {
    width: 320px;
  }
`;

export const PortPolio2 = styled.a`
  width: 100%;
  :hover {
    background-color: orange;
    color: #fcf2ce;
  }
`;

export const Description = styled.div`
  margin: 20px 0 60px 0;
`;

export const PortPolio1 = styled.article`
  cursor: pointer;
  margin: 30px 0;
  :hover {
    background-color: orange;
    color: #fcf2ce;
  }
`;

export const TitleStyle = styled.div`
  width: 100%;
  font-size: 32px;
  margin: 3rem 0;
  font-weight: 700;
  background-color: #fcf2ce;
`;

export const ImgStyle = styled.img`
  width: 700px;
  height: 400px;
  min-width: 250px;
  @media ${breakPoints} {
    width: 250px;
  }
`;
