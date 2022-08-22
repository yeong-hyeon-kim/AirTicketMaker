import { combineReducers } from "redux";
// 루트 리듀서(Root Reducer)
// 한 프로젝트에 여러개의 리듀서가 있을때 하나로 합칠때 사용합니다.
import ticket from "./ticket";

const rootReducer = combineReducers({
  ticket,
});

export default rootReducer;
