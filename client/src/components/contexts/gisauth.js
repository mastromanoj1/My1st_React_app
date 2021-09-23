import React, { createContext, useState,useEffect } from 'react';
import uuid from 'uuid/v1';

export const Gisauth = createContext();

const GisauthProvider = (props) => {

    

    const [isauth, setIsauth] = useState(false);

    return (
      <Gisauth.Provider value={[isauth, setIsauth]}>
        {props.children}
      </Gisauth.Provider>
    );
}
 
export default GisauthProvider;

