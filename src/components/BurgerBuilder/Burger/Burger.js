import React from 'react'
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient'


const burger = (props) => {

    let ingredients = [
        {
            label: 'Salad',
            count: 1
        },
        {
            label: 'Meat',
            count: 0
        },
    ]
    return (
        <div className={classes.Burger}>
            <Ingredient type='BreadTop' />
            <Ingredient type='BreadBottom' />
        </div>

    )
}
export default burger