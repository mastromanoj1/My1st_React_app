import React ,{useContext,useEffect }from 'react';
import { GoogleLogout } from 'react-google-login';
import {Gcontext} from '../contexts/gauthcontext';
import {Gisauth} from '../contexts/gisauth';

const clientId =
  '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function Logout() {

  const [context, setContext] = useContext(Gcontext);
  const [isauth,setIsauth] = useContext(Gisauth);


  const onSuccess = () => {
    console.log('Logout made successfully');
    // alert('Logout made successfully ✌');
    setContext({name:"1234567789"});
    setIsauth(false);
  };

  

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;