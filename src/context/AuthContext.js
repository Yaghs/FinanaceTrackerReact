import { createContext, useEffect, useReducer } from 'react'
import { projectAuth } from '../firebase/config'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    //returns a new object to represent the state when logging in 
    case 'LOGIN':
        return {...state, user: action.payload}
    case 'LOGOUT':
        return {...state, user: null}
    case 'AUTH_IS_READY':
        return {...state, user: action.payload, authIsReady: true}
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { 
     //do we have a user currently logged in?
     user: null, 
     authIsReady: false
  })


  useEffect(() => {
    // check if the user is logged in
    const unsub = projectAuth.onAuthStateChanged((user)=>{
      dispatch({type: 'AUTH_IS_READY', payload: user})
      unsub()
    })
  },[])


  console.log('AuthContext state: ', state)
  
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}