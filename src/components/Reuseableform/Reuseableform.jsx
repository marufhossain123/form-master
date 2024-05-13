

const Reuseableform = ({formtitle, handleSubmit, btnsubmittext= 'Submit', children}) => {
  const handleLocalsubmit = e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data)
  }
    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handleLocalsubmit}>
            <input type="text" name="name" placeholder="name"/><br />
            <input type="email" name="email" placeholder="email" /><br />
            <input type="password" name="password" id="" placeholder="password"/>
            <br />
            <input type="submit" value={btnsubmittext} />
            </form>
        </div>
    );
};

export default Reuseableform;