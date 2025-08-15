// import React, { useState } from 'react'
// import { useTodo } from '../context/TodoContext';

// function TodoForm() {
//     const [todo, settodo] = useState([])
//     const { addTodo } = useTodo()

//     const add = (event) => {
//         event.preventDefault()
//         if (!todo) {
//             todo
//         }
//         addTodo({ todo, completed: false })
//         settodo(" ")
//     }

//     return (
//         <form onSubmit={add} className="flex items-center w-full max-w-lg mx-auto bg-white/30 backdrop-blur-md rounded-lg shadow-md overflow-hidden">
//             <input
//                 type="text"
//                 placeholder="✏️ Write your todo..."
//                 className="flex-1 px-4 py-2 bg-transparent outline-none placeholder-gray-500 text-gray-800 focus:ring-2 focus:ring-green-400"
//                 value={todo}
//                 onChange={(event) => settodo(event.target.value)}
//             />
//             <button
//                 type="submit"
//                 className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-medium transition-all duration-200"
//             >
//                 ➕ Add
//             </button>
//         </form>
//     );
// }

// export default TodoForm;
import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, settodo] = useState([])
    const { addTodo } = useTodo()

    const add = (event) => {
        event.preventDefault()
        if (!todo) return;
        addTodo({ todo, completed: false })
        settodo("")
    }

    return (
        <form
            onSubmit={add}
            className="flex items-center w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
            <input
                type="text"
                placeholder="Write your next task..."
                className="flex-1 px-4 py-3 text-gray-800 placeholder-gray-400 bg-transparent outline-none focus:ring-2 focus:ring-indigo-400"
                value={todo}
                onChange={(event) => settodo(event.target.value)}
            />
            <button
                type="submit"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all duration-200"
            >
                Add Task
            </button>
        </form>
    );
}

export default TodoForm;
