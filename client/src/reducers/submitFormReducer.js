const submitFormReducer = (state = { status: false, message: "" }, action) => {
    switch (action.type) {
        case 'ON_SUCCESS':
            state = { status: false, message: "Success" };
            return state
        case 'ON_ERROR':
            state = { status: true, message: action.payload }
            return state
        case 'SET_TO_DEFAULT':
            state = { status: false, message: "" }
            return state
        default:
            return state
    }
}

export default submitFormReducer;