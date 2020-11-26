export const Type = {
  INCREMENT: "INCREMENT",
  ADD_STR: "ADD_STR",
  DEL_STR: "DEL_STR",
};

export const increment = (e) => ({
  type: Type.INCREMENT,
  payload: {
    elem: e.target,
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
