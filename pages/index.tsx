import MainContainer from "../src/components/main/mainContainer";

const Main = () => {
  return <MainContainer />;
};

export default Main;

Main.getLayout = function getLayout(page: any) {
  return <>{page}</>;
};
