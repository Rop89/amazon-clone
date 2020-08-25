export const initialState = {
  basket: [
    {
      id: "1213322",
      title: "Midnight Sun ",
      price: 11,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41co7ojYQYL._AC_SY400_.jpg",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE FROM BASKET":
      break;
    default:
      return state;
  }
};

export default reducer;
