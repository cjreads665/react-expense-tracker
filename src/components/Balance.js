import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance =()=>{
  let {transactions} = useContext(GlobalContext)
  let counter = 0
  transactions.forEach(tra=>{
      counter = counter+tra.amount
  })
  
  return(
    <div>
    <h4>Your Balance</h4>
    <h1>₹{counter.toFixed(2)}</h1>
    </div>
  )
}
export default Balance