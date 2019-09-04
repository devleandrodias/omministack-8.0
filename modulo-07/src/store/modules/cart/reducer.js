// state é o estado anterior antes da alteracao que será feita pela action

export default function cart(state = [], action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
