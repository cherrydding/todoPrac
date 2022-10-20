

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"
const UPDATE_TODO = "UPDATE_TODO"



export const addTodo = (payload) => {
  console.log('d',payload)
  return{
    type: ADD_TODO,
    payload
  };
}

export const deleteTodo = (payload) => {

  return{
    type: DELETE_TODO,
    payload
  };
}

export const updateTodo = (payload) => {

  return{
    type: UPDATE_TODO,
    payload
  };
}




const initialState = [{
    id: 1,
    title: "제목",
    content: "내용",
    isDone: false
  },{
    id: 2,
    title: "제",
    content: "내",
    isDone:false
  }];
  

  const todos = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        console.log('a',action)
        return [...state,action.payload]

      case DELETE_TODO:
        return state.filter((a)=>{return a.id !== action.payload})

        case UPDATE_TODO:
          return state.map((item)=>{
            if(item.id === action.payload){
              return {...item, isDone:!item.isDone}
            } else{
              return item
            }
          })

          
      default:
        return state;
    }
  };
  
  
  export default todos;