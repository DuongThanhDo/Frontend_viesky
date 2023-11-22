import { useEffect, useState } from 'react';
import { BlurredBackground } from '~/components/BlurredBackground';
import { Button } from '~/components/Button';
import { units } from '~/datas/dataWarehouse';

function WarehouseList({
    children,
    id,
    setFormAddGoods,
    formAddGoods,
    setGoodsItem,
    goodsLocal,
    setGoodsLocal,
    checkboxAll,
    setCheckboxAll,
}) {
    const [inputName, setInputName] = useState('');
    const [inputUnit, setInputUnit] = useState(units[0]);

    useEffect(() => {
        setInputName('');
        setInputUnit(units[0]);
    }, [formAddGoods]);

    const handleSave = () => {
        const goodsItem = {};
        goodsItem.id = id;
        goodsItem.name = inputName;
        goodsItem.unit = inputUnit;
        setGoodsItem(goodsItem);
        setFormAddGoods(false);
        alert('Thêm thành công');
    };

    const handleOnChangAll = (e) => {
        let tempGoods = goodsLocal.map((goodsItem) => ({ ...goodsItem, isChecked: e.target.checked }));
        setCheckboxAll(e.target.checked);
        setGoodsLocal(tempGoods);
    };

    return (
        <div className=" h-[73%] bg-black z-10">
            {formAddGoods && (
                <BlurredBackground onClick={() => setFormAddGoods(false)}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[600px] h-[400px] bg-white rounded-xl shadow-2xl py-6 px-10 grid grid-cols-1"
                    >
                        <h1 className="text-[26px] font-medium">
                            <i>Thêm hàng hóa</i>
                        </h1>
                        <p className="text-[18px] font-medium">
                            Mã hàng hóa<span className="text-blue-600 ml-[100px]">#{id}</span>
                        </p>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[18px]">Tên hàng hóa</p>
                            <input
                                value={inputName}
                                onChange={(e) => setInputName(e.target.value)}
                                className="w-[60%] h-[40px] border border-black outline-none rounded-md px-3"
                            />
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <p className="text-[18px]">Đơn vị tính</p>
                            <select
                                onChange={(e) => setInputUnit(e.target.value)}
                                className="w-[60%] h-[40px] border border-black outline-none rounded-md px-3 cursor-pointer"
                                name="unit"
                                id="unit"
                            >
                                {units.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end items-center">
                            <Button confirm onClick={handleSave}>
                                Lưu
                            </Button>
                            <span className="mx-5"></span>
                            <Button onClick={() => setFormAddGoods(false)} cancel>
                                Hủy
                            </Button>
                        </div>
                    </div>
                </BlurredBackground>
            )}
            <div className="h-[100%]">
                <div className="flex items-center bg-green-500 border-b">
                    <div className="w-[80px] h-full flex items-center justify-center">
                        <input
                            checked={checkboxAll}
                            onChange={handleOnChangAll}
                            className="w-7 h-7 shadow-md cursor-pointer"
                            type="checkbox"
                        />
                    </div>
                    <div className="w-full py-5 grid grid-cols-4">
                        <p className="text-[18px] text-white font-medium text-center">Mã hàng hóa</p>
                        <p className="text-[18px] text-white font-medium text-center">Tên hàng hóa</p>
                        <p className="text-[18px] text-white font-medium text-center">Đơn vị tính</p>
                        <p className="text-[18px] text-white font-medium text-center">#</p>
                    </div>
                </div>
                <div className="h-full bg-white overflow-x-scroll hide-scrollbar">{children}</div>
            </div>
        </div>
    );
}

export default WarehouseList;
