import React from "react"
import "./Second.css"
import Data from "./Data"

function Second(props) {

    const data = Data[props.getName]

    const [isChecked, setIsChecked] = React.useState(data)

    function handleClick(x) {
        let newData = isChecked.map((e) => {
            if (x.name === e.name) {
                if (x.status == true) {
                    return { ...e, name: x.name, status: !x.status, numb: 0 }
                } else return { ...e, name: x.name, status: !x.status, numb: 1 }

            } return e;
        })

        setIsChecked(newData)
        props.setCheckedData(newData)
    }

    function increment(x) {
        let newData = isChecked.map((e) => {
            if (x.name === e.name) {
                return { ...e, numb: x.numb + 1, status: true }
            } return e;
        })

        setIsChecked(newData)
        props.setCheckedData(newData)
    }

    function decrement(x) {
        let newData = isChecked.map((e) => {
            if (x.name === e.name) {
                if (x.numb === 1) {
                    return { ...e, numb: x.numb - 1, status: false }
                } else return { ...e, numb: x.numb - 1 }
            } return e;
        })

        setIsChecked(newData)
        props.setCheckedData(newData)
    }

    return (
        <div className="displayData">
            <ul>
                {isChecked.map(x => (
                    <li key={x.name}>
                        <input type="checkbox" name={x.name} checked={x.status} onChange={() => handleClick(x)} />
                        <label onClick={() => handleClick(x)} >{x.name}</label>
                        <div>
                            <button onClick={() => increment(x)}>+</button>
                            <input onChange={() => x.numb} value={x.numb} />
                            <button disabled={x.numb == 0 ? true : null} onClick={() => decrement(x)}>-</button>
                        </div>
                    </li>
                ))
                }

            </ul>

        </div>
    )
}

export default Second;