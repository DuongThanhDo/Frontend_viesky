import { useState } from 'react';
import ExportedGoodsHeader from './ExportedGoodsHeader';
import ExportedGoodsList from './ExportedGoodsList';
import ExportedGoodsItem from './ExportedGoodsItem';
import { finalId } from '~/functions';
import { CreatePromissoryNote } from '~/components/Forms';
import { getLocal } from '~/functions/func_LocalStorage';

function ExportedGoods() {
    const [deliveryBillsLocal, setDeliveryBillsLocal] = useState(getLocal('deliveryBills'));

    const [formDeliveryBill, setFormDeliveryBill] = useState(false);

    const handleFormDeliveryBill = () => {
        setFormDeliveryBill(!formDeliveryBill);
    };

    const idNext = () => {
        let id_ =
            'd' +
            (Number(
                finalId(deliveryBillsLocal.lenth === 0 ? 0 : deliveryBillsLocal[deliveryBillsLocal.length - 1].id, 1),
            ) +
                1);
        return id_;
    };

    return (
        <div className="h-full">
            {formDeliveryBill && (
                <CreatePromissoryNote
                    idNext={() => idNext()}
                    act={'xuất'}
                    data={deliveryBillsLocal}
                    setData={setDeliveryBillsLocal}
                    onClick={handleFormDeliveryBill}
                />
            )}
            <div className="h-full px-6 pt-2">
                <ExportedGoodsHeader onClick={handleFormDeliveryBill} />
                <ExportedGoodsList>
                    {deliveryBillsLocal.map((deliveryBill, index) => (
                        <ExportedGoodsItem key={index} deliveryBill={deliveryBill} />
                    ))}
                </ExportedGoodsList>
            </div>
        </div>
    );
}

export default ExportedGoods;
