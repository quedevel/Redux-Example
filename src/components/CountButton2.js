import React from 'react'

import { connect } from 'react-redux'

const CountButton2 = (props) => {
    return(
        <div>
            <button onClick={props.plus}>PLUS2</button>
            <button onClick={props.minus}>MINUS2</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        plus: () => dispatch({type:'PLUS'}),
        minus: () => dispatch({type:'MINUS'})
    }
}

export default connect(null, mapDispatchToProps)(CountButton2)