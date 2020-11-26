export const Type = {
  INCREMENT: "INCREMENT",
  ADD_STR: "ADD_STR",
  DEL_STR: "DEL_STR",
};

export const increment = () => ({
  type: Type.INCREMENT,
  payload: 1,
});

export const addStr = (id) => ({
  type: Type.ADD_STR,
  payload:  1,
});
export const delStr = () => ({
  type: Type.DEL_STR,
});
