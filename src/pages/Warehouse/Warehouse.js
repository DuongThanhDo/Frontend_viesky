/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import WarehouseHeader from './WarehouseHeader';
import WarehouseItem from './WarehouseItem';
import WarehouseList from './WarehouseList';
import { finalId } from '~/functions';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

function Warehouse() {
    const [goodsLocal, setGoodsLocal] = useState(getLocal('goods'));

    const [formAddGoods, setFormAddGoods] = useState(false);
    const [goodsItem, setGoodsItem] = useState({ id: '', name: '', unit: '' });
    const [createId, setCreateId] = useState('');
    const [checkboxAll, setCheckboxAll] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        if (goodsItem.id === '') return;
        setLocal('goods', [...goodsLocal, goodsItem])
        setGoodsLocal(getLocal('goods'));
        setGoodsItem({ id: '', name: '', unit: '' });
    }, [goodsItem]);

    return (
        <div className="px-6 h-full pt-2">
            <WarehouseHeader
                setCheckboxAll={setCheckboxAll}
                goodsLocal={goodsLocal}
                setGoodsLocal={setGoodsLocal}
                finalId={() => finalId(goodsLocal.length === 0 ? 0 : goodsLocal[goodsLocal.length - 1].id, 1)}
                setCreateId={setCreateId}
                setFormAddGoods={setFormAddGoods}
            />
            <WarehouseList
                id={createId}
                checkboxAll={checkboxAll}
                setCheckboxAll={setCheckboxAll}
                setGoodsLocal={setGoodsLocal}
                goodsLocal={goodsLocal}
                setGoodsItem={setGoodsItem}
                formAddGoods={formAddGoods}
                setFormAddGoods={setFormAddGoods}
            >
                {goodsLocal.map((goods, index) => (
                    <WarehouseItem setGoodsLocal={setGoodsLocal} goodsLocal={goodsLocal} key={index} goods={goods} />
                ))}
            </WarehouseList>
        </div>
    );
}

export default Warehouse;
