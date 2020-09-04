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
  user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => item.price + amount, 0 )

const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_USER":
      return{
        ...state,
        user:action.user      
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(state.basket)
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its empty `);
      }
      return { ...state, basket: newBasket };
      
      
    default:
      return state;
  }
};

export default reducer;
