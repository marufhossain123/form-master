import { useState } from "react"

const useInputstate = (defaultvalue = null) =>{
    const [value,setvalue] = useState(defaultvalue);
    const onChange = e =>{
        setvalue(e.target.value);
    }
    return {
        value,
        onChange
    }

}
export default useInputstate;