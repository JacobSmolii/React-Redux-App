import React, {useEffect} from "react";
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import {fetchQuote} from "../store/actions/quoteActions";

const JokeQuote = (props) => {
    useEffect(() => {
        //call an action creator
        props.fetchQuote()

    },[])

    // if(props.isFetching){
    //     return <Loader/>
    // }


    return(
        <div>
            <h1>Joke:</h1>
            {props.isFetching && <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}

            />}

            {props.quote && <h3 className="test">{props.quote}</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={props.fetchQuote}>Fetch a new data</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
        return{
            quote:state.quotes.quote,
            isFetching: state.quotes.isFetching,
            error:state.quotes.error
        }
}

export default connect(mapStateToProps,{fetchQuote})(JokeQuote)