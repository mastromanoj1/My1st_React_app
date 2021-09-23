import React, { createContext, useState,useEffect } from 'react';
import uuid from 'uuid/v1';

export const Gcontext = createContext();

const GcontextProvider = (props) => {

    

    const [context, setContext] = useState({
      name:"12",
    });

    return (
      <Gcontext.Provider value={[context, setContext]}>
        {props.children}
      </Gcontext.Provider>
    );
}
 
export default GcontextProvider;