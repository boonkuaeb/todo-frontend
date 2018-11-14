const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_TODO':
            return action.data;
        case 'IS_PIN':
            return state.map((todo) => {
                if (todo.id === action.data.id) {
                    todo.isPin = action.data.isPin;
                    return todo;
                }
                return todo;
            });
        case 'IS_SUCCESS':
            return state.map((todo) => {
                if (todo.id === action.data.id) {
                    todo.isSuccess = action.data.isSuccess;
                    return todo;
                }
                return todo;
            });
        default:
            return state
    }
};

export default todoReducer;
