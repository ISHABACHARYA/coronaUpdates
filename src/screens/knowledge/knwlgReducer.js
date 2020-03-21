const INITIAL_STATE = {
  loading: false,
  preventionMethods: [],
  facts: null,
  myths: null,
  about: null
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    default: {
      return {
        ...state
      };
    }
  }
};
