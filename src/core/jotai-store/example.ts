import { atom, createStore } from "jotai";

export const ExampleStore = createStore();
export const countAtom = atom(0);
export const countryAtom = atom("korea");

// 작성 방법 : 페이지별 store 와  atom선언 후 export 해서  사용
// 사용 방법 : 페이지의 최상위 파일에 store를 각각 provider로 공급해서 사용한다
// 본 코드는 예제 코드입니다.
