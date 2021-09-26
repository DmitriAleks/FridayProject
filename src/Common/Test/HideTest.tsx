import React from 'react'

import Test from './Test'



const HideTest = () => {
    const testDataTable = [
        {
            "name": "999",
            "grade": 0,
            "shots": 1,
            "cardsCount": 0,
            "rating": 0,
        },
        {
            "name": "222",
            "grade": 0,
            "shots": 2,
            "cardsCount": 0,
            "rating": 0,
        },
        {
            "name": "333",
            "grade": 0,
            "shots": 0,
            "cardsCount": 3,
            "rating": 0,
        },
        {
            "name": "444",
            "grade": 0,
            "shots": 0,
            "cardsCount": 0,
            "rating": 4,
        }
    ]

    return (
        <div>
            <Test data={testDataTable} />
        </div>
    )
}
export default HideTest