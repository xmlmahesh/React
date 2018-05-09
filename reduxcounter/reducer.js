
//reducer
function counter(state, action)
{
  if(state === undefined)
  {
    return {count:0};
  }

  var count = state.count;

  switch (action.type)
  {
    case "increase":
        return {count : count + 1};
      break;

    case "decrease":
        return {count: count -1 };
      break;

    default:
      return state;
  }
}

export default counter;
