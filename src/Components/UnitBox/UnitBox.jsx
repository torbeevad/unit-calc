import React, {useState} from 'react';
import "./unitBox.css"

import {Input} from "../Input/Input";

export const UnitBox = ({item, setModalActive, list, setList}) => {

    const [inputActive, setInputActive] = useState(false);


    return <div className="img-box" onClick={() => setInputActive(true)}><img className={"unit-box__pict"} src={item.image} alt="pic"/>
        <Input list={list} setList={setList} inputActive={inputActive} setInputActive={setInputActive}
               setModalActive={setModalActive} item={item}/>
    </div>

}