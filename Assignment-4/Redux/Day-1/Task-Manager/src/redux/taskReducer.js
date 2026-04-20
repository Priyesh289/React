const initialState = {
    tasks: []
}

const taskManager = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, { id: Date.now(), text: action.payload, completed: false }]
            }
        case "TOGGLE_TASK":
            console.log('button hit')
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task)
            }
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state

    }
}
export default taskManager;