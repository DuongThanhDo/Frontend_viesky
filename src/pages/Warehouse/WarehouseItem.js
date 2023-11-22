import { useState } from 'react';

function WarehouseItem({ goods, setGoodsLocal, goodsLocal }) {
    const [statusEdit, setStatusEdit] = useState(false);
    const [inputName, setInputName] = useState(goods.name);
    const [inputUnit, setInputUnit] = useState(goods.unit);

    const handleCheckbox = (e) => {
        let tempGoods = goodsLocal.map((goodsItem) =>
            goodsItem.id === goods.id ? { ...goodsItem, isChecked: e.target.checked } : goodsItem,
        );
        setGoodsLocal(tempGoods);
    };

    return (
        <div className="flex items-center border-b">
            <div className="w-[80px] h-full flex items-center justify-center">
                <input
                    checked={goods?.isChecked || false}
                    onChange={handleCheckbox}
                    className="w-6 h-6 shadow-md cursor-pointer"
                    type="checkbox"
                />
            </div>
            <div className="w-full py-4 grid grid-cols-4 gap-1">
                <p className="text-[18px] border border-transparent bg-transparent font-normal text-center">
                    #{goods.id}
                </p>
                {statusEdit ? (
                    <>
                        <input
                            type="text"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            className="text-[18px] border border-black font-normal text-center"
                        />
                        <input
                            type="text"
                            value={inputUnit}
                            onChange={(e) => setInputUnit(e.target.value)}
                            className="text-[18px] border border-black font-normal text-center"
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            disabled
                            value={inputName}
                            className="text-[18px] border border-transparent bg-transparent font-normal text-center"
                        />
                        <input
                            type="text"
                            disabled
                            value={inputUnit}
                            className="text-[18px] border border-transparent bg-transparent font-normal text-center"
                        />
                    </>
                )}
                <div
                    onClick={() => setStatusEdit(!statusEdit)}
                    className="flex items-center justify-center cursor-pointer"
                >
                    {statusEdit ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={4}
                            stroke="currentColor"
                            className="w-7 h-7 text-green-400 drop-shadow-lg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 drop-shadow-lg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WarehouseItem;
