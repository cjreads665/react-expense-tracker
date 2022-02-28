import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//inital state
const initialState = {
  transactions : [

  ]
}

const GlobalContext = createContext(initialState)

const GlobalProvider = ({children})=>{
  //initialState will get stored in state
  //dispatch will contain the appreducer function
  const [state,dispatch] = useReducer(AppReducer, initialState)
  //Actions
  function deleteTransaction(id){
    //passing the action object directly to dispatch function
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload: id
    })
  }
  function addTransaction(transaction){
    //passing the action object directly to dispatch function
    dispatch({
      type : 'ADD_TRANSACTION',
      payload: transaction
    })
  }
//what the global context will provide to all the components inside it
  return (
    <GlobalContext.Provider value={{
      transactions : state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
export {GlobalContext, GlobalProvider}
