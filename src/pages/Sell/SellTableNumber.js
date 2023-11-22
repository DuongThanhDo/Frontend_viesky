import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '~/components/Button';
import { Food } from '~/components/Food';
import { FormBillSell } from '~/components/Forms';
import { TypeOfFood } from '~/components/TypeOfFood';
import configs from '~/configs';
import { printDate } from '~/functions';
import { getLocal } from '~/functions/func_LocalStorage';

function SellTableNumber() {
    const [billsLocal, setBillsLocal] = useState(getLocal('bills'));
    const [foodsLocal] = useState(getLocal('foods'));

    console.log(billsLocal);

    const [select, setSelect] = useState('Tất cả');
    const [statusFormPay, setStatusFormPay] = useState(false);
    const [bills_, setBill_] = useState({});
    const [listFoodToBill, setListFoodToBill] = useState([]);
    const { tableNumber } = useParams();

    useEffect(() => {
        let [tempBill] = billsLocal.filter((bill) => {
            return (Number(bill.number) === Number(tableNumber) && bill.status === 0);
        });

        if (tempBill === undefined) {
            tempBill = {};
            tempBill.id = 'b' + (billsLocal.length + 1);
            tempBill.number = Number(tableNumber);
            tempBill.status = 0;
            tempBill.staff_cashier = 'Nguyễn Văn A';
            tempBill.time_in = printDate(new Date());
            tempBill.time_out = '';
            tempBill.payment = 0;
            tempBill.foods = [];
        }

        setBill_(tempBill);
        setListFoodToBill([...tempBill.foods]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [billsLocal]);

    const handleAddFoodToBill = (foods) => {
        if (!listFoodToBill.filter((foodItem) => foodItem.id === foods.id).length > 0) {
            foods.quantity = foods.quantity + 1;
            setListFoodToBill([...listFoodToBill, foods]);
        } else {
            listFoodToBill.filter((foodItem) => foodItem.id === foods.id)[0].quantity =
                listFoodToBill.filter((foodItem) => foodItem.id === foods.id)[0].quantity + 1;
            setListFoodToBill([...listFoodToBill]);
        }
    };

    return (
        <div className="h-[100%] relative flex p-6">
            {statusFormPay && (
                <div
                    onClick={() => setStatusFormPay(false)}
                    className="absolute w-[100%] h-[100%] top-0 left-0 bg-penetration2 z-10 transition-all"
                ></div>
            )}

            <div className="grow">
                <div className="flex items-center gap-8 mb-4">
                    <Button to={configs.routes.sell} confirm>
                        Trở lại
                    </Button>
                    <TypeOfFood select={select} setSelect={setSelect} />
                </div>

                <div className="h-[460px] grid grid-cols-4 gap-4 overflow-scroll overflow-x-hidden hide-scrollbar">
                    {foodsLocal.map((food) => {
                        if (select === 'Tất cả') {
                            return <Food sell onClick={handleAddFoodToBill} key={food.id} foods={food} />;
                        } else if (food.type === select)
                            return <Food sell onClick={handleAddFoodToBill} key={food.id} foods={food} />;
                        return '';
                    })}
                </div>
            </div>

            <div className="min-w-[32%] max-w-[32%] h-[100%] pl-[34px] pr-2">
                <FormBillSell
                    statusFormPay={statusFormPay}
                    setStatusFormPay={setStatusFormPay}
                    setListFoodToBill={setListFoodToBill}
                    listFoodToBill={listFoodToBill}
                    bills={bills_}
                    billsLocal={billsLocal}
                    setBillsLocal={setBillsLocal}
                />
            </div>
        </div>
    );
}

export default SellTableNumber;
