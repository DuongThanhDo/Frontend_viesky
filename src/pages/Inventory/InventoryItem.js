import { printDate } from "~/functions";

function InventoryItem({ items, dateAdd }) {
    return (
        <tr className="bg-white border-b">
            <td className="text-center py-[18px]">#{items.id}</td>
            <td className="w-[400px] text-center">{items.name}</td>
            <td className="text-center">{items.unit}</td>
            <td className="text-center">{items.quantity}</td>
            <td className="text-center">{dateAdd}</td>
            <td className="text-center">{printDate(new Date(items.date_expiry))}</td>
        </tr>
    );
}

export default InventoryItem;
