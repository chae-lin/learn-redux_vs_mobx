const { combineReducers } = require("redux");
const userReducer = require("./user");
const postReducer = require("./post");

// 순수함수: 매게변수와 함수내부에서 선언한 함수를 제외한 이외의 것을 참조하지 않는 함수
// 순수함수는 리듀서로 따로 뺄 수 있다.
// combineReducers 를 사용해 리듀서를 기능별 분리가능 하다.

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
