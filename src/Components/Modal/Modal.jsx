import React from 'react';
import "./modal.index.css"
import {unitArr} from "../../resourses";
import {UnitBox} from "../UnitBox/UnitBox";

export const Modal = ({modalActive, setModalActive, list, setList}) => {

    return <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <div className="list">{unitArr.map(item => <UnitBox list={list} setList={setList} setModalActive={setModalActive} key={item.id} item={item}/>)}
            </div>
        </div>
    </div>
}