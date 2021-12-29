/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

function Menu () {
    const [name, setName] = useState({namee: ''})
    const HandleSubmit = (event) => {
        console.log(name)
        alert('ten:' + name.ten)
        event.preventdefault();
    }
    const HandleChange  = (e) => {
        var value = e.target.value
        setName({ten: value})
    }
    return(
        <div>
            <form onSubmit={HandleSubmit}>
            <input type={'text'} placeholder="name" name="Ten" value={name.value} onChange={HandleChange}/>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Menu;
