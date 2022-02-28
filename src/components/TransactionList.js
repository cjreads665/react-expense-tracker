import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'
const TransactionList =()=>{
  //getting the initial state and storing it in context
  //we later destructure the context in transactions
  const {transactions} = useContext(GlobalContext)
  
  
  return(
    <>
    <h3>History</h3>
      <ul className="list">
        {/**taking each transaction and mapping them to Transaction component for each object inside */}
        {transactions.map(transaction=>(
         <Transaction transaction={transaction} key={transaction.id}/>
        ))}
      </ul>
      </>
  )
}
export default TransactionList