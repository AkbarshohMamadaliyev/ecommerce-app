const ADD_ITEM = 'ADD_ITEM';
const DEL_ITEM = 'DEL_ITEM';


export function addItem(product) {
    return {
        type: ADD_ITEM,
        payload: product
    }
}

export function delItem(product) {
    return {
        type: DEL_ITEM,
        payload: product
    }
}




