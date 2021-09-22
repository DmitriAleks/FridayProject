import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authMe } from '../../Store/Reducers/AppReducer';
import { setIsLoggedInAC } from '../../Store/Reducers/LoginReducer';
import { UserType } from '../../Store/Reducers/ProfileReducer';
import { AppRootStateType } from '../../Store/Store';


export const Profile = () => {
//  const status = useSelector<AppRootStateType,boolean>(state=>state.app.isAuth)
  const dispatch = useDispatch()
 const isLogout = () => dispatch(authMe(false))
  const user = useSelector<AppRootStateType, UserType>(state=>state.profile)
  
  // if(status) {
  //   return <Redirect to={'/login'}/>
  // }
  return (
    <div>
    <>
      {user.name}
      <button onClick={isLogout}>logout</button>
    </>
       </div>

  );
}