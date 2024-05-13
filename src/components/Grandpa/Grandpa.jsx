import { createContext, useState } from "react";
import Dad from "./Dad/Dad";
import Aunt from "./Dad/Uncle/Aunt/Aunt";
import Uncle from "./Dad/Uncle/Uncle";
import './Grandpa.css';

export const AssetContext = createContext('mobile')
export const MoneyContext = createContext(1000)


const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
<MoneyContext.Provider value={[money,setMoney]}>
<AssetContext.Provider value="gold" >
     <section className="flex">
            <Dad asset={asset} ></Dad>
            <Uncle asset={asset} ></Uncle>
            <Aunt></Aunt>
         </section>
     </AssetContext.Provider>
</MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;