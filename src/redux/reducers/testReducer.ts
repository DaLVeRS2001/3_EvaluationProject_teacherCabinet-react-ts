


const TEST = 'TEST'


const initialState = {
    test: ''
}


const testReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                test: action.test
            }
        default:
            return state
    }
}

//ACTIONS




//THUNKS



export default testReducer