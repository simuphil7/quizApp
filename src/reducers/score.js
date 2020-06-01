const score = (state = 0, action) => {
  switch (action.type) {
    case "addScore":
      return (state = state + 1);
    case "negateScore":
      return (state = state - 1);
    default:
      return state;
  }
};
export default score