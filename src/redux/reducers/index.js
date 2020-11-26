import { Type } from "../actions/actions";

const int = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const initialState = {
  mean: 0,
  total: 0,
  cell: [
    {
      id: 1,
      amount: int(100, 1000),
    },
    {
      id: 2,
      amount: int(100, 1000),
    },
    {
      id: 3,
      amount: int(100, 1000),
    },
    {
      id: 4,
      amount: int(100, 1000),
    },
    {
      id: 5,
      amount: int(100, 1000),
    },
    {
      id: 6,
      amount: int(100, 1000),
    },
    {
      id: 7,
      amount: int(100, 1000),
    },
    {
      id: 8,
      amount: int(100, 1000),
    },
    {
      id: 9,
      amount: int(100, 1000),
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT:
      console.log(state.cell);
      return { ...state };
    case Type.ADD_STR:
      const newItem = {
        id: state.cell.length + payload,
        amount: int(100, 1000),
      };
      return {
        ...state,
        cell: [...state.cell, newItem],
      };
    case Type.DEL_STR:
      const idElem = state.cell.length;
      const newCell = state.cell.filter((elem) => elem.id !== idElem);
      console.log(newCell)
      return { ...state, cell: [...newCell] };
    default:
      return state;
  }
};
export default reducer;
