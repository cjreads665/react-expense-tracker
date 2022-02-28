//state will automatically be accepted in a reducer function
export default (state, action) => {
  switch (action.type) {
    //we'll return a new state without the transaction we want to remove
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((tar) => {
          return tar.id !== action.payload;
        }),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
