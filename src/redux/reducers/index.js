import { Type } from "../actions/actions";

const int = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
const initialState = {
  idShowCell: [],
  eachTotal: [],
  eachMean: [],
  percCell: [],
  m: Number(prompt("Введите количество строк")),
  n: Number(prompt("Введите количество столбиков")),
  x: Number(prompt("Введите количество ближайших по значению ячеек ")),
  matrix: [],
};
// =================================================================================
// Создание матрицы
for (let i = 0; i < initialState.m; i++) {
  if (initialState.matrix[i] === undefined) {
    initialState.matrix[i] = [];
  }
  for (let j = 0; j < initialState.n; j++) {
    initialState.matrix[i][j] = { id: i + "" + j, amount: int(100, 1000) };
  }
}

// ==========================================================================================
// Нахождение суммы ячеек строки
const calcTotal = (state) => {
  state.eachTotal = [];
  for (let c = 0; c < state.matrix.length; c++) {
    let sumElem = 0;
    state.matrix[c].map((elem) => sumElem += elem.amount);
    state.eachTotal.push(sumElem);
  }
};
calcTotal(initialState);
// =============================================================================================
// Нахождение среднего значения суммы ячеек в столбце
const calcMean = (state) => {
  state.eachMean = [];
  for (let h = 0; h < state.n; h++) {
    let summ = 0;
    for (let l = 0; l < state.m; l++) {
      summ += state.matrix[l][h].amount;
    }
    state.eachMean.push(Math.round(summ / state.m));
  }
};
calcMean(initialState);
// =============================================================================

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
      calcTotal(state);
      calcMean(state);
      return {
        ...state,
        matrix: [...state.matrix],
      };
    // ===================================================================================
    case Type.ADD_STR:
      const newMatrix = [...state.matrix];
      newMatrix[state.m] = [];
      for (let j = 0; j < state.n; j++) {
        newMatrix[state.m][j] = {
          id: state.m + "" + j,
          amount: int(100, 1000),
        };
      }
      const newState = { ...state, m: state.m + payload, matrix: newMatrix };
      calcTotal(newState);
      calcMean(newState);
      return newState;
    // ===============================================================================
    case Type.DEL_STR:
      const delMatrix = [...state.matrix];
      if (delMatrix.length === 1) {
        return { ...state, matrix: delMatrix };
      }
      const upState = {
        ...state,
        m: state.m - payload,
        matrix: delMatrix.slice(0, -1),
      };
      calcTotal(upState);
      calcMean(upState);
      return upState;
    // =====================================================================
    case Type.SHOW_CELL:
      let allAmount = {};
      for (let i = 0; i < state.m; i++) {
        for (let j = 0; j < state.n; j++) {
          let currId = i + "" + j;
          if (payload.id === currId) continue;
          let currAmount =
            state.matrix[i][j].amount >= 0
              ? state.matrix[i][j].amount - payload.amount
              : -state.matrix[i][j].amount - payload.amount;
          allAmount[currId] = currAmount >= 0 ? currAmount : -currAmount;
        }
      }
      const sortable = Object.keys(allAmount).sort(function (a, b) {
        return allAmount[a] - allAmount[b];
      });
      return { ...state, idShowCell: sortable.slice(0, state.x) };
    // ===========================================================================
    case Type.CLEAR_SHOW_CELL:
      return { ...state, idShowCell: [] };
    case Type.PERCENT_CONTRIBUTION:
      
      let perCell = {
        id: Number(payload.item.dataset.idRow),
        cells: [],
      };
      for (let j = 0; j < state.n; j++) {
        let perc =
          (state.matrix[perCell.id][j].amount / payload.item.innerText) * 100;
        perCell.cells.push(Math.round(perc));
      }
      return { ...state, percCell: perCell };
    case Type.CLEAR_PERCENT_CONTRIBUTION:
      return { ...state, percCell: [] };
    default:
      return state;
  }
};
export default reducer;
