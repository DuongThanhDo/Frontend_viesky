/* eslint-disable array-callback-return */
import { useState } from 'react';
import BillHeader from './BillHeader';
import BillItem from './BillItem';
import BillList from './BillList';
import { getLocal } from '~/functions/func_LocalStorage';

function Bill() {
    const [billsLocal] = useState(getLocal('bills'));
    const [dateBefore, setDateBefore] = useState(new Date(0, 0, 0));
    const [dateAfter, setDateAfter] = useState(new Date());

    return (
        <div className="h-full px-6 py-2">
            <BillHeader setDateBefore={setDateBefore} setDateAfter={setDateAfter} />
            <BillList>
                {billsLocal.map((bill, index) => {
                    if (new Date(bill.time_in) >= dateBefore && new Date(bill.time_in) <= dateAfter) {
                        return <BillItem key={index} bill={bill} />;
                    }
                })}
            </BillList>
        </div>
    );
}

export default Bill;
