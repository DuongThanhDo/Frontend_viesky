/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FoodBill } from '../Food';
import FormTable from './FormTable';
import configs from '~/configs';
import { getLocal, setLocal } from '~/functions/func_LocalStorage';
import { printDate } from '~/functions';

function FormBillSell({
    bills,
    listFoodToBill,
    setListFoodToBill,
    setStatusFormPay,
    statusFormPay,
    billsLocal,
    setBillsLocal,
}) {
    const [tables_] = useState(getLocal('tables'));

    const [total, setTotal] = useState(0);
    const [rerender, setRerender] = useState(false);
    const [moneyPay, setMoneyPay] = useState(0);
    const [surplusMoney, setSurplusMoney] = useState('');
    const [foodItemact, setFoodItemact] = useState({});

    useEffect(() => {
        setTotal(listFoodToBill.reduce((x, y) => x + y.price * y.quantity, 0));
    }, [listFoodToBill, rerender]);

    useEffect(() => {
        setListFoodToBill(listFoodToBill.filter((foodItem) => foodItem.id !== foodItemact.id));
    }, [foodItemact]);

    useEffect(() => {
        setMoneyPay(0);
        setSurplusMoney('');
    }, [statusFormPay]);

    const handleMoneyPay = (item) => {
        if (item === 'Xóa') {
            let money = Math.floor(moneyPay / 10);
            setMoneyPay(money);
        } else if (item === 'OK') {
            let moneySurplus = moneyPay - total;
            setSurplusMoney(moneySurplus);
        } else {
            let money = moneyPay * 10 + Number(item);
            setMoneyPay(money);
        }
    };

    const handleSaveBill = () => {
        let [table_] = tables_.filter((table) => Number(table.number) === Number(bills.number));
        let [tempBill] = billsLocal.filter((bill) => bill.id === bills.id);

        bills.foods = listFoodToBill;

        if (!table_.status) {
            table_.status = true;
            setLocal('tables', tables_);
        }

        if (tempBill === undefined) {
            setLocal('bills', [...billsLocal, bills]);
        } else {
            setLocal('bills', [...billsLocal]);
        }

        setBillsLocal(getLocal('bills'));
        alert('Lưu thành công');
    };

    const handlePay = () => {
        let [tempBill] = billsLocal.filter((bill) => bill.id === bills.id);

        if (tempBill !== undefined) {
            setStatusFormPay(true);
        } else {
            alert('Đề nghị lưu hóa đơn trước khi thanh toán!');
        }
    };

    const handleCancelBill = () => {
        let [tempBill] = billsLocal.filter((bill) => bill.id === bills.id);
        let text = 'Bạn thực sự muốn hủy hóa đơn này! Vẫn tiếp tục hủy?';
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true && tempBill !== undefined) {
            let [table_] = tables_.filter((table) => Number(table.number) === Number(bills.number));

            if (table_.status) {
                table_.status = false;
                setLocal('tables', tables_);
            }

            if (tempBill.status === 0) {
                tempBill.status = 2;
                setLocal('bills', billsLocal);
            }

            setBillsLocal(getLocal('bills'));
        }
    };

    const handlePrintBill = () => {
        let [table_] = tables_.filter((table) => Number(table.number) === Number(bills.number));
        let [tempBill] = billsLocal.filter((bill) => bill.id === bills.id);

        if (table_.status) {
            table_.status = false;
            setLocal('tables', tables_);
        }

        if (tempBill.status === 0) {
            tempBill.status = 1;
            tempBill.payment = moneyPay;
            tempBill.time_out = printDate(new Date());
            setLocal('bills', billsLocal);
        }

        setBillsLocal(getLocal('bills'));
        alert('In thành công');
    };

    return (
        <div className="relative">
            {statusFormPay && (
                <div className="absolute w-[100%] h-[100%] left-[-101%] z-20">
                    <FormTable
                        to={configs.routes.sell}
                        onClickConfirm={handlePrintBill}
                        onClickCancel={() => setStatusFormPay(false)}
                        formPay
                    >
                        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] mb-2">
                            <div className="w-[100%] flex flex-col items-center text-center">
                                <h1 className="text-[24px] font-semibold mb-3">Số tiền khách phải trả</h1>
                                <p className="w-[90%] text-[20px] font-medium border border-blue-600 bg-blue-100 rounded-lg mb-3 py-2">
                                    {total}đ
                                </p>
                            </div>

                            <div>
                                <div className="w-[100%] px-4 flex items-center justify-between gap-2 mb-3">
                                    <p className="text-[16px] font-medium">Đã nhận</p>
                                    <input
                                        className="w-[70%] font-medium border border-blue-600 bg-blue-100 rounded-lg px-2 py-1"
                                        value={moneyPay}
                                        type="number"
                                        disabled
                                    />
                                </div>
                                <div className="w-[100%] px-4 flex items-center justify-between gap-2 mb-3">
                                    <p className="text-[16px] font-medium">Tiền thừa</p>
                                    <input
                                        className="w-[70%] font-medium border border-blue-600 bg-blue-100 rounded-lg px-2 py-1"
                                        value={surplusMoney}
                                        type="number"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 shadow-lg px-4 py-6 rounded-lg w-[90%]">
                                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 'OK', 0, 'Xóa'].map((item, index) => (
                                    <button
                                        onClick={() => handleMoneyPay(item)}
                                        key={item}
                                        className="p-2 text-[18px] font-semibold text-slate-800 shadow-md rounded-md bg-slate-100 hover:bg-slate-200 act:bg-slate-300 transition-all"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </FormTable>
                </div>
            )}
            <FormTable
                to={configs.routes.sell}
                onClickConfirm={handlePay}
                onClickSave={handleSaveBill}
                onClickCancel={handleCancelBill}
                formBill
            >
                <div className="w-[100%] h-[100%] mb-2">
                    <div className="flex items-center justify-between mb-4 font-medium">
                        <div>
                            <h2>Mã hóa đơn</h2>
                            <p>#{bills.id}</p>
                        </div>

                        <p>Bàn {bills.number}</p>
                    </div>

                    <div className="h-[400px] overflow-y-scroll hide-scrollbar">
                        {listFoodToBill.length > 0 ? (
                            listFoodToBill.map((food, index) => (
                                <FoodBill
                                    foodItemact={foodItemact}
                                    setFoodItemact={setFoodItemact}
                                    rerender={rerender}
                                    setRerender={setRerender}
                                    key={index}
                                    foods={food}
                                />
                            ))
                        ) : (
                            <div className="w-[100%] h-[100%] flex items-center justify-center">
                                <p>Chưa gọi món</p>
                            </div>
                        )}
                    </div>

                    <div className="py-3 text-[18px] w-[100%] flex justify-between">
                        <span>Tổng tiền</span>
                        <span className="font-bold text-red-600">{total}đ</span>
                    </div>
                </div>
            </FormTable>
        </div>
    );
}

export default FormBillSell;
