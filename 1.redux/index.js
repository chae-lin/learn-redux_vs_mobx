const { createStore } = require("redux");

const reducer = (prevState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        // 새로운 객체를 유지하면서 내가 바뿌고 싶은 것 만 바꿀 수 있음
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    case "CHANGE_COMP_C":
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있어요.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

console.log("1st", store.getState());

const changeCompA = (data) => {
  return {
    // action
    type: "CHANGE_COMP_A",
    data,
  };
};

// action 생성자를 만들지 않았을 경우
// store.dispach({
//     type: 'CHANGE_COMP_A',
//     data: 'b',
// })

store.dispatch(changeCompA("b"));

console.log("2nd", store.getState());
