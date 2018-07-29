export default function(state = null, action) {
  // state - reducer
  switch (action.type) {
    case "USER_SELECTED":
      return action.payload;
      break;
    default:
      return state;
  }
}
