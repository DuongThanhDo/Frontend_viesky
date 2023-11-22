import { useState } from 'react';
import ImportedGoodsHeader from './ImportedGoodsHeader';
import ImportedGoodsList from './ImportedGoodsList';
import ImportedGoodsItem from './ImportedGoodsItem';
import { finalId } from '~/functions';
import { CreatePromissoryNote } from '~/components/Forms';
import { getLocal } from '~/functions/func_LocalStorage';

function ImportedGoods() {
    const [receiptsLocal, setReceiptsLocal] = useState(getLocal('receipts'));

    const [formReceipts, setFormReceipts] = useState(false);

    const handleFormReceipts = () => {
        setFormReceipts(!formReceipts);
    };

    const idNext = () => {
        let id_ = 'r' + (Number(finalId(receiptsLocal.lenth ===0 ? 0 : receiptsLocal[receiptsLocal.length - 1].id, 1)) + 1);
        return id_;
    };

    return (
        <div className="h-full">
            {formReceipts && (
                <CreatePromissoryNote
                    idNext={() => idNext()}
                    act={'nhập'}
                    data={receiptsLocal}
                    setData={setReceiptsLocal}
                    onClick={handleFormReceipts}
                />
            )}
            <div className="h-full px-6 pt-2">
                <ImportedGoodsHeader onClick={handleFormReceipts} />
                <ImportedGoodsList>
                    {receiptsLocal.map((receipt) => (
                        <ImportedGoodsItem key={receipt.id} receipt={receipt} />
                    ))}
                </ImportedGoodsList>
            </div>
        </div>
    );
}

export default ImportedGoods;
