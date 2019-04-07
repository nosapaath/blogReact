// setting state to an empty for the first init of the reducers, we cant have the state be equal to undefined to start.
export default (state=[], action) => {
  switch(action.type){
    case('FETCH_POSTS') : 
      return action.payload;
    default:
      return state;
  }
};