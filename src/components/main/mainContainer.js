import MainPresetner from "./mainPresenter";
import { useRouter } from "next/router";

const MainContainer = () => {
  const router = useRouter();

  const onClickMoveMarket = () => {
    router.push("/market");
  };

  const onClickMovePreonBoarding = () => {
    router.push("/preonboarding");
  };
  return (
    <MainPresetner
      onClickMoveMarket={onClickMoveMarket}
      onClickMovePreonBoarding={onClickMovePreonBoarding}
    />
  );
};

export default MainContainer;
