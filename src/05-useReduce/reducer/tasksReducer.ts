//REDUCE SE PUEDE IMPLEMENTAR EN OTROS LENGUAJES NO ES DE REACT

import { compile } from "tailwindcss";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}



interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

//acciones como si fueran tipos
export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number } //payload el valor o argumento a una accion se le conoce como payload
    | { type: 'DELETE_TODO', payload: number }

//para darle acciones hay que hacerlo asi y we can add more actions, no hace falta el punto y coma

export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        pending: 0,
        length: 0
    }
}

//un reducer es una function que debe de regresar un nuevo estado basado en los argumentos, state y action
export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
    //siempre debe regresar lo mismo que el state, string,int, objetc, array, etc.
    //la accion es un objeto que permita un nuevo estado, no debemos modificarlo, solo con el estado va a ser retornador como si fuera un bucle.

    //recordar que siempre devuelve un state pore eso el return 
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            }
            //creamos el nuevo estado.
            //! no hacer -> state.todos.push(newTodo), si se hace asi no sabremos que hay cambios.
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1
            }
        }
        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter((todo) => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length
            }
        }
        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter(todo => todo.id !== action.payload); //el filter regresa un nuevo estado.
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload), //el filter regresa un nuevo estado.
                length: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length
            }

        }

        default: return state;
    }

    // return state;
}