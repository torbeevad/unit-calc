import React, {useState} from 'react';
import "./input.css"

export const Input = ({inputActive, setInputActive, setModalActive, list, setList, item}) => {

    const [value, setValue] = useState(0);


    return <form key={item.id} className={inputActive ? "input__box active" : "input__box"}>
        <input type={"numeric"} min={0} className="input" onChange={e => setValue(Number(e.target.value))}/>
        <button className="input__btn" type="submit" onClick={(e) => {
            e.preventDefault();
            setList([...list.filter(it => it.id !== item.id), {...item, qty: value}]);
            console.log(value)
            setModalActive(false)
            console.log(list)
        }}>+
        </button>
    </form>
}