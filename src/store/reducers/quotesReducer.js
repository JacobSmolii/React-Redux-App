const initialState = {
    quote:'',
    isFetching: false,
    isError: false,
    error:''

}

export const quotesReducer = (state = initialState,action) => {
    switch (action.type) {
        case "FETCH_QUOTE_START":
            return {
                ...state,
                isFetching: true
            }
        case "FETCH_QUOTE_SECCESS":
            return {
                ...state,
                isFetching: false,
                 quote: action.payload,
                error: ""
            }
        case "FETCH_QUOTE_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
           return  state;
    }
}

