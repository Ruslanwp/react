import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Hector</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Zack</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Collin</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Aang</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>John</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Ben</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>What is it?</div>
                <div className={s.dialog}>whats up?</div>
            </div>
        </div>
    )
}

export default Dialogs;