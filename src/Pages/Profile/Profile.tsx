import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {authMe} from '../../Store/Reducers/AppReducer';
import {setIsLoggedInAC} from '../../Store/Reducers/LoginReducer';
import {UserType} from '../../Store/Reducers/ProfileReducer';
import {AppRootStateType} from '../../Store/Store';
import style from './Profile.module.css'
import anonimPhoto from '../../Images/anonimUsers.jpg'


export const Profile = () => {
    const dispatch = useDispatch()
    const isLogout = () => dispatch(authMe(false))
    const user = useSelector<AppRootStateType, UserType>(state => state.profile)


    return (
        <div className={style.profile}>
            <div className={style.user}>
                <div>
                    {!user.avatar && <img src={anonimPhoto}/>}
                </div>
                <div className={style.a}>
                    {user.name}
                    <div>Frontend Developer </div>
                </div>
                <button onClick={isLogout}>logout</button>
            </div>
            <div className={style.table}>
                {user.email}
            </div>
        </div>


    );
}