import React from 'react';
import {useDispatch,  useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { setIsLoggedInAC } from '../../Store/Reducers/LoginReducer';
import { AppRootStateType } from '../../Store/Store';
import s from './Navbar.module.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const isLoggedIn  = useSelector<AppRootStateType,boolean>(state=> state.login.isLoggedIn)
    const isAuth  = useSelector<AppRootStateType,boolean>(state=> state.app.isAuth)
    if(!isAuth) {
        console.log(isAuth)
        return <Redirect to={'/login'}/>
    }
    

    return (
        <div>
            <nav className={s.nav}>
                <div className={`${s.item}`}><NavLink  activeClassName={s.active} to={'/entrynewpassword'}>Entrynewpassword</NavLink></div>
                <div className={s.item}><NavLink  activeClassName={s.active} to={'/test'}>test</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/registration'}>Registration</NavLink></div>
                    <div className={s.item + ' ' + s.setting}><NavLink  activeClassName={s.active} to={'/login'}>Login</NavLink></div>
            </nav>
        </div>
    );
};

export default NavBar;