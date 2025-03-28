export const initialStore=()=>{
  return{
    // 3 variables for starwars api
    people:[],
    planets: [],
    vehicles: [],
    favorites: [],
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
 
 if(action.type == "my-likes"){
  if(store?.favorites.includes(action.payload)){return store}
  return{
    ...store,
    favorites: [...store.favorites,action.payload]
  }
 }
 
 if(action.type == "dislike"){
  return{
    ...store,
    favorites: store.favorites.filter((item)=> item != action.payload)
  }
 }
}
 
 
 
 
 
  
