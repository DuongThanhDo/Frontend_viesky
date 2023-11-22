import { useEffect, useState } from 'react';
import { BlurredBackground } from '~/components/BlurredBackground';
import { Button } from '~/components/Button';
import { suppliers } from '~/datas';
import { changeDate, printDate } from '~/functions';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';

const nD = new Date();
var nDExpiry = new Date();

function CreatePromissoryNote({ onClick, setData, data, idNext, act }) {
    const [goodsLocal] = useState(getLocal('goods'));

    const [goods_, setGoods_] = useState([]);
    const [quantity_, setQuantity_] = useState(1);
    const [inputPrice, setInputPrice] = useState(0);
    const [inputExpiry, setInputExpiry] = useState(0);
    const [id_, setId_] = useState(goodsLocal[0].id);
    const [suppliers_, setSuppliers_] = useState(suppliers[0].name);
    const [goodsAct, setGoodsAct] = useState(goodsLocal.filter((item) => item.id === id_)[0]);
    const [addGoods, setAddGoods] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setGoodsAct(goodsLocal.filter((item) => item.id === id_)[0]);
        nDExpiry.setDate(nDExpiry.getDate() + goodsAct.date_expiry);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id_]);

    useEffect(() => {
        setTotal(goods_.reduce((t, item) => item.price * item.quantity + t, 0));
    }, [goods_]);

    const handleAddGoods = () => {
        if (addGoods) {
            let tempGoods = {
                id: id_,
                name: goodsAct.name,
                unit: goodsAct.unit,
                quantity: quantity_,
                price: inputPrice,
                date_expiry: printDate(changeDate(new Date(), inputExpiry)),
            };

            setInputExpiry(0);
            setInputPrice(0);
            setGoods_([...goods_, tempGoods]);
            setId_(goodsLocal[0].id);
            setQuantity_(1);
            setAddGoods(false);
        }
    };

    const handleDelete = (index) => {
        let tempGoods = goods_;
        tempGoods.splice(index, 1);
        setGoods_([...tempGoods]);
    };

    const handleConfirm = () => {
        let data_ = {};
        data_.id = idNext();
        if (act === 'nhập') {
            data_.date_added = printDate(nD);
            data_.supplier = suppliers_;
            data_.goods = [...goods_];
            setLocal('receipts', [...data, data_]);
        } else if (act === 'xuất') {
            data_.date_get_goods = printDate(nD);
            data_.goods = [...goods_];
            setLocal('deliveryBills', [...data, data_]);
        }
        setData([...data, data_]);
        onClick();
    };

    return (
        <div>
            <BlurredBackground onClick={onClick}>
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-[900px] bg-white shadow-xl rounded-2xl px-8 py-10"
                >
                    <h1 className="text-[28px] font-medium mb-4">Tạo phiếu {act} kho</h1>
                    <div className="border-b border-black pb-4">
                        <div className="font-medium text-[18px] flex items-center justify-between mb-4">
                            <p>
                                Mã phiếu: <span className="text-red-500">#{idNext()}</span>
                            </p>
                            <p>
                                Ngày {act}: <span className="text-red-500">{printDate(new Date(nD))}</span>
                            </p>
                        </div>

                        {act === 'nhập' && (
                            <div className="flex items-center gap-4 mb-4">
                                <p className="font-medium text-[18px]">Nhà cung cấp:</p>
                                <select
                                    onChange={(e) => setSuppliers_(e.target.value)}
                                    className="border-2 border-gray-600 outline-none px-2 py-1 rounded-md cursor-pointer"
                                    name="supplier"
                                    id="supplier"
                                >
                                    {suppliers.map((supplier) => (
                                        <option key={supplier.id}>{supplier.name}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="relative w-full h-[260px] bg-gray-100 overflow-scroll hide-scrollbar mb-2">
                            <table className="w-full">
                                <thead className="bg-blue-300 sticky top-0">
                                    <tr>
                                        <th className="py-2 pl-2">#</th>
                                        <th>Mã hàng hóa</th>
                                        <th>Tên hàng hóa</th>
                                        <th>Đơn vị tính</th>
                                        <th>Số lượng</th>
                                        {act === 'nhập' && (
                                            <>
                                                <th>Đơn giá</th>
                                                <th>Hạn sử dụng</th>
                                                <th>Thành tiền</th>
                                            </>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {addGoods && (
                                        <tr>
                                            <td className="flex items-center justify-center py-2 pl-2 cursor-pointer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="currentColor"
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </td>
                                            <td className="text-center">
                                                <select
                                                    onChange={(e) => setId_(e.target.value)}
                                                    className="border border-gray-500 outline-none px-2 py-[2px] rounded-sm cursor-pointer"
                                                    name="goods"
                                                    id="goods"
                                                >
                                                    {goodsLocal.map((item) => (
                                                        <option key={item.id}>{item.id}</option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="text-center">{goodsAct.name}</td>
                                            <td className="text-center">{goodsAct.unit}</td>
                                            <td className="text-center">
                                                <input
                                                    className="w-[60px] px-1 border border-gray-500 rounded-sm outline-none"
                                                    value={quantity_}
                                                    onChange={(e) => setQuantity_(Number(e.target.value))}
                                                />
                                            </td>
                                            {act === 'nhập' && (
                                                <>
                                                    <td className="text-center">
                                                        <input
                                                            className="w-[60px] px-1 border border-gray-500 rounded-sm outline-none"
                                                            value={inputPrice}
                                                            onChange={(e) => setInputPrice(Number(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="text-center">
                                                        <input
                                                            className="w-[60px] px-1 border border-gray-500 rounded-sm outline-none"
                                                            value={inputExpiry}
                                                            onChange={(e) => setInputExpiry(Number(e.target.value))}
                                                        />
                                                    </td>
                                                    <td className="text-center">{inputPrice * quantity_}</td>
                                                </>
                                            )}
                                        </tr>
                                    )}
                                    {goods_.map(
                                        (goodsItem, index) =>
                                            goodsItem.id !== '' && (
                                                <tr key={index}>
                                                    <td className="flex items-center justify-center py-2 pl-2 cursor-pointer">
                                                        <svg
                                                            onClick={() => handleDelete(index)}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1}
                                                            stroke="currentColor"
                                                            className="w-5 h-5"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                            />
                                                        </svg>
                                                    </td>
                                                    <td className="text-center">#{goodsItem.id}</td>
                                                    <td className="text-center">{goodsItem.name}</td>
                                                    <td className="text-center">{goodsItem.unit}</td>
                                                    <td className="text-center">{goodsItem.quantity}</td>
                                                    {act === 'nhập' && (
                                                        <>
                                                            <td className="text-center">{goodsItem.price}</td>
                                                            <td className="text-center">{goodsItem.date_expiry}</td>
                                                            <td className="text-center">
                                                                {goodsItem.quantity * goodsItem.price}
                                                            </td>
                                                        </>
                                                    )}
                                                </tr>
                                            ),
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-[22px] font-medium">
                                    Tổng cộng: <span className="text-red-400 font-semibold">{total}</span>
                                </p>
                            </div>

                            <div className="flex items-center">
                                {addGoods && (
                                    <div className="flex">
                                        <svg
                                            onClick={handleAddGoods}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={4}
                                            stroke="currentColor"
                                            className="w-7 h-7 text-green-500 cursor-pointer drop-shadow-md"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            />
                                        </svg>
                                        <span className="mx-2"></span>
                                        <svg
                                            onClick={() => setAddGoods(false)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={4}
                                            stroke="currentColor"
                                            className="w-7 h-7 text-red-500 cursor-pointer drop-shadow-md"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </div>
                                )}
                                <span className="mx-6"></span>
                                <Button onClick={() => setAddGoods(true)} confirm>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <Button onClick={handleConfirm} confirm>
                            Xác nhận
                        </Button>
                        <span
                            className="mx-8
                        "
                        ></span>
                        <Button onClick={onClick} cancel>
                            Hủy
                        </Button>
                    </div>
                </div>
            </BlurredBackground>
        </div>
    );
}

export default CreatePromissoryNote;
