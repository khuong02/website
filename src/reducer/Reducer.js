export const reducer = (state, action) => {
  switch (action.type) {
    case "ADMIN":
      return { ...state, role: true };

    default:
      return state;
  }
};
