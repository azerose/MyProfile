import styled from "@emotion/styled";

export const StartDay = styled.section`
  color: gray;
  opacity: 0.9;
`;

export const DateWrapper = styled.section`
  width: 100%;
  display: flex;
  gap: 40px;
  margin: 10px 0 20px 0;
`;

export const TitleWrapper = styled.h2`
  margin: 4rem 0 1rem;
`;

export const Description = styled.div`
  margin: 20px 0 60px 0;
  background-color: #fcf2ce;
`;

export const SkillWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  border: 1px solid rgba(191, 191, 191);
`;

export const SkillStyle1 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  text-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(191, 191, 191);
  background-color: rgba(191, 191, 191, 06);
`;

export const SkillStyle2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 5px;
  border-bottom: 1px solid rgb(191, 191, 191);
  :last-child {
    border-bottom: none;
  }
`;
