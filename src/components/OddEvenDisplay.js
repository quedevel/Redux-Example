import React from 'react'
import { connect } from 'react-redux'

const OddEvenDisplay = (props) => {
    return (
        <div>
            <h1>ODD/EVEN: {props.text}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { text: state.count % 2 === 0 ? 'EVEN' : 'ODD' }
}

export default connect(mapStateToProps)(OddEvenDisplay)