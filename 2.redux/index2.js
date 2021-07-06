const { createStore } = require("redux");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");
const reducer = require("./reducers/index");

const initialState = {
  user: {
    isLogginIn: true,
    data: null,
  },
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  // react-redux 안에 들어있어요.
  console.log("changed"); // 화면 바꿔주는 코드 여기서
});

store.dispatch(
  logIn({
    id: 1,
    name: "zerocho",
    admin: true,
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요 리덕스",
  })
);

store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스",
  })
);

store.dispatch(logOut());
