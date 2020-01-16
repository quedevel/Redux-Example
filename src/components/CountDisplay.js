import React from 'react'
import { connect } from 'react-redux'

const CountDisplay = (props) => {

    return (
        <div className='CDiv'>
            <h1>COUNT: { props.count }</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(CountDisplay) 