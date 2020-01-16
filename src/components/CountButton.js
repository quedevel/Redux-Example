import React from 'react'
import { connect } from 'react-redux'

const CountButton = ({dispatch}) => {

    const handlePlus = () => { dispatch({type:'PLUS'}) }
    const handleMinus = () => { dispatch({type:'MINUS'}) }

    return (
        <div>
            <button onClick={handlePlus}>PLUS</button>
            <button onClick={handleMinus}>MINUS</button>
        </div>
    )
}
export default connect()(CountButton)  