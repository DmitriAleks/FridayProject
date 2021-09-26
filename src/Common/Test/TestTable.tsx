import React, {useEffect} from 'react';
import SuperInputText from './c1-SuperInputText/SuperInputText';
import SuperCheckbox from './c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './c2-SuperButton/SuperButton';
import {apiCart} from '../../Dal/Api';
import axios from 'axios';
import s from './Table.module.css'

type DataCardsProps = {
    name: string
    countCard: number
    grade: number
    shots: number
    rating: number
}

const Table = (props: DataCardsProps) => {

    return (
        <div>
            <div className={s.table}>
                <div>{props.name}</div>
                <div>{props.countCard}</div>
                <div>{props.grade}</div>
                <div>{props.shots}</div>
                <div>{props.rating}</div>
            </div>
        </div>
    );
};

export default Table;