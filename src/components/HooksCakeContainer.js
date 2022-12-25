import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
  const dispatch = useDispatch()
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)

  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer