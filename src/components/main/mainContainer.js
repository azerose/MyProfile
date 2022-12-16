import MainPresetner from "./mainPresenter";
import { useRouter } from "next/router";

const MainContainer = () => {
  const router = useRouter();

  const onClickMoveMarket = () => {
    router.push("/market");
  };
  return <MainPresetner onClickMoveMarket={onClickMoveMarket} />;
};

export default MainContainer;
