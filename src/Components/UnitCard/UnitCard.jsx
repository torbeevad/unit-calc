import React from 'react';
import food from "./img/food.webp"
import wood from "./img/wood.webp"
import stone from "./img/stone.webp"
import gold from "./img/gold.webp"
import "./unitCard.css";

export const UnitCard = ({item, list, setList}) => {
    const deleteUnit = (e) => {
        e.stopPropagation();
        setList(list.filter(item => item.id !== Number(e.target.id)));
    }

    return <div className={"unit-card"}>
        <div className={"unit-card__left"}>
            <div className={"unit-card__pict-left"}>
                <img id={item.id} onClick={deleteUnit} className={"unit-card__img-left"} src={item.image}
                     alt={item.name}/>
                <span className={"unit-card__qty"}>{item.qty}</span>
            </div>
            <div className={"unit-card__disc"}>{item.name}</div>
        </div>
        <div className={"unit-card__right"}>
            <div className={"unit-card__pict"}>
                <div className={"unit-card__img-right"}><img src={food}
                                                             alt={"food"}/></div>
                <span>{item.food * item.qty}</span></div>
            <div className={"unit-card__pict"}>
                <div className={"unit-card__img-right"}><img src={wood}
                                                             alt={"wood"}/></div>
                <span>{item.wood * item.qty}</span></div>
            <div className={"unit-card__pict"}>
                <div className={"unit-card__img-right"}><img src={stone}
                                                             alt={"stone"}/></div>
                <span>{item.stone * item.qty}</span></div>
            <div className={"unit-card__pict"}>
                <div className={"unit-card__img-right"}><img src={gold}
                                                             alt={"gold"}/></div>
                <span>{item.gold * item.qty}</span></div>
        </div>
    </div>
}