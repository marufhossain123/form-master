import { useEffect, useRef } from "react";

const Refform = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    useEffect(() =>{
        nameRef.current.focus()
    },[])
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" placeholder="name"/><br />
            <input ref={emailRef} type="email" name="email" placeholder="email" /><br />
            <input ref={passwordRef} type="password" name="password" id="" placeholder="password"/>
            <br />
            <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default Refform;