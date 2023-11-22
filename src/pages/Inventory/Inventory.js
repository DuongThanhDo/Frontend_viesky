import InventoryHeader from './InventoryHeader';
import InventoryList from './InventoryList';
import InventoryItem from './InventoryItem';
import { useState } from 'react';
import { getLocal } from '~/functions/func_LocalStorage';

function Inventory() {
    const [receiptsLocal] = useState(getLocal('receipts'));
    return (
        <div className="h-full px-6 pt-2">
            <InventoryHeader />
            <InventoryList>
                {receiptsLocal.map((receipt) => {
                    return receipt.goods.map((goodsItem, index) => <InventoryItem dateAdd={receipt.date_added} key={index} items={goodsItem} />);
                })}
            </InventoryList>
        </div>
    );
}

export default Inventory;
