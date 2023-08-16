import { REMOVE_ITEM, STORE_SELECTED_DETAILS } from "./action";

const initialState = {
    selectedItems: []
}
const popularReducer = (state = initialState, action) => {
    console.log('reducer', action.payload)
    switch (action.type) {

        case STORE_SELECTED_DETAILS:
            return {
                ...state,
                selectedItems: [...state.selectedItems, action.payload],
            };
        case REMOVE_ITEM:
            const updatedItems = state.selectedItems.filter(item => item.title !== action.payload.title);
            return {
                ...state,
                selectedItems: updatedItems,
            };
        default:
            return state;
    }
}
export default popularReducer;