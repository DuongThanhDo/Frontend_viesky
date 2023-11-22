import { goods } from "~/datas/dataWarehouse";
import InventoryControlHeader from "./InventoryControlHeader";
import InventoryControlList from "./InventoryControlList";
import InventoryControlItem from "./InventoryControlItem";

function InventoryControl() {
    return ( 
        <div className="h-full px-6 pt-2">
            <InventoryControlHeader />
            <InventoryControlList>
                {goods.map((items, index) => (
                    <InventoryControlItem key={index} items={items}/>
                ))}
            </InventoryControlList>
        </div>
    );
}

export default InventoryControl