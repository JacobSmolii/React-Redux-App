//thunk
import axios from 'axios';


export const fetchQuote = () => {
    return dispatch => {
        dispatch({type: "FETCH_QUOTE_START"})
        axios.get("https://quote-garden.herokuapp.com/api/v2/quotes/random/")
            .then(res => {
                console.log(res)
                dispatch({type: "FETCH_QUOTE_SECCESS",payload:res.data.quote.quoteText})
            })
            //res.data.quote.quoteText
            .catch(err => {
                dispatch({type:"FETCH_QUOTE_FAILURE",payload: `Error ${err.status}`})
            });
    }
}
