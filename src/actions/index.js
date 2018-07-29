//object made of two part type and payload
//action creator
export const SelectUser = user => {
  console.log("You clicked on user - " + user.first);
  //action
  return {
    type: "USER_SELECTED",
    payload: user
  };
};
