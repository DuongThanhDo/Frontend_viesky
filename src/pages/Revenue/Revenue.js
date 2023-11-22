import { useState } from 'react';
import RevenueHeader from './RevenueHeader';
import { changeDate } from '~/functions';
import RevenueChart from './RevenueChart';

function Revenue(   ) {
    const [dateBefore, setDateBefore] = useState(changeDate(new Date(), -7));
    const [dateAfter, setDateAfter] = useState(new Date());
    const [total, setTotal] = useState(0);

    return (
        <div className="w-full h-full p-6">
            <RevenueHeader total={total} setDateBefore={setDateBefore} setDateAfter={setDateAfter} />

            <RevenueChart setTotal={setTotal} dateBefore={dateBefore} dateAfter={dateAfter} />
        </div>
    );
}

export default Revenue;
