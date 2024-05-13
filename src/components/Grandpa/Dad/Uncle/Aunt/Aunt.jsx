import { useContext } from "react";
import Cousin from "../../../../Cousin/Cousin";
import { MoneyContext } from "../../../Grandpa";

const Aunt = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Robi'} ></Cousin>
                <Cousin name={'sukkur'} ></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money+1000)}>Add Money</button>
        </div>
    );
};

export default Aunt;