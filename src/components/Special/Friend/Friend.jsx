import { useContext } from "react";
import { AssetContext } from "../../Grandpa/Grandpa";

const Friend = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Friend</h2>
            <h4>has:{gift}</h4>
        </div>
    );
};

export default Friend;