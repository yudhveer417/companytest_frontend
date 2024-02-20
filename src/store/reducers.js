const initialState = {
    tasks: [],
    task:null
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TASK':
        return {
          ...state,
          task: action.payload
        };
        case 'TASK_LIST':
        return {
          ...state,
          tasks: action.payload
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  