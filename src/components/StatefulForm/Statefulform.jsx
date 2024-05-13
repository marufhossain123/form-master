import { useState } from "react";

const Statefulform = () => {
    const [name,setName] = useState('rojoni kanto');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        if(password.length < 6){
            setError('password must be 6 character')
        }else{
            setError('')
        }
        console.log(email,password,name);

    }
    const handlenameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailchange = e =>{

        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const handlepasswordChange = e =>{
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    return (
        <div>
               <form onSubmit={handleSubmit}>
            <input onChange={handlenameChange} value={name}
            type="text" name="name" placeholder="name"/><br />
            <input onChange={handleEmailchange}
            type="email" name="email" placeholder="email" /><br />
            <input onChange={handlepasswordChange}
             type="password" name="password" id="" placeholder="password" required/>
            <br />
            <input type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
            </form>
        </div>
    );
};

export default Statefulform;