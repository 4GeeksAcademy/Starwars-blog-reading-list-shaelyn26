export const initialStore=()=>{
  return{
    // 3 variables for starwars api
    people:[],
    planets: [],
    vehicles: [],
  }
}

export default function storeReducer(store, action = {}) {
 
 if(action.type == "set-people"){
  console.log("wheres my payload", action.payload)
  return {
    ...store,
    people: action.payload
 }
 }

 if(action.type =="set-planets"){
  return{
    ...store,
    planets: action.payload
  }
 }
 
 if(action.type == "set-vehicles"){
  return{
    ...store,
    vehicles: action.payload
  }
 }
 
 
 
 
 
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
