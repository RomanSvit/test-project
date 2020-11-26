import { Type } from "../actions/actions";

const int = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const initialState = {
  mean: 0,
  total: 0,
  m: 3,
  n: 3,
  matrix: [],
};
for (let i = 0; i < initialState.m; i++) {
  if (initialState.matrix[i] === undefined) {
    initialState.matrix[i] = [];
  }
  for (let j = 0; j < initialState.n; j++) {
    initialState.matrix[i][j] = { id: i + "" + j, amount: int(100, 1000) };
  }
}
// console.log(initialState.matrix);

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      const id = payload.id;
      const element = state.matrix.find((elem) =>
        elem.find((elem) => elem.id === id)
      );
      const currentElem = element.find((el) => el.id === id);
      const idx = element.findIndex((elem) => elem.id === id);
      element[idx] = {
        ...currentElem,
        amount: currentElem.amount + 1,
      };
      return {
        ...state,
        matrix: [...state.matrix],
      };
    case Type.ADD_STR:
      return { ...state, m: state.m + payload };
    case Type.DEL_STR:
      return { ...state, m: state.m - payload };
    default:
      return state;
  }
};
export default reducer;
