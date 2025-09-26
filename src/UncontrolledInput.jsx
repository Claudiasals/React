// Es. 14 UncontrolledInput
import {useRef} from "react";

const UncontrolledInput = () => {
 const inputRef = useRef();

 

 return (
        <input ref={inputRef} type="text"/>
);
};

export default UncontrolledInput;
