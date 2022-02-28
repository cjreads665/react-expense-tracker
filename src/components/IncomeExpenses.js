import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const Balance =()=>{
  let {transactions} = useContext(GlobalContext)
  let min=0,sum=0
  transactions.forEach(tra=>{
    if(tra.amount<0){
      min = min-tra.amount
    }
    else{
      sum=sum+tra.amount
    }
  })
  
  

  return(
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">+₹{sum.toFixed(2)}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className="money minus">-₹{min.toFixed(2)}</p>
    </div>
  </div>
  )
}
export default Balance