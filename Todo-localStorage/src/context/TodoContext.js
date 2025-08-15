import { createContext,useContext } from "react";

export const TodoContext= createContext({
   todos:[
    {
        id:1,
        todo:"Hello",
        completed: false,
    },
   ],
    addTodo:(todos)=>{},
    updateTodo:(todos,id)=>{},
    deleteTodo:(todos,id)=>{},
    toggleTodo:(id)=>{}

})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider;


