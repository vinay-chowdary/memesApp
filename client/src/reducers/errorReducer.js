const errorReducer = (state = { status: false, message: "" }, action) => {
    switch (action.type) {
        case 'ERROR':
            state = { status: true, message: action.payload }
            return state
        default:
            return state
    }
}

export default errorReducer;