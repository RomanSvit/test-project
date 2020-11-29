export const Type = {
  INCREMENT: "INCREMENT",
  ADD_STR: "ADD_STR",
  DEL_STR: "DEL_STR",
  UPDATE: "UPDATE",
  SHOW_CELL: "SHOW_CELL",
  PERCENT_CONTRIBUTION: "PERCENT_CONTRIBUTION",
  CLEAR_SHOW_CELL: "CLEAR_SHOW_CELL",
  CLEAR_PERCENT_CONTRIBUTION: "CLEAR_PERCENT_CONTRIBUTION",
};
export const clearShowCell = () => ({
  type: Type.CLEAR_SHOW_CELL,
});
export const clearPercentContribution = () => ({
  type: Type.CLEAR_PERCENT_CONTRIBUTION,
});
export const showPercentContribution = (e) => ({
  type: Type.PERCENT_CONTRIBUTION,
  payload: { item: e.target, amount: e.target.innerText },
});
export const showCell = (e) => ({
  type: Type.SHOW_CELL,
  payload: { id: e.target.id, amount: e.target.innerText },
});
export const increment = (e) => ({
  type: Type.INCREMENT,
  payload: {
    id: e.target.id,
  },
});

export const addStr = () => ({
  type: Type.ADD_STR,
  payload: 1,
});
export const delStr = () => ({
  type: Type.DEL_STR,
  payload: 1,
});
export const updateTotal = () => ({
  type: Type.UPDATE,
});
