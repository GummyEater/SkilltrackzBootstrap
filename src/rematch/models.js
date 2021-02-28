export const theme = {
  state: "darkly", // initial state
  reducers: {
    // handle state changes with pure functions
    setTheme(state, payload) {
      return payload;
    },
  },
};
