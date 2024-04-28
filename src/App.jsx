import React, {useEffect, useState} from 'react';
import "./App.css"
import './resourses';
import {Modal} from "./Components/Modal/Modal";
import {UnitCard} from "./Components/UnitCard/UnitCard";
import food from "./Components/UnitCard/img/food.webp";
import wood from "./Components/UnitCard/img/wood.webp";
import stone from "./Components/UnitCard/img/stone.webp";
import gold from "./Components/UnitCard/img/gold.webp";


function App() {

    const [modalActive, setModalActive] = React.useState(false);
    const [list, setList] = useState([]);
    const [totalFood, setTotalFood] = React.useState([]);
    const [totalWood, setTotalWood] = React.useState([]);
    const [totalStone, setTotalStone] = React.useState([]);
    const [totalGold, setTotalGold] = React.useState([]);


    useEffect(() => {
        setTotalFood(list.reduce((acc, cur) => acc + cur.food * cur.qty, 0));
        setTotalWood(list.reduce((acc, cur) => acc + cur.wood * cur.qty, 0));
        setTotalStone(list.reduce((acc, cur) => acc + cur.stone * cur.qty, 0));
        setTotalGold(list.reduce((acc, cur) => acc + cur.gold * cur.qty, 0));
    }, [list])


    return (
        <div className="App">

            <div className={"container"}>
                <Modal modalActive={modalActive} setModalActive={setModalActive} list={list} setList={setList}/>
                <div>{list.toSorted((a, b) => a.id - b.id).map(item => <UnitCard key={item.id} list={list}
                                                                                 setList={setList}
                                                                                 item={item}/>)}</div>
                <div className={"btn-box"}>
                    <button onClick={() => setModalActive(true)} className="addBtn">Add</button>
                    <button onClick={() => setList([])} className="addBtn">Clear</button>
                </div>
                <div className={list.length === 0 ? "totalResources hidden" : "totalResources"}>
                    <div className={"totalResources__pict"}>
                        <div className={"totalResources__img"}><img src={food}
                                                                    alt={"food"}/></div>
                        <span className={"totalResources__num"}>{totalFood}</span></div>
                    <div className={"totalResources__pict"}>
                        <div className={"totalResources__img"}><img src={wood}
                                                                    alt={"wood"}/></div>
                        <span className={"totalResources__num"}>{totalWood}</span></div>
                    <div className={"totalResources__pict"}>
                        <div className={"totalResources__img"}><img src={stone}
                                                                    alt={"stone"}/></div>
                        <span className={"totalResources__num"}>{totalStone}</span></div>
                    <div className={"totalResources__pict"}>
                        <div className={"totalResources__img"}><img src={gold}
                                                                    alt={"gold"}/></div>
                        <span className={"totalResources__num"}>{totalGold}</span></div>
                </div>

            </div>

        </div>

    );
}

export default App;
