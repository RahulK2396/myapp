export const  STORE_SELECTED_DETAILS ="STORE_SELECTED_DETAILS"
export const REMOVE_ITEM = 'REMOVE_ITEM';


export function  storeSelectedItem(payload){
    console.log('action', payload)
    return{
        type: STORE_SELECTED_DETAILS,
         payload:payload
    }
}

export const removeItem = (itemId) => {
    return {
      type: REMOVE_ITEM,
      payload: itemId,
    }
}