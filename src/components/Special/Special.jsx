import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
           <h2>Special</h2>
           <h5>has: {asset}</h5>
           <h5>has: {gift}</h5> 
        </div>
    );
};

export default Special;