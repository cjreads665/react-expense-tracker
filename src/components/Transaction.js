import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
  let sign = transaction.amount < 0? '-':'+'
  return (
    <li className={sign=='+'?'plus':'minus'}>
    {transaction.text} <span>{sign}₹{Math.abs(transaction.amount).toFixed(2)}</span><button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
  </li>
  )
}
