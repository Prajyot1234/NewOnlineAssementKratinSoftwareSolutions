export const initialState = {
    theme : "dark",
}

//reducer with chage state function.
export const reducer = ( state , action ) => {
    switch (action.type) {
        case "SET_THEME":
            return(
                {
                    ...state,
                    theme : action.theme,
                }
            );
    
        default:
            return state ;
    }
}

export default reducer;