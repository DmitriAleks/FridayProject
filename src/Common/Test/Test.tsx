import React, {useEffect} from 'react';
import SuperInputText from './c1-SuperInputText/SuperInputText';
import SuperCheckbox from './c3-SuperCheckbox/SuperCheckbox';
import SuperButton from './c2-SuperButton/SuperButton';
import {apiCart} from '../../Dal/Api';
import axios from 'axios';
import s from './Test.module.css'
import Table from './TestTable';
 export type testDataProps ={
     data: Array<testObjType>
 }



 export type testObjType = {
    "name": string,
    "grade": number,
    "shots": number,
    "cardsCount": number,
    "rating": number,
}

const Test = (props: testDataProps) => {
    useEffect(() => {
        axios.get('http://localhost:7542/2.0/cards/pack?user_id=5eb543f6bea3ad21480f1ee7')
            .then((res) => {
                console.log(res)
            })
    })
    return (
        <div>
            <div className={s.headerTable}>
                <div style={{'backgroundColor': 'blue'}}>Name</div>
                <div style={{'backgroundColor': 'orange'}}>CardsCount</div>
                <div style={{'backgroundColor': 'yellow'}}>Update</div>
                <div style={{'backgroundColor': 'silver'}}>URL</div>
                <div style={{'backgroundColor': 'sienna'}}>Added</div>
            </div>
            {props.data.map((el)=>    <Table name={el.name} countCard={el.cardsCount}
                                             shots={el.shots} grade={el.grade} rating={el.rating} />)}

        </div>
    );
};
const testData = {
    "cardPacks": [{
        "_id": "6150916b2c72d7294c82d555",
        "user_id": "60b4ae9724476f0b043efea8",
        "user_name": "victor_bars_bars95@mail.ru",
        "private": false,
        "name": "999",
        "path": "/def",
        "grade": 0,
        "shots": 0,
        "cardsCount": 0,
        "type": "pack",
        "rating": 0,
        "created": "2021-09-26T15:27:39.108Z",
        "updated": "2021-09-26T15:27:39.108Z",
        "more_id": "60b4ae9724476f0b043efea8",
        "__v": 0
    }],
    "page": 1,
    "pageCount": 4,
    "cardPacksTotalCount": 2757,
    "minCardsCount": 0,
    "maxCardsCount": 103,
    "token": "9ece97d0-1eeb-11ec-8b8f-d9ff01ee5ea4",
    "tokenDeathTime": 1632686587213
}
export default Test;