import React ,{useContext,useEffect } from 'react';
import {Gcontext} from '../contexts/gauthcontext';
import { Gisauth } from '../contexts/gisauth';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../gauth/refreshToken';


const clientId =
  '627720389199-sc175r474srfs8an2ppegmcpke98o3id.apps.googleusercontent.com'

  function Login() {

    const [context, setContext] = useContext(Gcontext);
    const [isauth,setIsauth] = useContext(Gisauth);
 
    const onSuccess = (res) => {
        
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
          `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
        setContext(res.profileObj);
        setIsauth(true);        
        refreshTokenSetup(res);
    
  };

  

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  

  return (
    
    <Gcontext.Consumer>{ (vv) => {
     
      return(
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
      <p>{context.name}{console.log(isauth)}</p>
      
      
    </div>
      )
  }}</Gcontext.Consumer>
  );
}

export default Login;