const ADD_ITEM = 'ADD_ITEM';
const DEL_ITEM = 'DEL_ITEM';


const initialState = [];

const cartReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                action.payload
            ]
            break;

        case DEL_ITEM:
            return state = state.filter((item) => {
                return item.id !== action.payload.id
            })
            break;

        default: return state;
            break;
    }
}

export default cartReducer;


