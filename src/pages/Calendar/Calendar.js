import { createContext, useEffect, useState } from 'react';
import CalendarHeader from './CalendarHeader';
import { changeDate, checkToDay, firstDayOfWeek } from '~/functions';
import CalendarTable from './CalendarTable';
import CalendarHeaderEdit from './CalendarHeaderEdit';
import { getLocal } from '~/functions/func_LocalStorage';

export const CalendarContext = createContext();

function Calendar() {
    const [calendarsLocal, setCalendarsLocal] = useState(getLocal('calendars'));

    const [firstDayOfWeek_, setFirstDayOfWeek] = useState(firstDayOfWeek(new Date()));
    const [dayOnWeek, setDayOnWeek] = useState([]);
    const [statusEdit, setStatusEdit] = useState(false);
    const [nameStaff, setNameStaff] = useState('');

    useEffect(() => {
        const tempWeek = new Array(7).fill({ date: '', morning: [], afternoon: [], evening: [] });
        let i = 0;

        while (i < 7) {
            // eslint-disable-next-line no-loop-func, array-callback-return
            calendarsLocal.map((item) => {
                if (checkToDay(new Date(item.date), changeDate(firstDayOfWeek_, i))) {
                    tempWeek[i] = item;
                    // eslint-disable-next-line array-callback-return
                    return;
                }
            });
            i += 1;
        }

        setDayOnWeek(tempWeek);
    }, [calendarsLocal, firstDayOfWeek_]);

    const value = {
        nameStaff,
        setNameStaff,
        setCalendarsLocal,
        calendarsLocal,
        firstDayOfWeek_,
        dayOnWeek,
        statusEdit,
        setFirstDayOfWeek,
        setStatusEdit,
    };

    return (
        <CalendarContext.Provider value={value}>
            <div className="h-full p-6">
                {statusEdit ? <CalendarHeaderEdit /> : <CalendarHeader />}

                <CalendarTable />
            </div>
        </CalendarContext.Provider>
    );
}

export default Calendar;
