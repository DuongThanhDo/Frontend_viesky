import { bills, calendars, deliveryBills, foods, goods, receipts, staffs, suppliers, tables } from '../datas';

export const setLocal = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data, undefined, 4));
};

export const getLocal = (name) => {
    return JSON.parse(localStorage.getItem(name), undefined, 4)
}

export const pushData = () => {
    // demo login
    setLocal('IS_LOGIN', false);

    setLocal('tables', tables);
    setLocal('foods', foods);
    setLocal('bills', bills);
    setLocal('suppliers', suppliers);
    setLocal('goods', goods);
    setLocal('receipts', receipts);
    setLocal('deliveryBills', deliveryBills);
    setLocal('staffs', staffs);
    setLocal('calendars', calendars);
};
