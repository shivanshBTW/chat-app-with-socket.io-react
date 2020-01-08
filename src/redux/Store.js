import React from 'react'
import {Provider} from "react-redux";

const CTX = React.createContext();

export default function Store() {
   return (
      <CTX.Provider value={}>
         {props.children}
      </CTX.Provider>
   )
}