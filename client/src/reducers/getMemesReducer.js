const getMemesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_MEMES":
      if (action.payload) state = [...action.payload];
      console.log(state);
      return state;

    case "ADD_NEW_MEME":
      state = [action.payload, ...state];
      return state;
    default:
      return state;
  }
};

export default getMemesReducer;
