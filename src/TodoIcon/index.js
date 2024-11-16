import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import './TodoIcon.css'
const iconTypes = {
    "check":(color) => <FaCheck fill={color}/>,
    "delete":(color) => <ImCross fill={color}/>
}
function TodoIcon({type, color, onClick}){
    return(
        <span className={`Icon Icon-${type} `}
        onClick={onClick}>
            
            {iconTypes[type](color) }
        </span>
    )
}
export {TodoIcon};