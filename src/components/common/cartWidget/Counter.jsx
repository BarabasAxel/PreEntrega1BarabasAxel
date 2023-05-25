import { useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/Ai';

const  Counter = () => {
    
    const [contador, setContador] = useState(0)
    
    return(
        <div className="d-flex">
            <AiOutlineShoppingCart size="25px"/>
            <h2 onClick={()=> setContador(contador + 1)}>{contador}</h2>
        </div>
    )
}

export default Counter;