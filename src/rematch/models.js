const defaultTheme = {
  current: "darkly",
  currentMode: "dark",
};

export const theme = {
  state: defaultTheme, // initial state
  reducers: {
    // handle state changes with pure functions
    changeCurrentTheme(state, payload) {
      return {
        current: payload[0],
        currentMode: payload[1],
      };
    },
  },
};
