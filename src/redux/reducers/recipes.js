const initialState = {
  recipes: [],
  pending: false
}

export default recipes = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RECIPE_PENDING':
      return {
        recipes: [],
        pending: true
      };
    case 'GET_RECIPE_FULFILLED':
      return {
        recipes: action.payload.data.recipes,
        pending: false,
      };
    case 'GET_RECIPE_REJECTED':
      return {
        error: action.payload.data,
        pending: false,
      };

    default:
      return state;
  }
}
