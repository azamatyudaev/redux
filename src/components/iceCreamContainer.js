import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

const iceCreamContainer = (props) => {
  console.log(props)

  return (
    <div>
      <h2>Number of Ice Creams - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Creams</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(iceCreamContainer)