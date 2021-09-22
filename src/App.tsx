import React, { useEffect } from 'react';
import './App.css';
import {Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Registration } from './Pages/Registration/Registration';
import { PasswordRecovery } from './Pages/PasswordRecovery/PasswordRecovery';
import { NewPassword } from './Pages/EnteringNewPassword/NewPassword';
import { GlobalError } from './Common/Error/GlobalError';
import Test from './Common/Test/Test';
import { Profile } from './Pages/Profile/Profile';
import { api } from './Dal/Api';
import { authMeTC } from './Store/Reducers/AppReducer';
import {useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './Store/Store';
import NavBar from './Pages/NavBar/NavBar';


function App() {
    const dispatch = useDispatch()

    
    useEffect(()=>{
       dispatch(authMeTC())
        
    },[])
    
  return (
    <div className="App">
     <NavBar/>
      <Switch>
        <Route path={'/login'} render={() => <Login/>} />
        <Route path={'/registration'} render={() => <Registration/>}/>
        <Route path={'/profile'} render={() => <Profile/>}/>
        <Route path={'/404'} render={() => <GlobalError/>}/>
        <Route path={'/recoverypassword'} render={() => <PasswordRecovery/>}/>
        <Route path={'/entrynewpassword'} render={() => <NewPassword/>}/>
        <Route path={'/test'} render={() => <Test/>}/>
      </Switch>
    </div>
  );
}


export default App;
function useDispacth() {
    throw new Error('Function not implemented.');
}

