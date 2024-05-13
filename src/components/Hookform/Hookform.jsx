import useInputstate from "./Hooks/Useinput";

const Hookform = () => {
    const emailState = useInputstate('rojoni')
    const handleSubmit= e =>{
        console.log('form submitted', emailState.value);
   e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {/* <input value={name} onChange={handlenameChange} type="text" name="name" placeholder="name"/><br /> */}
            <input {...emailState} type="email" name="email" placeholder="email" /><br />
            <input type="password" name="password" id="" placeholder="password"/>
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;